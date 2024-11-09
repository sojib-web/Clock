// @ts-nocheck
const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");

// console.log(hourEl);
// console.log(minuteEl);
// console.log(secondEl);

const updateClock = () => {
  const currentDate = new Date();
  //   console.log(currentDate);

  setTimeout(() => {
    updateClock();
  }, 1000);
  //   console.log(currentDate);
  const hour = currentDate.getHours();
  const minute = currentDate.getMinutes();
  const second = currentDate.getSeconds();
  //   console.log(hour, minute, second);
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = ` rotate(${hourDeg}deg)`;

  const minuteDeg = (minute / 60) * 360;
  hourEl.style.transform = ` rotate(${minuteDeg}deg)`;

  const secondDeg = (second / 60) * 360;
  hourEl.style.transform = ` rotate(${secondDeg}deg)`;
};

// updateClock();
const set = setInterval(updateClock, 1000);
