//class constructor
class Weather {
    constructor(city, state){
        this.apiKey = '33cd7133f5160d3d';
        this.city = city;
        this.state = state;
    }
    //fetch weather from api
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);

        const responseData = await response.json();
        //return current conditions object from json file
        return responseData.current_observation;
    }
    //change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }

}