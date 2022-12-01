const ids = new Set(["Hi", "from", "Set!"]);
// 중복된 값은 안들어간다
ids.add("from");
ids.add("2");
ids.delete("Hisdasdas");
console.log(ids);
console.log(ids.has(1));

for (const entry of ids.entries()) {
  console.log(entry)
  console.log(entry[0])
}