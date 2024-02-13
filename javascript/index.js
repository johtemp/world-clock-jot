setInterval(() => {
  let timeElement = document.querySelector(".time");
  let dateElement = document.querySelector(".date");

  let dateFormat = moment().format("MMMM Do YYYY");
  dateElement.innerHTML = dateFormat;

  let timeFormat = moment().format("h:mm:ss:SSSS [<small>]A[</small>] ");
  timeElement.innerHTML = timeFormat;
}, 100);
