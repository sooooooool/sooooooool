// function getEmployee(id) {
//   return {
//     name: "John",
//     age: 35,
//     address: "123 st",
//     count: "United States",
//   };
// }

// const { name: fullName, age } = getEmployee(22); //객채로 받을 때는 꼭 중괄호 써야해.

// console.log("employee", fullName, age);

function getEmployeeWorkInfo(id) {
  return [id, "Office st", "France"];
}

const [id, officeAddress] = getEmployeeWorkInfo(33);
console.log("employee", id, officeAddress);
