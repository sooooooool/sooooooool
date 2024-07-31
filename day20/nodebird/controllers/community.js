const { User } = require("../models");

exports.renderProfile = async (req, res) => {
  let data = await User.findAll({});
  res.render("profile", { title: "내 정보 - NodeBird", data: data });
};

exports.renderJoin = (req, res) => {
  res.render("join", { title: "회원가입 - NodeBird" });
};

exports.renderMain = (req, res, next) => {
  const twits = [];
  res.render("main", {
    title: "NodeBird",
    twits,
  });
};
