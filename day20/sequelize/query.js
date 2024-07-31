const { SELECT } = require("sequelize/lib/query-types");
const { User } = require("./models");
User.create({
  name: "zero",
  age: 24,
  married: false,
  comment: "자기소개1",
});
