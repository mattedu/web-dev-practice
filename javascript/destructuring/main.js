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
const data = {
  name: "Scott",
  hobbies: [
    "bowling",
    "programming",
    "blackjack"
  ],
  pets: [
    {
      type: "dog",
      name: "Pogo",
      previousOwner: {
        name: "Tyler",
        hobbies: [
          "painting",
          "cooking",
          "bike riding"
        ]
      }
    },
    {
      type: "cat",
      name: "Pickles",
      previousOwner: {
        name: "Karen",
        hobbies: [
          "teaching",
          "boxing",
          "reading"
        ]
      }
    }
  ],
  job: {
    title: "Teacher",
    department: {
      name: "Web Design & Development",
      company: "Full Sail",
      supervisor: {
        name: "Betsy",
        title: "Program Coordinator",
        employees: [
          {
            name: "Scott",
            title: "Teacher"
          },
          {
            name: "Gary",
            title: "Teacher"
          },
          {
            name: "Howard",
            title: "Teacher"
          },
          {
            name: "Patrick",
            title: "Teacher"
          }
        ]
      }
    }
  }
}

/* START HERE */
console.log(promises); // Initial Log