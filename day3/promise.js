const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I completed successfully");
    reject("I failed");
  }, 500);
});

myPromise
  .then((done) => {
    console.log("done:", done);
  }) //then은 위 값들을 실행하고 나서...!
  .catch((err) => {
    console.log("err:", err);
  });
