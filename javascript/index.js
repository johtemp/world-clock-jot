// setInterval(() => {
//   let timeElement = document.querySelector(".time");
//   let dateElement = document.querySelector(".date");

//   let dateFormat = moment().format("MMMM Do YYYY");
//   dateElement.innerHTML = dateFormat;

//   let timeFormat = moment().format("h:mm:ss [<small>]A[</small>] ");
//   timeElement.innerHTML = timeFormat;

//   // Tokyo
//   let tokyoTimeZone = moment().tz("Asia/Tokyo");
//   let tokyoTime = document.querySelector(".tokyo .time");
//   let tokyoDate = document.querySelector(".tokyo .date");

//   tokyoDate.innerHTML = tokyoTimeZone.format("MMMM Do YYYY");
//   tokyoTime.innerHTML = tokyoTimeZone.format("h:mm:ss [<small>]A[</small>] ");
// }, 1000);

//1. Create a variable to Select Element
//2. Add a listener to change when selecting a city
//3. Create a function on changing time chnge when selecting with a parameter
//4. Create a variable for timezone
//5. Create variable for city name
//6. Create variable for city Time
//7. Create a variable for the div with formatting

function updateCityTime(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#city-container");

  cityElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>`;
}
let citiesSelect = document.querySelector("#cities");
citiesSelect.addEventListener("change", updateCityTime);
