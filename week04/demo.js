async function foo() {
  console.log("1");
  await new Promise(resolve => resolve());
  console.log("2");
}

new Promise(resolve => {
  console.log("3");
  resolve();
}).then(() => {
  console.log("4");
  new Promise(resolve => resolve())
    .then(() => console.log("5"));
});

setTimeout(function () {
  console.log("6");
  new Promise(resolve => resolve()).then(console.log("7"));
}, 0);

console.log("8");

foo();

// 3 8 1 4 2 5 6 7
