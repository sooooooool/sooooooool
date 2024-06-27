var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(wheelCount) {
        this.wheelCount = wheelCount;
    }
    Vehicle.prototype.showNumberOfWheels = function () {
        console.log("moved ".concat(this.wheelCount));
    };
    return Vehicle;
}()); //protected는 자식클래스에서 접근이 가넝 하지만 private는 더 강한 개념이라 자식에서 부모로 이케이케 넘어오기가 어려워...?
var Motocycle = /** @class */ (function (_super) {
    __extends(Motocycle, _super);
    function Motocycle() {
        return _super.call(this, 2) || this;
    }
    Motocycle.prototype.updateWheelCount = function (newWheelCount) {
        this.wheelCount = newWheelCount;
    };
    return Motocycle;
}(Vehicle));
var Automobile = /** @class */ (function (_super) {
    __extends(Automobile, _super);
    function Automobile() {
        return _super.call(this, 4) || this;
    }
    return Automobile;
}(Vehicle));
var motorCycle = new Motocycle();
motorCycle.updateWheelCount(6);
motorCycle.showNumberOfWheels();
var automobile = new Automobile();
automobile.showNumberOfWheels();
