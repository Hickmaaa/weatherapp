function changeCity() {
  let city = prompt("What city do you live in?");
  let temperature = prompt("What temperature is it?");
  if (temperature <= 8) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "🥶 " + " <br> Currently " + temperature + "°C in " + city;
  } else {
    let h1 = document.querySelector("h1");
    h1.innerHTML = "🥵 " + " <br> Currently " + temperature + "°C in " + city;
  }
}
let changeCityButton = document.querySelector("button");
changeCityButton.addEventListener("click", changeCity);
