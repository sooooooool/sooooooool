const mappedEmp = new Map();
mappedEmp.set("linda", { fullName: "Linda Johnson", id: 1 });
mappedEmp.set("jim", { fullName: "Jim Thomson", id: 2 });
mappedEmp.set("pam", { fullName: "Pam Dryer", id: 3 });

console.log(mappedEmp);
console.log("get", mappedEmp.get("jim"));
console.log("size", mappedEmp.size);

for (let [key, val] of mappedEmp) {
  console.log("iterate", key, val);
}
//[key, val]은 구조분해야.
//key-value의 쌍으로 이루어져있는 컬렉션이다.
