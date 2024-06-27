type Run = (miles: number) => boolean;

let runner: Run = function (miles: number): boolean {
  if (miles > 10) {
    return true;
  }
  return false;
};

// let runner: Run = function (miles: number): boolean {
//   if (miles > 10) {
//     return true;
//   }
//   return false;
// }; 위 코드랑 같은 값이 나오는 코드야!

console.log(runner(9));
