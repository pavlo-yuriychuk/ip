(function (undefined) {
  var IP = {};
  if (window) {
    window.IP = window.IP || IP;
  } else {
    module.exports = IP;
  };

  function parseV4(value) {
  	var parts = [];
  	parts = value.split(".");
  	parts[0] = parseInt(parts[0]);
  	parts[1] = parseInt(parts[1]);
  	parts[2] = parseInt(parts[2]);
  	parts[3] = parseInt(parts[3]);
  	if (parts.length == 4) {
  		return {
  			parts: parts,
  			valueOf: function () {
  				this.buf = new ArrayBuffer(4);
  				this.i32 = new Uint32Array(this.buf);
  				this.i32[0] = (this.parts[0] << 24) + (this.parts[1] << 16) + (this.parts[2] << 8) + (this.parts[3]);
  				return i32[0];
  			},
  			toString: function () {
  				return Array.apply([], new Uint8Array(this.buf)).reverse().join(".");
  			}
  		}
  	};
  	return null;
  }

  function parse (value) {
    var IPV6 = /((^|:)([0-9a-fA-F]{0,4})){1,8}$/;
    var IPV4 = /((^|\.)((25[0-5])|(2[0-4]\d)|(1\d\d)|([1-9]?\d))){4}$/;
    if (IPV6.test(value)) {
      return parseV6(value);
    } else if (IPV4.test(value)) {
      return parseV4(value);
    };
  };
})()