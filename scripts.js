var timeField = document.querySelector('#time');
var terminalIcon = document.querySelector('#TerminalIcon');
var terminalWindow = document.querySelectorAll('.dragResizeWindow');
var termanalXButton = document.querySelector('#terminalButton');

//date and time
function weekday() {
	const d = new Date();
	const day = new Array(7);
	day[0] = 'Sunday';
	day[1] = 'Monday';
	day[2] = 'Tuesday';
	day[3] = 'Wednesday';
	day[4] = 'Thursday';
	day[5] = 'Friday';
	day[6] = 'Saturday';

	const dd = day[d.getDay()];
	return dd;
}

timeField.textContent = weekday();
// Open and closing Modal Window
terminalIcon.addEventListener('click', function() {
	terminalWindow[0].style.display = 'block';
});

termanalXButton.addEventListener('click', function() {
	terminalWindow[0].style.display = 'none';
});
