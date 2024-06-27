function oldEnough(age: number): never | boolean {
  if (age > 59) {
    throw Error("Too old!");
  }
  if (age <= 18) {
    return false;
  }
  return true;
}

//if문을 여러 개 중첩하거나 else if를 쓸 때가 있다.
//어떤 차이가 있냐하믄 밑 if문꺼도 계속 이어서 컴터가 돌려지는데 else if는 위 if문이 참이면 걍 무시하고 호로록 끝.
