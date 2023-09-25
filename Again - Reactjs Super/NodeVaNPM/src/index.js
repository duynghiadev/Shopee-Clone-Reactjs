import "core-js/modules/es.object.values";
import "core-js/modules/es.promise";

import sum from "./untils";
import "./styles/style.css";
import "./styles/style.scss";
import domHandler from "./dom";
console.log(sum(100, 40));

domHandler();

// ES6 spread operator
const person = {
  name: "Duy Nghia Dev",
};
const personClone = {
  ...person,
};
console.log("personClone", personClone);

// ES7 object.values
console.log("Object.values", Object.values(personClone));

// Promise Async Await
const handle = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(100);
    }, 1000);
  });
};

const main = async () => {
  const value = await handle();
  console.log("Value", value);
};
main();
