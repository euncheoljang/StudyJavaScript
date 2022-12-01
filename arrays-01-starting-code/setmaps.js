// const ids = new Set(["Hi", "from", "Set!"]);
// // 중복된 값은 안들어간다
// ids.add("from");
// ids.add("2");
// // 없는걸 지우려하거나 중복된 값을 넣으려하면 무시할뿐임 오류가 안남
// ids.delete("Hisdasdas");
// console.log(ids);
// console.log(ids.has(1));

// for (const entry of ids.entries()) {
//   console.log(entry)
//   console.log(entry[0])
// }


// const person1 = {name: "Max"};
// const person2 = {name: "Manuel"};

// const personData = new Map([[person1, [{data: "yesterday", price: 10}]]]);

// personData.set(person2, [{data: "two weeks ago", price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// // for (const entry of personData.entries()) {
// for (const [key, value] of personData.entries()) {
//   // console.log(entry);
//   console.log(key, value)
// }

// for (const key of personData.keys()) {
//   console.log(key);
// }
// for (const value of personData.values()) {
//   console.log(value);
// }

// console.log(personData.size)

let person = {name: "Max"};
const persons = new WeakSet();
persons.add(person);

console.log(persons);