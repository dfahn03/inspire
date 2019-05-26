export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.fahrenheit = data.main.temp
    this.celsius = data.main.temp
    this.icon = data.weather.icon + '.' + 'png'
  }

  get Template() {
    return `
    <img src="${this.icon}" alt="Weather Icon">
    <p>${this.city}</p>
    <p>${this.fahrenheit}</p>
    `
  }
}