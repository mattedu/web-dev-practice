/*
  Instructions:
  Below is a data object that is storing information about
  a person named Scott. The information on the first level of
  properties is simply Scott's name, hobbies, pets, and job, but
  some of these properties can go quite in-depth.

  Using object destructuring, get the required properties
  from the data object below, and console log them. See the tasks
  below to know what properties to get.

  Task 1:
    -Get Scott's name.

  Task 2:
    -Get Scott's pet Pogo's previous owner's name

  Task 3
    -Get the last two hobbies in Scott's hobbies 

  Task 4
    -Get Scott's department supervisor and the number of employees underneath the supervisor
    *Hint, you can also destructure array properties

  Task 5
    -Get Scott's, Cat's "type" property, and rename the variable to "species".
    
  Task 6
    -Get ALL of the arrays in the data object, ignoring only the first 
    element in each array.
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

// Example Task of getting the Hobbies from the data object
const { hobbies } = data
console.log(hobbies);

/* START HERE */