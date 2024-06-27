namespace OptionalChainingNS {
  interface Wheels {
    count?: number;
  } //기본적으로 chaining이 연결되는거쟈나. 이건 선택적인 연결. 조건문이랑 비슷한데 좀 더 간단하게 쓰려고 만든 코드.

  interface Vehicle {
    wheels?: Wheels;
  }

  class Automobile implements Vehicle {
    constructor(public wheels?: Wheels) {}
  } //객체가 생성됨.

  const car: Automobile | undefined = new Automobile({
    count: undefined,
  });
  console.log("car ", car);
  console.log("wheels ", car?.wheels);
  console.log("count ", car?.wheels?.count);

  // const count = !car ? 0
  // : !car.wheels ? 0
  // : !car.wheels.count ? 0 / ?의 뜻이 nulll값이 아니면 0을 보여줘.
  // : car.wheels.count; 이게 삼항연산자야.

  const val1 = undefined;
  const val2 = 10;
  const result = val1 ?? val2; //??은 null 병합자. 앞 값이 null일 때 뒤 값이 들어가는 거야. 옛날에는 const result = cal1 !=null ? val1 : val2; 이렇게 썼대. 이게 최최최종 버젼 너낌으로다가.
}
