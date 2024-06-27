var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a;
    var Automobile = /** @class */ (function () {
        function Automobile(wheels) {
            this.wheels = wheels;
        }
        return Automobile;
    }()); //객체가 생성됨.
    var car = new Automobile({
        count: undefined,
    });
    console.log("car ", car);
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
    var val1 = undefined;
    var val2 = 10;
    var result = val1 !== null && val1 !== void 0 ? val1 : val2; //??은 앞 값이 null일 때 뒤 값이 들어가는 거야. 옛날에는 const result = cal1 !=null ? val1 : val2; 이렇게 썼대.
    // const count = !car ? 0
    // : !car.wheels ? 0
    // : !car.wheels.count ? 0
    // : car.wheels.count;
})(OptionalChainingNS || (OptionalChainingNS = {}));
