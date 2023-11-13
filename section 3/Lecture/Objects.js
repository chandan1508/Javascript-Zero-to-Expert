const chandan = {
  firstName: "Chandan",
  lastName: "Mukhiya",
  birthyear: 1991,
  job: "Teacher",
  friends: ["Jitender", "rahul", "ravi"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthyear;
    return this.age;
  },

  getSummery: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license.`;
  },
};
// console.log(chandan);

// console.log(chandan.lastName);
// console.log(chandan["lastName"]);

// const nameKey = "Name";
// console.log(chandan["first" + nameKey]);
// console.log(chandan["last" + nameKey]);

console.log(chandan.getSummery());
