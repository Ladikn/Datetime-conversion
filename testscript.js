function parseTime(x) {
	if (x == false) { //If date is blank, sets date to April 20th, 2015.  Month 3 parses to April.  Then parses to UTC string
		y = new Date(2015, 3, 20).toUTCString();
	} else if (new Date(Date.parse(x))) { //If date parses based on SimpleReach's given test, let it through
		y = x;
	} else { //if Date is a different Date format, convert it to UTC.  UTC is also supported by SimpleReach, and toISOString is not IE8 compatable
		y = x.toUTCString();
	}
	return y;
};

function parseBlank() {
	var x = "";
	$("#blank").html(parseTime(x));
}

function parseDate() {
	var x = new Date(2015, 3, 2015);
	$("#date").html(parseTime(x));
}

function parseString() {
	var x = "2015-04-22T19:52Z";
	$("#string").html(parseTime(x));
}