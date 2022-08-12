var et_checkOptInCookie = function()
{
	return true;
};function _etc_start()
{
	var c = "";

	c = "<a href=\"http://www.etracker.de\" target=\"_blank\"><img style=\"border:0px;\" alt=\"\" src=\"" + window.location.protocol + "//www.etracker.de/cnt.php?et=rm\" /></a>";
if(c != '') {var x = document.createElement('div');x.innerHTML = c;var et_bodyInterval = window.setInterval(function(){if(document.body) {window.clearInterval(et_bodyInterval);document.body.appendChild(x);}}, 1);}	}

	var et_OptInType = 0;
	var _etc = function() {
		if(et_checkOptInCookie()) {
			_etc_start();
		}
	};

_etracker.setReady();