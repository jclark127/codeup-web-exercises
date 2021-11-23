let notCloudy = true;
let planesScheduled = 9;

goodFlyDay(notCloudy,planesScheduled);

function goodFlyDay (notCloudy, planesScheduled){
    if (notCloudy && planesScheduled < 10){
        console.log("Today is a good day to fly");
    }else {
        console.log("Dont go out flying");
    }
}