// Promise
const promiseFunc = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("This is error");
    }, 1000);
  });

const newPromise = promiseFunc()
  .then((value) => {
    console.log("Promise:", value);
    return 100;
  })
  .catch((error) => {
    console.log("Promise:", error);
    return -100;
  })
  .finally(() => {
    console.log("Promise:", "Ket Thuc Roi");
  });
newPromise.then((value) => {
  console.log("Promise:", value);
});

/**
 * Async / Await
  - await chỉ sử dụng được trong một async function
  - Chỉ sử dụng await với promise
 */

const promiseFunc2 = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Hello");
    }, 1000);
  });

const handle = async () => {
  try {
    const value = await promiseFunc2();
    console.log("Async await:", value);
  } catch (error) {
    console.warn("Async await:", error);
  } finally {
    console.log("Async await:", "Finally");
  }
};

handle();
