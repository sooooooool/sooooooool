var NamespaceA;
(function (NamespaceA) {
    class A {
        constructor() {
            this.aname = "A";
        }
    }
})(NamespaceA || (NamespaceA = {}));
class B {
    constructor() {
        this.bname = "B";
        this.a = new A();
        this.b = new B();
        this.c = Object.assign(Object.assign({}, a), b);
        this.d = Object.assign(a, b);
        this.aname = "a1";
    }
}
