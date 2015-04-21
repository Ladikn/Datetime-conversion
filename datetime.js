//Used to take in any date format and set it to the requested standard format
(function() {
	if (__reach_config.date == false) { //If date is blank, sets date to April 20th, 2015.  Month 3 parses to April.  Then parses to UTC string
		__reach_config.date = new Date(2015, 3, 20).toUTCString();
	} else if (new Date(Date.parse(__reach_config.date))) { //If date parses based on SimpleReach's given test, let it through
	} else { //if Date is a different Date format, convert it to UTC.  UTC is also supported by SimpleReach, and toISOString is not IE8 compatable
		__reach_config.date = __reach_config.date.toUTCString();
	}
})();

//Removes all falsy attributes from the __reach_config array
(function() {
	for (var i in __reach_config) {
		if (__reach_config[i] == false) {
			delete __reach_config[i];
		}
	}
})();