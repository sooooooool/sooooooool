class Vehicle {
  constructor(protected wheelCount: number) {}
  showNumberOfWheels() {
    console.log(`moved ${this.wheelCount}`);
  }
} //protected는 자식클래스에서 접근이 가넝 하지만 private는 더 강한 개념이라 자식에서 부모로 이케이케 넘어오기가 어려워...?

class Motocycle extends Vehicle {
  constructor() {
    super(2);
  }

  updateWheelCount(newWheelCount: number) {
    this.wheelCount = newWheelCount;
  }
}

class Automobile extends Vehicle {
  constructor() {
    super(4);
  }
}

const motorCycle = new Motocycle();
motorCycle.updateWheelCount(6);
motorCycle.showNumberOfWheels();
const automobile = new Automobile();
automobile.showNumberOfWheels();
