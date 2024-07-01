function doSomething(a, ...others) {
  // ...others = [2, 3, 4, 5, 6, 7];
  console.log(a, others, others[others.length - 1]);
  // 1 [2, 3, 4, 5, 6, 7] 7 배열의 length에다가 젤 마지막 꺼를 -1해줘라
}

doSomething(1, 2, 3, 4, 5, 6, 7);
