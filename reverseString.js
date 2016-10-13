var reverseString = function(s) {
	var str = '';
	for(var i = s.length-1;i>-1;i--){
		str += s[i];
	}
	return str;
};

// OR s.split('').reverse().join('');