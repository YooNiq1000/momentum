const time = document.querySelector("h2#time");

function timeUntil() {
  const dateChristmas = new Date(2024, 11, 25, 0, 0, 0);
  const dateNow = new Date();
  const dateRemained = dateChristmas - dateNow;

  days = Math.floor(dateRemained / (1000 * 60 * 60 * 24));
  hours = Math.floor(dateRemained / (1000 * 60 * 60));
  minutes = Math.floor(dateRemained / (1000 * 60));
  seconds = Math.floor(dateRemained / 1000);

  s = String(seconds % 60).padStart(2, "0");
  m = String(minutes % 60).padStart(2, "0");
  h = String(hours % 24).padStart(2, "0");
  d = days;

  console.log(days, hours, minutes, seconds);
  console.log(d, h, m, s);

  time.innerText = `${d}d ${h}h ${m}m ${s}s`;
}

timeUntil();
setInterval(timeUntil, 1000);
