// function a() {
//   console.log(this)
// };

function a(callback) {
  return callback();
};

console.log(a(function() {
  console.log(this);
  console.log("-----------------------------")
  // 변수
  console.log(global);
}))