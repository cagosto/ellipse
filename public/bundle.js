(function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var Test = function Test() {
  	classCallCheck(this, Test);

  	this.foo = function () {
  		console.log(true);
  	};

  	console.log(true);
  };

  new Test();

}());
//# sourceMappingURL=bundle.js.map
