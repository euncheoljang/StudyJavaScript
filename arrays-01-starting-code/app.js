// const numbers = [1, 2, 3,];
// console.log(numbers)

// // const moreNumbers = new Array(5);
// const moreNumbers1 = Array(5);
// const moreNumbers2 = Array(5, 2);
// console.log(moreNumbers1)

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers)

// const listItems = document.querySelectorAll("li");
//   console.log(listItems)

// // 이터러블을 어레이로 바꾸기 좋음
// const moreNumbers = Array.from("Hi!") 
// console.log(moreNumbers)

// const hobbies = ["Cooking", "Sports"];
// const personalData = [30, "Max", {moreDetail: []}];

// const analysticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analysticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints)
//   }
// }

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading");
hobbies.unshift("Coding");
console.log(hobbies);
const popedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = "Coding";
hobbies[5] = "Reading";
console.log(hobbies)


