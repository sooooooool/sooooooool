const filterItems = [
  { name: "jon", age: 20 },
  { name: "linda", age: 22 },
  { name: "jon", age: 40 },
];

const results = filterItems.filter((item, index) => {
  console.log(index);
  return item.name === "jon"; //비교구문 중에 ==은 같은값인지 알려주는 거고 ===는 이제 양 옆에 있는 친구들이 찐인가. 완전 동일한가. 좀 더 높은 수준의 비교구문이야. 글서 타이트해.
});

console.log(results);
