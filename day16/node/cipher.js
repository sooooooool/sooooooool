const crypto = require('crypto');

const algorithm = 'aes-256-cbc'; //암호화 알고리즘과 키, 초기화 벡터
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';
const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64'); //암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩
result += cipher.final('base64'); //출력 결과물의 인코딩을 넣어주면 암호화 완료
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv); //복호화할 때 사용. 암호화할 때 사용했던 알고리즘과 키, iv 넣어줌
let result2 = decipher.update(result, 'base64', 'utf8'); //암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩
result2 += decipher.final('utf8'); //복호화 결과물의 인코딩
console.log('복호화:', result2);