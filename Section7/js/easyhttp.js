console.log('Easy HTTP connected');

//ES5 AJAX version
function easyHTTP(){
    //like const xhr = new XMLHttpRequest();
    this.http = new XMLHttpRequest();
}

// Make a HTTP GET request
easyHTTP.prototype.get = function(url, callback){
    //like xhr.open
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(){
        if(self.http.status === 200){
           callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    };
    this.http.send();
}
// Make a HTTP POST request

// Make a HTTP PUT request

// Make a HTTP DELETE request
