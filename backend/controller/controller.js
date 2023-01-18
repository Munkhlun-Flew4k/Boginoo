const { request } = require("http");
const Link = require("../model/models");

exports.createBoginoo = async (request, response) => {
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

exports.getLinks = async (request, response) => {
  const links = await Link.find({});
  response.status(201).send({
    message: "Successfully created!",
    data: links,
  });
};
