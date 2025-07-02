const DigitalClock = document.getElementById("DigitalClock");
DigitalDate = document.getElementById("DigitalDate"),
 hours = document.getElementById("hours"),
 minutes = document.getElementById("minutes"),
 session = document.getElementById("session"),
 alarmName = document.getElementById("alarmName"),
 setAlarmTime = document.getElementById("setAlarmTime")
 alarmInterval = document.getElementById("alarmInterval");
 setAlarm = document.getElementById("setAlarm")
 alarmRow = document.getElementById("alarmRow");

 let alarmTime;
window.addEventListener("load", () => {
    for (let h = 1; h <= 12; h++) {
        let option = document.createElement("option");
        option.text = zeroPad(h);
        option.value = zeroPad(h);
        hours.appendChild(option);
        console.log(h);
    }

    for (let m = 0; m < 60; m++) {
        let option = document.createElement("option");
        option.text = zeroPad(m);
        option.value = zeroPad(m);
        minutes.appendChild(option);
    }
});

showTime();
function showTime() {
    const currentDateTime = new Date();

    DigitalDate.innerHTML = `${currentDateTime.toLocaleString("default", {weekday: "long", })}, ${currentDateTime.toLocaleString("defualt", {month: "long", })} ${currentDateTime.getDate()} - ${currentDateTime.getFullYear()}`;

    let h = currentDateTime.getHours(); // 0-23
    let m = currentDateTime.getMinutes(); // 0-59
    let s = currentDateTime.getSeconds(); // 0-59
    let ses = h>12?"PM" : "AM";

    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12;
    }

    console.log(h, m, s);
    let time = zeroPad(h) + ":" + zeroPad(m) + ":" + zeroPad(s) + " " + ses;
    DigitalClock.innerHTML = time;

     setInterval(showTime, 100);
}

function getTimeDifference() {
    let today = new Date();
    let date = zeroPad(today.getDate());
    let month  = zeroPad(today.getMonth());
    let year = today.getFullYear();

    today = month + "/" + date + "/" + year;
    console.log(today);

    let alarmStart = new Date(today + " " + DigitalClock.innerHTML);
    let = alarmEnd = new Date(today + " " + alarmTime);
    let diff = alarmEnd - alarmStart;

    let ms = diff;
    let hh = Math.floor(msec / 1000 / 60 / 60);
    msec -= hh * 1000 * 60 * 60;
    let mm = Math.floor(msec / 1000 / 60);
    msec -= mm * 1000 * 60;
    let ss = Math.floor(msec / 1000);
    msec -= ss * 1000;
    if (hh < 0) {
        hh = 24 + hh;
    } 
    alarmInterval.innerHTML = zeroPad(hh) + ":" + zeroPad;
    console.log(diff, hh, mm, ss);
}

function zeroPad(param) {
    return String(param).padStart(2, "0");
}
