const Link = require("../model/models");

exports.createBoginoo = async (request, response) => {
  if (!request.body?.originalURL) {
    response.status(404).send({ message: "originalUrl is required!" });
  } else {
    const originalURL = request.body;
    try {
      const link = await Link.create(originalURL);
      await Link.findByIdAndUpdate(link.id, {
        shortURL: "http://localhost:8000/" + link.id,
      });
      console.log(shortURL);
      response.status(201).send({ message: "Successfully created!" });
    } catch (error) {
      response.status(404).send({ message: "Error", error });
    }
  }
};
