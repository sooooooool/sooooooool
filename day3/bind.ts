class A {
  name: string = "A";
  go() {
    console.log(this.name);
  }
}

class B {
  name: string = "B";
  go() {
    console.log(this.name);
  }
}

const a = new A();
a.go();

const b = new B();
b.go = b.go.bind(a);
b.go();

console.log(b);
console.log(b.go);
//다른 class에 있는 상속 값도 가져다 쓸 수 있는 방법.
