const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y); //첫번째 인자로 넣은 함수를 사용했을 때 경고 메시지 출력
}, 'dontUseMe 함수는 decrecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2); //두번째 인자로 경고 메시지 넣으면 됨. 함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용함.

const randomBytesPromise = util.promisify(crypto.randomBytes); //콜백 패턴을 프로미스 패턴으로 바꿔줌.
randomBytesPromise(64).then((but) => {
  console.log(buf.toString('base64'));
})
.catch((error) => {
  console.error(error);
});
