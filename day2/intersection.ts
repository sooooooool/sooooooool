let obj: { name: string } & { age: number } = {
  name: "tom",
  age: 25,
};

console.log(obj);
//동적으로 타입의 선언과 정의를 동시에 할 수 있음. 근데 이건 and의 개념이고
