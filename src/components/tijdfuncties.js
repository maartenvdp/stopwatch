export function ZeroPadSeconds(sec) {
	return ('00'+sec).slice(-2);
}

// export function getDisplayTime(counter) {
// 	var minutes = Math.floor(teller/60);
// 	var seconds = teller%60;
// 	return minutes + ':' + ZeroPadSeconds(seconds);
// }

export function seconds2time(seconds) {
	var timestring, m, s;
	if(seconds > 59) {
		m = Math.floor(seconds / 60);
		s = seconds % 60;
		if(s === 0) {
			s = '00';
		}
		timestring = m + ":" + s
	} else {
		timestring =  seconds;
	}
	return timestring;
}

export function time2seconds(timestring) {
	var seconds;
	if(timestring.match(':')) {
		var time = timestring.split(':');
		var m = parseInt(time[0],10);
		var s = parseInt(time[1],10);
		seconds = 60 * m + s;
	} else {
		seconds= parseInt(timestring,10);
	}
	return seconds;
}

