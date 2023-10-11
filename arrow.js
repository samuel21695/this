function outerOne() {

  function innerOne() {
    console.log(this);
  }
  innerOne();
};

outerOne()