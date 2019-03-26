var hour = document.getElementById('hour').style
var minute = document.getElementById('minute').style
var second = document.getElementById('second').style


setInterval(function(){
  var date = new Date();
  updateClock(date);
}, 1000);

function updateClock(date){
  second.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minute.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hour.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}
