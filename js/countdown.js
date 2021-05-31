"use strict";
const texts = ["hello", "investigation", "fascination"];
let word = "";
let characters = "";
let spellWord = 0;
let count = 0;
(function type() {
    if (count === texts.length) {
        count = 0;
    }
    word = texts[count];
    characters = word.slice(0, spellWord++);
    document.querySelector(".typing").textContent = characters;
    if (characters.length === word.length) {
        count++;
        spellWord = 0;
    }
    setTimeout(type, 400);
})();
const timeStamp = () => {
    const futureDate = new Date("June 1, 2021 00:00:00").getTime();
    const nowDate = new Date().getTime();
    const distanceDate = futureDate - nowDate;
    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let days = hours * 24;
    let dayTime = Math.floor(distanceDate / days);
    let hourTime = Math.floor((distanceDate % days) / hours);
    let minuteTime = Math.floor((distanceDate % hours) / minutes);
    let secondTime = Math.floor((distanceDate % minutes) / seconds);
    document.querySelector(".time__days > div+div").textContent =
        dayTime.toString();
    document.querySelector(".time__hours > div+div").textContent =
        hourTime.toString();
    document.querySelector(".time__minutes > div+div").textContent =
        minuteTime.toString();
    document.querySelector(".time__seconds > div+div").textContent =
        secondTime.toString();
};
setInterval(timeStamp, 1000);
