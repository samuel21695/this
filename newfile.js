// 객체를 만드는 것이 아닌 뽑아내는 것
function student(name, number) {
  this.name = name;
  this.number = number;
};

let studentList = ["소사무엘", "유승민"];
let studentArray = [];
for (i=0; i < studentList.length; i++) {
  studentArray[i] = new student(studentList[i], i+1);
};
console.log(studentArray);

// let test = new student("소사무엘", "5");
// console.log(test);

// // 변수를 그냥 만든 것
// let studentList = {
//   name : "hello",
//   number : 1,
// }