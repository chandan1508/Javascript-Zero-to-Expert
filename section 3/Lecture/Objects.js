const chandan = {
  firstName: "Chandan",
  lastName: "Mukhiya",
  age: 2037 - 1991,
  job: "Teacher",
  friends: ["Jitender", "rahul", "ravi"],
};
console.log(chandan);

console.log(chandan.lastName);
console.log(chandan["lastName"]);

const nameKey = "Name";
console.log(chandan["first" + nameKey]);
console.log(chandan["last" + nameKey]);
