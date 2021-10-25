// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// Reminder: The test will call your function

// describe("", () => {
//   it("", () => {
//     expect().toEqual()
//   })
// })


// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// create a function - dontPanic
// parameters - array
// iteration - map gives us access to each object
// object level - iterpolation to get the sentence
// capitalizing - split into array, map, uppercase zero index, splice to and add the rest of the word, join


// a) Create a test with an expect statement using the variable provided.

describe("dontPanic", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    var people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(dontPanic(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.

const dontPanic = (array) => {
  return array.map(object => {
    let properCase = object.name.split(" ").map(value => value[0].toUpperCase() + value.slice(1)).join(" ")
    return `${properCase} is ${object.occupation}.`
  })
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// create a function - remainsByTrey
// parameters - array
// iteration - filter for typeof number
// iteration - map modulo % 3


// a) Create a test with an expect statement using the variables provided.

describe("remainsByTrey", () => {
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3", () => {
    var hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    var hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainsByTrey(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainsByTrey(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// b) Create the function that makes the test pass.

// const remainsByTrey = (array) => {
//   let numbsOnly = array.filter(value => {
//     return typeof value === "number"
//   })
//   return numbsOnly.map(value => {
//     return value % 3
//   })
// }
const remainsByTrey = (array) => {
  return array.filter(value => typeof value === "number").map(value => value % 3)
}


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// create a function - iceCubed
// parameters - array
// iteration - map
// anchor variable for accumlation

// a) Create a test with an expect statement using the variables provided.

describe("iceCubed", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    var cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    var cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(iceCubed(cubeAndSum1)).toEqual(99)
    expect(iceCubed(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

// const iceCubed = (array) => {
//   let anchor = 0
//   array.map(value => anchor += value ** 3)
//   return anchor
// }

const iceCubed = (array) => {
  return array.map(value => value ** 3).reduce((a, b) => a + b)
}
