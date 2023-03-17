const apikey ="401c8aa97a67e408a3038a20e886dac4";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srcinp = document.querySelector(".searchbox input");
const srcbtn = document.querySelector(".searchbox button");
const wtricon = document.querySelector(".icon");



async function checkweather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed +"km/h";
document.querySelector(".feels").innerHTML = "feels like  "+ Math.round(data.main.feels_like) + "°c" ;
document.querySelector(".cont").innerHTML = "country: " + data.sys.country ;


    if(data.weather[0].main=="Clear"){
        wtricon.src = "img/clear.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        wtricon.src = "img/drizzle.png"
    }
    else if(data.weather[0].main=="Clouds"){
        wtricon.src = "img/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        wtricon.src = "img/rain.png"
    }
    else if(data.weather[0].main=="Mist"){
        wtricon.src = "img/mist.png"
    }
  
    
    
}

srcbtn.addEventListener("click",()=>{
    checkweather(srcinp.value);
})

// document.querySelector(".city").innerHTML = data.name;
// document.querySelector(".temp").innerHTML = data.main.temp;
// document.querySelector(".humidity").innerHTML = data.main.humidity;
// document.querySelector(".wind").innerHTML = data.wind.speed;