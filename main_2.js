function renderTime() {

	var currentTime = new Date ();
	var amPM = "AM";
	var hour = currentTime.getHours ();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();

if (hour === 0) {
	hour = 12;
}
else (hour > 12) 
{
	hour = hour - 12;
	amPM = "PM";
}

if (hour < 10) {
	hour = "0" + hour;
}

if (minutes < 10) {
	minutes = "0" + minutes;
}

if (seconds < 10) {
	seconds= "0" + seconds;
}

var myClock = document.getElementById("currentTime");
myClock.innerHTML = "#" + hour + "" + minutes + "" + seconds;
document.body.style.backgroundColor = "#" + hour + "" + minutes + "" + seconds;


}

setInterval (renderTime,1000);



