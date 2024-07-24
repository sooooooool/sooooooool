const path = require('path');

// 현재 파일의 절대 경로를 문자열로 저장합니다.
const string = __filename;

// path.sep: 현재 운영체제에서 경로 구분자로 사용되는 문자를 반환합니다.
console.log('path.sep:', path.sep); // Windows에서는 \, POSIX에서는 /

// path.delimiter: 환경 변수에서 여러 경로를 구분하는 데 사용되는 문자를 반환합니다.
console.log('path.delimiter:', path.delimiter); // Windows에서는 ;, POSIX에서는 :

console.log('-------------------------------');

// path.dirname(): 주어진 경로의 디렉토리 이름을 반환합니다.
console.log('path.dirname():', path.dirname(string)); // 디렉토리 경로를 출력

// path.extname(): 주어진 경로의 파일 확장자를 반환합니다.
console.log('path.extname():', path.extname(string)); // 파일 확장자를 출력

// path.basename(): 주어진 경로의 파일 이름을 반환합니다.
console.log('path.basename():', path.basename(string)); // 파일 이름을 출력

// path.basename - extname: 파일 이름에서 확장자를 제외한 이름을 반환합니다.
console.log('path.basename - extname:', path.basename(string, path.extname(string))); // 확장자를 제외한 파일 이름을 출력

console.log('-------------------------------');

// path.parse(): 경로를 분석하여 객체로 반환합니다.
console.log('path.parse()', path.parse(string)); // 경로를 분석한 객체를 출력

// path.format(): 주어진 객체를 경로 문자열로 변환합니다.
console.log('path.format():', path.format({
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
})); // 객체를 경로 문자열로 변환하여 출력

// path.normalize(): 비정상적인 경로를 정규화하여 반환합니다.
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js')); // 정규화된 경로를 출력

console.log('----------------------------------');

// path.isAbsolute(): 주어진 경로가 절대 경로인지 확인합니다.
console.log("path.isAbsolute(./home):", path.isAbsolute("./home"));
