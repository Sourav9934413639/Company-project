const api="615e194112ff6aff5cbda4a5b2e5c58a";

async function getDetails(){
    let query=document.getElementById("city").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${api}`;
    try{
    let response=await fetch(url);
    let data=await response.json();
    console.log(data)
    appendDataOnDOM(data);
    }
    catch(err)
    {
        console.log(err);
    }
}
function appendDataOnDOM(data)
{
    let lhs=document.getElementById("LHS");
    lhs.innerHTML=null;
    let temp=document.createElement("h3");
    temp.innerText=`Temperature : ${(data.main.temp-273).toFixed(2)}°C`;

    let status=document.createElement("h3");
    status.innerText=`Weather status: ${data.weather[0].main}`;

    let wind_speed=document.createElement("h3");
    wind_speed.innerText=`Wind speed : ${data.wind.speed}km/hr`;

    let humidity=document.createElement("h3");
    humidity.innerText=`Humidity : ${data.main.humidity}%`;
     
    lhs.append(temp,status,humidity,wind_speed);
    let rhs=document.getElementById("gmap_canvas");
    rhs.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;

}