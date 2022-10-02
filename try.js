

const api = {
    key:'d9c9b857597007a78d7d93c0419cbdde',
    url:'https://api.openweathermap.org/data/2.5/'
}


 var searchbox = document.querySelector('#searchB')

searchbox.addEventListener('keypress', setCity)

function setCity(e){
    if(e.keyCode == 13){
        // console.log(searchbox.value)
        getCityWeather(searchbox.value)

    }
}

function getCityWeather(city_name){
    // console.log(city_name)
    fetch(`${api.url}weather?q=${city_name}&units=metric$APPID=${api.key}`)
    .then(function(weather){
        return weather.json()
    })
        .then(showCityWeather)
}
function showCityWeather(weather){
    console.log(weather.name)
    var city = $('#city')
    city.html(`${weather.name}, ${weather.sys.country}`)

    var temp = $('#temp')

    temp.html(`${weather.main.temp}`)

    var theWeather = $('#theWeather');
    theWeather.html(`${weather.min.temp}`)

    var theWeather = $('#theWeather');
    theWeather.html(`${weather.weather[0].description}`)

    var hi = $('#hi')
    hi.html = $(`${weater.main.temp_max}`)

    var hi = $('#hi')
    hi.html = $(`${weater.main.temp_min}`)
}
