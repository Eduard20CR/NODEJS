// const fetchData = () => {
//   const promiseTest = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("text test");
//     }, 2000);
//   });
//   return promiseTest;
// };

// setTimeout(() => {
//   console.log("Time Done");
//   fetchData(decirTexto);
// }, 2000);

// function decirTexto(str) {
//   console.log(str);
// }

//

const promiseasd = new Promise((resolve, reject) => {
  resolve("hello");
  reject("no funciona mamon");
});

promiseasd
  .then((str) => {
    console.log(str);
    return str;
  })
  .catch((str) => {
    console.log(str);
  });
