const { response } = require("express");

const usersGet = (req, res = response) => {
  const { nombre } = req.query;
  res.json({
    msg: "Get Api",
    nombre,
  });
};

const usersPut = (req, res = response) => {
  const { id } = req.params;
  res.json({
    msg: "Put Api",
    id,
  });
};

const usersPost = (req, res = response) => {
  // const body = req.body;
  const { nombre, edad } = req.body;
  res.json({
    msg: "Post Api-users",
    nombre,
    edad,
  });
};

const usersDelete = (req, res = response) => {
  res.json({
    msg: "Delete Api",
  });
};

module.exports = {
  usersGet,
  usersDelete,
  usersPost,
  usersPut,
};
