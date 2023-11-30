var min = 0;
var sec = 0;
var msec = 0;

var getMin = document.getElementById("min");
var getSec = document.getElementById("sec");
var getmsec = document.getElementById("msec");
var interval;

var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var resetBtn = document.getElementById("reset");
var lapsBtn = document.getElementById("lapTimer");

function timer() {
  msec++;
  getmsec.innerHTML = msec;

  if (msec >= 100) {
    sec++;
    if (sec <= 9) {
      getSec.innerHTML = "0" + sec;
    } else {
      getSec.innerHTML = sec;
    }
    msec = 0;
  } else if (sec >= 60) {
    min++;

    if (min <= 9) {
      getMin.innerHTML = "0" + min;
    } else {
      getMin.innerHTML = min;
    }
    sec = 0;
  }
}

function start() {
  interval = setInterval(timer, 10);

  startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
  clearInterval(interval);

  stopBtn.disabled = true;
  startBtn.disabled = false;

}

function reset() {
  min = "00";
  sec = "00";
  msec = "00";

  getMin.innerHTML = min;
  getSec.innerHTML = sec;
  getmsec.innerHTML = msec;

  clearInterval(interval);
  startBtn.disabled = false;
  stopBtn.disabled = true;

  var Laps = document.getElementById("laps");
  Laps.innerHTML = "<h2>Lap time</h2>"
}

function lapTimer() {
  var Laps = document.getElementById("laps");
  Laps.innerHTML +=
    "<div>" +
    " " +
    getMin.innerHTML +
    ":" +
    getSec.innerHTML +
    ":" +
    getmsec.innerHTML +
    "</div>";
}
