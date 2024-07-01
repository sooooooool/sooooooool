var myFunc = function (message, title, age) {
    console.log(message);
    console.log(title);
    console.log(age);
    return true;
};
myFunc("hello", "myfirstarrowFunc", 30);
var func = function () { return console.log("func"); }; //func(함수이름)()함수입력 => console.log('func');(로직처리상태)
var func1 = function () { return ({ name: "dave" }); }; //무명의 함수 사용시 소괄호 중괄호(없어도 추론해서 mapping해준다...!!)
var func2 = function () {
    var val = 20;
    return val;
}; //기존의 자주 본 상태 첫번째랑 세번째만 잘 봐두면 될 거 같아.
console.log(func());
console.log(func1());
console.log(func2());
