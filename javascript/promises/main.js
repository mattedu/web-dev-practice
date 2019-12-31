/*
  Instructions:
  Without changing any of the pre-defined promises,
  Console log the completed object.
  Combine each of Robin Hood's attributes together
  and console log a complete object containing each property
  of Robin Hood.

  Expected Outcome:
  {
    name: "Robin Hood"
    country: "England"
    money: "$0.00"
  }
*/

/* DO NOT CHANGE */
const promises = [
  new Promise((res) => {
      return setTimeout(() => {
          res({name: "Robin Hood"})
      }, 1000)
  }),
  new Promise((res) => {
      return setTimeout(() => {
          res({country: "England"})
      }, 2000)
  }),
  new Promise((res) => {
      return setTimeout(() => {
          res({money: "$0.00"})
      }, 5000)
  })
]

/* START HERE */
console.log(promises); // Initial Log