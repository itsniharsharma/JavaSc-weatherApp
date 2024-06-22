const apiKey="947de31f7a72b8b5588c816e9b4b3717";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const card = document.querySelector(".card");


async function checkWeather(city){
    const response = await fetch(apiUrl+ city +`&appid=${apiKey}`);
    let data=await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        card.style.background="linear-gradient(135deg, #ed40e7, #5b548a)";
    }

    else{
        console.log(data);

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
        document.querySelector(".wind").innerHTML=data.wind.speed +" km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="imgs/clouds.png"
            card.style.background="linear-gradient(135deg, #939597, #5b548a)"
    
        } else if(data.weather[0].main == "Clear"){
            weatherIcon.src="imgs/clear.png"
            card.style.background="linear-gradient(135deg, #5eadfb, #5b548a)"
    
        } else if(data.weather[0].main == "Rain"){
            weatherIcon.src="imgs/rain.png"
            card.style.background="linear-gradient(135deg, #1b1f23, #5b548a)"
            
        } else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="imgs/drizzle.png"
            card.style.background="linear-gradient(135deg, #485868, #5b548a)"
    
        } else if(data.weather[0].main == "Mist"){
            weatherIcon.src="imgs/mist.png"
            card.style.background="linear-gradient(135deg, #a0c4e8, #5b548a)"
        }
    
        document.querySelector(".weather").style.display="block";
        document.querySelector(".error").style.display="none";
    }

}

searchBox.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault(); //prevent default behaviour of enter key like loading page etc
        checkWeather(searchBox.value);
    }
})

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
