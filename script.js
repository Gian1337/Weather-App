const API_KEY = '441b5d5328c9aff63725a803be8025fb'
const fetch_data = position => {
    const {latitude, longitude} = position.coords
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => setWeatherData(data))
    
}

const setWeatherData = data =>{
    const weatherData = {
        locacion: data.name,
        descripcion: data.weather[0].main,
        humedad: data.main.humidity,
        presion: data.main.pressure,
        temperatura: data.main.temp,
        fecha: getDate(),

    }

    Object.keys(weatherData).forEach(key => {
        document.getElementById(key).textContent = weatherData[key]
    })
}

const getDate = () =>{
    let date = new Date()

    return `${date.getDate()} - ${date.getMonth() + 1} - ${date.getFullYear()} `
}

const onLoad = () =>{
    navigator.geolocation.getCurrentPosition(fetch_data)
}