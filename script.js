const daysele = document.getElementById('days');
const hoursele = document.getElementById('hours');
const minsele = document.getElementById('mins');
const secondsele = document.getElementById('seconds');
const christmas="25 Dec 2021";
function countDown()
{
	const christmasDate=new Date(christmas);
	const currentDate=new Date();
	const totalSeconds=(christmasDate-currentDate)/1000;
	const days=Math.floor(totalSeconds/3600/24);
	const hours=Math.floor(totalSeconds/3600) % 24;
	const mins=Math.floor(totalSeconds/60) % 60;
	const seconds=Math.floor(totalSeconds%60);
	console.log(days,hours,mins,seconds);
	daysele.innerHTML= days;
	hoursele.innerHTML= formatTime(hours);
	minsele.innerHTML= formatTime(mins);
	secondsele.innerHTML= formatTime(seconds);
}
function formatTime(time)
{
	return time<10?`0${time}`:time;
}
countDown();
setInterval(countDown,1000);