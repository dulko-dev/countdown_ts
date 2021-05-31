"use strict";
const texts = [
    "Countdown to open Euro 2021!",
    "Poland plays first game against Slovakia - 14th June at 6pm.",
    "The Winner takes it all!",
];
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
        setTimeout(() => {
            count++;
            spellWord = 0;
        }, 1000);
    }
    setTimeout(type, 300);
})();
const timeStamp = () => {
    const futureDate = new Date("June 11, 2021 21:00:00").getTime();
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
