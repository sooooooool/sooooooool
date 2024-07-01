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

const a = new A(); //new라는 키워드를 이용하여 객체를 만들어냄
a.go();

const b = new B();
b.go = b.go.bind(a);
b.go();

console.log(b);
console.log(b.go);
