function eat(calories: number) {
  console.log("I ate " + calories + " calories.");
}

function sleepIn(hours: number): void {
  console.log("I slept for " + hours + " hours.");
}

let ate = eat(100);
console.log(ate);
let slept = sleepIn(10);
console.log(slept);