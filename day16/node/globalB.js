const A = require('./globalA'); //globalA 함수를 받아옴

global.message = '안녕하세요'; //여기에서 메세지 변수를 등록해줌.
console.log(A()); //함수로 등록되어 있는 걸 실행.