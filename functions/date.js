export function formateDate(data) {
	const date = new Date(data);

	var seconds = Math.floor((date.getTime() / 1000) % 60),
		minutes = Math.floor((date.getTime() / (1000 * 60)) % 60),
		hours = Math.floor((date.getTime() / (1000 * 60 * 60)) % 24);

	hours = hours < 10 ? '0' + hours : hours;
	minutes = minutes < 10 ? '0' + minutes : minutes;
	seconds = seconds < 10 ? '0' + seconds : seconds;

	if (hours / 24 > 7) {
		return `${date.getDate()} ${date.getMonth()} ${date.getFullYear()}`;
	}
	if (hours > 24) {
		return `${hours / 24} days ago`;
	}
	if (hours > 0) {
		return `${hours} hours ago`;
	}
	if (minutes > 0) {
		return `${minutes} minutes ago`;
	}
	if (seconds > 0) {
		return `${seconds} seconds ago`;
	}

	return 1;
}
