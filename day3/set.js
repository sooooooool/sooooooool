const userIds = [1, 2, 1, 3, 1, 2, 3, 4, 5, 6, 4, 6, 8, 9, 7];

const uniqueIds = new Set(userIds);

console.log("uniqueIds : ", uniqueIds);

uniqueIds.add(10);
console.log("uniqueIds add 10 : ", uniqueIds);

console.log("Has :", uniqueIds.has(3));

console.log("size", uniqueIds.size);

for (item of uniqueIds) {
  console.log("iterate : ", item);
}

for (item of userIds) {
  console.log("array iterate ", item);
}

//로그파일에서 아무런 액션을 취하지 않은 사람은 누구냐?
//로그파일에서 한 번이라도 접속한 사용자를 찾기

//value들로 이루어진 컬렉션이래.

//log 파일에다가 아무런 action을 취하지 않은 사용자는 누구인가? 를 찾을 수 있을 때 미니멀하게 추릴 수 있음.
//log 파일에서 한 번이라도 접속한 사용자를 찾아 이럴 때도 id 찾고 중복값 추리기가 유용함.
