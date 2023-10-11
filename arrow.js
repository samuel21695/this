// 두 함수의 차이점은 무엇일까

function outerOne() {
  return "hello";
};


// 이름이 있는 듯 하지만 없는 "익명 함수" = "함수 리터럴"
const outerTwo = function () {
  return "bye"
};

const outerThree = () => "wow";

// 매개변수가 하나일 경우
const outerFour = a => a;

console.log(outerOne());
console.log(outerTwo());
console.log(outerThree());