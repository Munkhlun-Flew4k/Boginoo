const Link = require("../model/models");
// const crypto = require('crypto')
// crypto.randomBytes(5).toString('hex')
exports.createBoginoo = async (request, response) => {
  console.log("dsa");
  if (!request.body?.originalURL) {
    response.status(404).send({ message: "originalUrl is required!" });
  } else {
    const originalURL = request.body;
    try {
      const link = await Link.create(originalURL);
      const shortlink = await Link.findByIdAndUpdate(link._id, {
        shortURL: "http://localhost:8000/" + link._id,
      });
      response.status(201).send({
        message: "Successfully created!",
        shortURL: {
          ...shortlink._doc,
          shortURL: "http://localhost:8000/" + link._id,
        },
      });
    } catch (error) {
      response.status(404).send({ message: "Error", error });
    }
  }
};
