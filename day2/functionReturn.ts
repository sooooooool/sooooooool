//function runMore(distance: number): function은 함수 지정 값, runMore(변수명), (distance: number)는 인자 값(파라미터, 인풋 값), number는 반환 값(아웃풋)이라고 이해하면 돼!

function runMore(distance: number): number {
  return distance + 10; //구현문
}

// function runMore(distance: number): void; //이건 아예 성립이 안돼.

console.log(runMore(20));

function runMore2(distance: number) {
  console.log(distance);
}

console.log(runMore2(20));
