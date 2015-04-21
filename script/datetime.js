//Used to take in any date format and set it to the requested standard format
(function() {
	if (__reach_config.date == false) { //If date is blank, sets date to April 20th, 2015.  Month 3 parses to April
		__reach_config.date = new Date(2015, 3, 20);
	} else if (__reach_config.date instanceof Date) { //If date is in any date format, parses to standard date format
		__reach_config.date = new Date(__reach_config.date.getFullYear(), __reach_config.date.getMonth(), __reach_config.date.getDate());
	} else { //if Date is a given string format of YYYY-MM-DDTHH:MMZ, parses to standard date format with year, month, and day
		__reach_config.date = parseTimeString(__reach_config.date);
	}
})();

function parseTimeString(dateString) {
	var x = dateString; //Using variable x to minify code a bit
	var year = x[0] + x[1] + x[2] + x[3];
	var month = x[5] + x[6];
	var day = x[8] + x[9];
	return new Date(year, month, day);
}

//Removes all falsy attributes from the __reach_config array
(function() {
	for (var i in __reach_config) {
		if (__reach_config[i] == false) {
			delete __reach_config[i];
		}
	}
})();