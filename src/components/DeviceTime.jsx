import React, { useEffect } from "react";
const [LocalDeviceTime, SetLocalDeviceTime] = useState("00:00");

var localtimehrs = new Date().getHours;
var localtimemin = new Date().getMinutes;

useEffect(async () => {
    await SetLocalDeviceTime(localtimehrs + ":" + localtimemin);
}, [localtimemin]);

function DeviceTime() {
    return <>{LocalDeviceTime}</>;
}

export default DeviceTime;

// const clock = document.getElementById("clock");
// setInterval(() => {
//     let date = new Date();
//     let ans = date.toLocaleTimeString();
//     clock.innerHTML = `<span>${ans}</span>`;
// }, 1000);
