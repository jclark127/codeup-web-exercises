"use strict";

$.get(`https://api.openweathermap.org/data/2.5/forecast?lat=29.4252&lon=-98.4916&units=imperial&appid=${WEATHER_KEY}`).done(function (weather) {
    console.log(weather);
    let date = '';
    let high = weather.list[0].main.temp_max;

    for (let i = 0; i < weather.cnt; i += 8) {
        console.log(high);
        date = weather.list[i].dt_txt;
        if(weather.list[i].main.temp_max > high){
            high = weather.list[i].main.temp_max;
        }
        let card = $("<div id='card' class='card' style='width: 18%'>" +
            "<div class='card-header font-weight-bolder text-center'>" + date.substring(0, 10) + "</div>" + "<div class='card-body text-center'>" + "High: " + high + "<hr>" + "</div>" +
            "</div>");
        $("#fiveDay").append(card);
        high= "";
    }
});