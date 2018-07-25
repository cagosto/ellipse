(function () {
  'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  /**
   * Example settings:
   * [
     {
       width: 768,
       count : 50
     },
     {
       width: 980,
       count: 100
     },
     {
       width: 1280,
       count: 150
     }
   ]
   */
  var Ellipse =
  /**
   * constructor kick off class
   * @param {Array} [settings=[]] - Array of objects for ellipse settings
   */
  function Ellipse() {
  	var _this = this;

  	var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  	classCallCheck(this, Ellipse);

  	this.ellipseCopy = function () {
  		var copy = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  		for (var i = 0; i < _this.countVal.length; i++) {
  			var size = _this.settings[i].width;
  			var winSize = window.innerWidth;
  			var total = _this.countVal[i];

  			if (winSize <= size) {
  				if (copy.length > total) {
  					return copy.substring(0, total) + '...';
  				}
  			}
  		}

  		return copy;
  	};

  	this.settings = settings;
  	this.countVal = settings.map(function (val) {
  		return val.count;
  	});
  }
  /**
   * ellipseCopy - Check to see if copy needs to be shorten
   * @param  {String} [copy=''] - copy to shorten
   * @return {String} -  shorten copy if matces settings
   */
  ;

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
