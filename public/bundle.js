(function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var Ellipse = function Ellipse() {
  	var _this = this;

  	var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  	classCallCheck(this, Ellipse);

  	this.ellipseCopy = function (copy) {
  		for (var i = 0; i < _this.countVal.length; i++) {
  			var size = _this.settings[i].width;
  			var winSize = window.innerWidth;

  			if (winSize < size) {
  				return copy.substring(0, _this.countVal[i]) + "...";
  			}
  		}

  		return copy;
  	};

  	this.settings = settings;
  	this.countVal = settings.map(function (val) {
  		return val.count;
  	});
  };

  var copyNode = document.querySelector('.test');
  var copy = copyNode.textContent;

  var copyEllipse = new Ellipse([{
    width: 768,
    count: 50
  }, {
    width: 980,
    count: 100
  }, {
    width: 1280,
    count: 150
  }]);

  copyNode.innerHTML = copyEllipse.ellipseCopy(copy);

  window.addEventListener('resize', function () {
    copyNode.innerHTML = copyEllipse.ellipseCopy(copy);
  });

}());
//# sourceMappingURL=bundle.js.map
