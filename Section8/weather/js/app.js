//init new weather object
const weather = new Weather('New York', 'NY');
//init UI object
const ui = new UI();

//call getweather function when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// weather.changeLocation('Miami', 'FL');
function getWeather(){
    //returns a promise object
    weather.getWeather()
        .then(results => {
            //insert results into UI
            console.log(results);
            ui.paint(results);
        })
        .catch(err => console.log(err));
}