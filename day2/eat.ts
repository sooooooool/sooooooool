function eat(calories: number) {
  console.log("I ate " + calories + " calories.");
} //return 값이 없어서 undefined로 나오는겨.

function sleepIn(hours: number): void {
  console.log("I slept for " + hours + " hours.");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);
