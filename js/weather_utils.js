"use strict";


$(document).ready(function () {
    let long = '-98.4916';
    let lat = '29.4252';

    getWeather(long,lat);


    mapboxgl.accessToken = getAccessToken();
    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v10',
        zoom: 7,
        center: [-98.4916, 29.4252]
    });
    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        })
    );

    $("#submit").click(function () {
        geocode($("#search").val(), mapboxgl.accessToken).then(function (result) {
            map.setCenter(result);
            map.setZoom(13);
            getMarker(result);
            long = result[0];
            lat = result[1];
            getWeather(long,lat);
        })
    });

    $("#search").keypress(function (keyCode) {
        if (keyCode.charCode === 13) {
            geocode($("#search").val(), mapboxgl.accessToken).then(function (result) {
                map.setCenter(result);
                map.setZoom(13);
                getMarker(result)
                long = result[0];
                lat = result[1];
                getWeather(long,lat);
            });
        }
    });

    function getWeather (long,lat){
        $.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${WEATHER_KEY}`).done(function (weatherObj) {
            $("#fiveDay > *").remove();
            let date = '';
            let high = weatherObj.list[0].main.temp_max;
            let low = weatherObj.list[0].main.temp_min;
            for (let i = 0; i < weatherObj.cnt; i += 8) {
                date = weatherObj.list[i].dt_txt;
                high = parseInt(weatherObj.list[i].main.temp_max);
                low = parseInt(weatherObj.list[i].main.temp_min);
                let card = $("<div id='card' class='card' style='width: 19%'>" +
                    "<div class='card-header font-weight-bolder text-center'>" +
                    date.substring(0, 10) +
                    "</div>" +
                    "<div class='card-body text-center'>" +
                    high + String.fromCharCode(176) + "F" + " / " + low + String.fromCharCode(176) + "F" +
                    "<br>" +
                    "<img src='https://openweathermap.org/img/w/" + weatherObj.list[i].weather[0].icon + ".png'>" +
                    "<hr>" +
                    "<p>Description: <strong class=''> " + weatherObj.list[i].weather[0].description + "</strong></p> " +
                    "<p>Humidity: <strong class=''> " + weatherObj.list[i].main.humidity + "</strong></p> " +
                    "<p>Wind: <strong class=''> " + weatherObj.list[i].wind.speed + "</strong></p> " +
                    "<p>Pressure: <strong class=''> " + weatherObj.list[i].main.pressure + "</strong></p> " +
                    "</div>" +
                    "</div>");
                $("#fiveDay").append(card);
            }
        });
    }

    function getMarker(result){
        $(".mapboxgl-marker").remove();
        var marker = new mapboxgl.Marker({
            draggable: true
        })
            .setLngLat(result)
            .addTo(map);
        marker.on("dragend", function (e){
            long = e.target._lngLat.lng;
            lat = e.target._lngLat.lat;
            getWeather(long,lat);
        })
    }

});
