'use strict';

    let lat;
    let long;

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(position =>{
            
            lat=position.coords.latitude;
            long=position.coords.longitude;
            //console.log(position);
            
            const api=`https://api.weatherapi.com/v1/current.json?key=44226ef24c954d9eb89192228210211&q=${lat},${long}&aqi=yes`;

            fetch(api)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    document.querySelector('.temp-icon').src=data.current.condition.icon;
                    document.querySelector('.temperature-val').innerHTML=data.current.temp_c;
                    document.querySelector('.wind-speed-val').innerHTML=data.current.wind_kph+" kph";
                    document.querySelector('.precipitation-val').innerHTML=data.current.precip_in+" in";
                    document.querySelector('.temperature-des').innerHTML=data.current.condition.text;
                    document.querySelector('.location').innerHTML=data.location.name+","+data.location.region+","+data.location.country;

                    document.querySelector('.temperature-f').addEventListener('click',()=>{
                        document.querySelector('.temperature-val').innerHTML=data.current.temp_f; 
                        document.querySelector('.temperature-c').classList.add('active');
                        document.querySelector('.temperature-f').classList.remove('active');
                    });  
                    document.querySelector('.temperature-c').addEventListener('click',()=>{
                        document.querySelector('.temperature-val').innerHTML=data.current.temp_c; 
                        document.querySelector('.temperature-f').classList.add('active');
                        document.querySelector('.temperature-c').classList.remove('active');
                    });
                })   
        });
    }
