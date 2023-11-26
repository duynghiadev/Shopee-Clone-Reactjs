// Module Pattern
// const map = (function() {
//   // Private variable
//   const toaDo = [15.90123123, 105.80123123]
//   // Private function
//   function layToaDo() {
//     return toaDo
//   }
//   return {
//     // Public function
//     inToaDo: function() {
//       console.log(layToaDo())
//     }
//   }
// })()

// Revealing Module Pattern
const map = (function () {
  // Private variable
  const toaDo = [15.90123123, 105.80123123]
  // Private function
  function layToaDo() {
    return toaDo
  }
  // Private function
  function inToaDo() {
    console.log(layToaDo())
  }
  return {
    // Public function
    inToaDo
  }
})()
