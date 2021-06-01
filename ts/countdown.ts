// title

const texts: string[] = [
  "Countdown to open Euro 2020!",
  "Poland plays first game against Slovakia - 14th June at 6pm.",
  "The Winner takes it all!",
];
let word: string = "";
let characters: string = "";
let spellWord: number = 0;
let count: number = 0;

(function type(): void {
  if (count === texts.length) {
    count = 0;
  }
  word = texts[count];
  characters = word.slice(0, spellWord++);
  document.querySelector(".typing")!.textContent = characters;
  if (characters.length === word.length) {
    setTimeout(() => {
      count++;
      spellWord = 0;
    }, 1000);
  }
  setTimeout(type, 300);
})();

// timer

const timeStamp = () => {
  const futureDate: number = new Date("June 11, 2021 21:00:00").getTime();
  const nowDate: number = new Date().getTime();
  const distanceDate: number = futureDate - nowDate;

  let seconds: number = 1000;
  let minutes: number = seconds * 60;
  let hours: number = minutes * 60;
  let days: number = hours * 24;

  let dayTime: number = Math.floor(distanceDate / days);
  let hourTime: number = Math.floor((distanceDate % days) / hours);
  let minuteTime: number = Math.floor((distanceDate % hours) / minutes);
  let secondTime: number = Math.floor((distanceDate % minutes) / seconds);

  document.querySelector(".time__days > div+div")!.textContent =
    dayTime.toString();
  document.querySelector(".time__hours > div+div")!.textContent =
    hourTime.toString();
  document.querySelector(".time__minutes > div+div")!.textContent =
    minuteTime.toString();
  document.querySelector(".time__seconds > div+div")!.textContent =
    secondTime.toString();
};

setInterval(timeStamp, 1000);
