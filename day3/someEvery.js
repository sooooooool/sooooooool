const wigets = [
  { id: 1, color: "blue" },
  { id: 2, color: "yellow" },
  { id: 3, color: "orange" },
  { id: 4, color: "blue" },
];

console.log(
  "some are blue : ",
  wigets.some((item) => {
    return item.color === "blue";
  })
);
console.log(
  "every are blue : ",
  wigets.every((item) => {
    return item.color === "blue";
  })
);
//some은 or, every는 and 느낌
