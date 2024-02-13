setInterval(() => {
  let timeElement = document.querySelector(".time");
  let dateElement = document.querySelector(".date");

  let dateFormat = moment().format("MMMM Do YYYY");
  dateElement.innerHTML = dateFormat;

  let timeFormat = moment().format("h:mm:ss [<small>]A[</small>] ");
  timeElement.innerHTML = timeFormat;

  // let dateFormat = moment().format("MMMM Do YYYY");
  let tokyoTimeZone = moment().tz("Asia/Tokyo");
  let tokyoTime = document.querySelector(".tokyo .time");
  let tokyoDate = document.querySelector(".tokyo .date");

  tokyoDate.innerHTML = tokyoTimeZone.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoTimeZone.format("h:mm:ss [<small>]A[</small>] ");
}, 1000);
