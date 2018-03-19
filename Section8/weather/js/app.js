//init storage object
const storage = new Storage();
//get stored location data
const weatherLocation = storage.getLocationData();
//init new weather object
const weather = new Weather(weatherLocation.city, weatherLocation.state);
//init UI object
const ui = new UI();

//call getweather function when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

//Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    weather.changeLocation(city, state);
    //setLocalstorage for new city state
    storage.setLocationData(city, state);
    //getWeather after inputting new values
    getWeather();
    //close modal
    $('#locModal').modal('hide');
});

//weather.changeLocation('Miami', 'FL');
function getWeather(){
    //returns a promise object
    weather.getWeather()
        .then(results => {
            //insert results into UI
            // console.log(results);
            //call UI constructor to insert results into DOM
            ui.paint(results);
        })
        .catch(err => console.log(err));
}