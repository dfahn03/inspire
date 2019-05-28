export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = ((data.main.temp - 273.15) * 1.8) + 32
    this.celsius = data.main.temp - 273.15
    this.icon = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.' + 'png'
  }

  get Template() {
    return `
    <img src="${this.icon}" alt="Weather Icon" class="my-1 d-flex justify-content-center align-items-center">
    <p class="my-1 d-flex justify-content-center align-items-center">${this.city}</p>
    <p class="my-1 d-flex justify-content-center align-items-center">${this.fahrenheit.toFixed(0)}°F</p>
    <p class="my-1 d-flex justify-content-center align-items-center">${this.celsius.toFixed(0)}°C</p>
    `
  }
}