function student(name, number) {
  this.name = name;
  this.number = number;
};

let test = new student("소사무엘", "5");
console.log(test);