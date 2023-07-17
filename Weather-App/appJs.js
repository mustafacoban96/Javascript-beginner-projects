const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const key = '';

const searchBox = document.querySelector('.search-box');
const searchButton = document.querySelector('.search-button');
const errorArea = document.querySelector('.error');

async function checkweather(city){
    const response = await fetch(url + city + `&appid=${key}`);

    if(response.status == 404){
        errorArea.style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }else{
        var data = await response.json();
    
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Number(data.main.temp).toFixed() + '°C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
        console.log(data.weather[0].main)
        if(data.weather[0].main === 'Clear'){
            document.querySelector('.weather-icon').src = 'images/clear.png';
        }else if(data.weather[0].main === 'Clouds'){
            document.querySelector('.weather-icon').src = 'images/clouds.png';
        }else if(data.weather[0].main === 'Rain'){
            document.querySelector('.weather-icon').src = 'images/rain.png';
        }else if(data.weather[0].main === 'Drizzle'){
            document.querySelector('.weather-icon').src = 'images/drizzle.png';
        }else if(data.weather[0].main === 'Mist'){
            document.querySelector('.weather-icon').src = 'images/mist.png';
        }else if(data.weather[0].main === 'Snow'){
            document.querySelector('.weather-icon').src = 'images/snow.png';
        }
        document.querySelector('.weather').style.display = 'block';
    }

    

    
    
}



searchButton.addEventListener('click',() => {
    checkweather(searchBox.value);
    searchBox.value = '';
    
});

searchBox.addEventListener('keydown' ,function(e) {
    if(e.keyCode === 13){
        checkweather(searchBox.value);
        searchBox.value = '';
        
    }
})
