const users = [
  { id: 1, firstName: "Saraa", lastName: "Naraa" },
  { id: 2, firstName: "Orgil", lastName: "Tumur" },
];

exports.getUsers = (req, res, next) => {
  res.status(200).json({
    users: users,
  });
};

exports.createUser = (req, res, next) => {
  users.push({ id: users.length + 1, ...req.body });
  res.status(400).json({ message: `New user is created.` });
};

exports.getUser = (req, res, next) => {
  const { id } = req.params;
  if (id > users.length) {
    res.status(400).json({ message: `${req.params.id} id does not exist` });
  } else {
    res.status(200).json(users[parseInt(id) - 1]);
  }
};

exports.updateUser = (req, res, next) => {
  if (id > users.length) {
    res.status(400).json({ message: `${req.params.id} id does not exist` });
  } else {
    res
      .status(200)
      .json({ message: `User with ${req.params.id} id is updated` });
  }
};

exports.deleteUser = (req, res, next) => {
  const { id } = req.params;
  if (id > users.length) {
    res.status(400).json({ message: `${req.params.id} id does not exist` });
  } else {
    res
      .status(200)
      .json({ message: `User with ${req.params.id} id is deleted` });
  }
};
