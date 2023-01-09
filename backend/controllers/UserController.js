const UserModel = require("../model/UserModel");

exports.createUser = async (request, response, next) => {
  if (
    !request.body?.firstName ||
    !request.body?.lastName ||
    !request.body?.email
  ) {
    response
      .status(400)
      .json({ message: `Firstname,lastname or email are required.` });
  }
  const createUser = await UserModel.create({ ...request.body });
  response
    .status(201)
    .json({ message: `New user is created`, data: createUser });
};
