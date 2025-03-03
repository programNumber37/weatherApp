const apiKey = "?unitGroup=metric&key=H9QVYSJSAK9TTKLPHKBYWWQ3A&contentType=json"
const apiCall = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"

const form = document.getElementById("searchForm");

//card desciptions
const date0=document.getElementById("date0");
const temp0=document.getElementById("temp0");
const description0=document.getElementById("description0");
const clouds0=document.getElementById("clouds0");
const windspeed0=document.getElementById("windspeed0");
const humidity0=document.getElementById("humidity0");
const city = document.getElementById("city");

//more details card
const sunrise0 = document.getElementById("sunrise0");
const sunset0 = document.getElementById("sunset0");
const pressure0 = document.getElementById("pressure0");
const moonphase0 = document.getElementById("moonphase0");



async function fetching(search){
    const fullApi = apiCall + search + apiKey;
    await fetch(fullApi,{ mode: "cors" })
    .then(function(response) {
        
        return response.json();
    }).then(function(data) {
            
            console.log(data);
            city.innerText = data.resolvedAddress
            date0.innerText = data.days[0].datetime;
            temp0.innerText = data.days[0].tempmax + "°";
            description0.innerText = data.days[0].description;
            clouds0.innerText = data.days[0].cloudcover;
            windspeed0.innerText = data.days[0].windspeed;
            humidity0.innerText = data.days[0].humidity;

            sunrise0.innerText = data.days[0].sunrise;
            sunset0.innerText = data.days[0].sunset;
            pressure0.innerText = data.days[0].pressure;
            moonphase0.innerText = data.days[0].moonphase;

        });
  }


form.addEventListener("submit" ,(event)=>{
    event.preventDefault();
    const searchQuery = document.getElementById("searchQuery").value;

    
    fetching(searchQuery);


})


  //Details button to show more info on each card
  const showDetails = document.getElementById("showDetails");
  const detailsToday = document.getElementById("detailsToday")
  
  showDetails.addEventListener("click", ()=>{
    detailsToday.classList.toggle("hidden");
    detailsToday.classList.toggle("visible");
  })


