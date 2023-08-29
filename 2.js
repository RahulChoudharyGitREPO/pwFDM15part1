const student = {
  name: "Rahul",
  age: 21,
  grade: " A",

  updateInfo: function (newName, newAge, newGrade) {
    this.name = newName;
    this.age = newAge;
    this.grade = newGrade;
  },
};
// console.log(student);

student.updateInfo("aman ", "22", "a+");
console.log(student);
