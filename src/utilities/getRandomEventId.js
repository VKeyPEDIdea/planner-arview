function getRandomNum(max) {
	return Math.floor(Math.random() * (max - 1) + 1);
}

export function getRandomEventId() {
	return getRandomNum(100) + 'event' + getRandomNum(1000);
}