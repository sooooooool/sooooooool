//추상클래스: 함수에 abstract를 달면 구현물을 직접 안해도 되고 상속물을 구현.... 뭐라고?

namespace AbstractNamespace {
  abstract class Vehicle {
    constructor(protected wheelCount: number) {}
    abstract updateWheelCount(newWheelCount: number): void;
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
    updateWheelCount(newWheelCount: number): void {
      this.wheelCount = newWheelCount;
      console.log(`Automobile has ${this.wheelCount}`);
    }

    showNumberOfWheels() {
      console.log(`moved ${this.wheelCount}`);
    }
  }

  const motorCycle = new Motocycle();
  motorCycle.updateWheelCount(1);
  motorCycle.showNumberOfWheels();
  const automobile = new Automobile();
  automobile.updateWheelCount(5);
  automobile.showNumberOfWheels();
}
