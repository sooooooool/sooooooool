function Myfunction() {
  console.log(this);
}

Myfunction();
let test = new Myfunction();
