function ZeroPadString(sec) {
	return ('00' + sec).slice(-2);
}

export function seconds2time(seconds) {

	let m = Math.floor(seconds / 60);
	let s = seconds % 60;
	let sstring = ZeroPadString(s);
	// let mstring = ZeroPadString(m);
	return m + ':' + sstring;
}

export function time2seconds(timestring) {
	let seconds;
	if (timestring.match(':')) {
		var time = timestring.split(':');
		var m = parseInt(time[0], 10);
		var s = parseInt(time[1], 10);
		seconds = 60 * m + s;
	} else {
		seconds = parseInt(timestring, 10);
	}
	return seconds;
}

