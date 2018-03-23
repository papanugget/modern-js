console.log("Observer connected");

//Observer pattern allows subscribe or unsubscribe to a functionality / subscription model

function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`);
    },
    unsubscribe: function(fn){
        //filter out from the list whatever matches the callback function.  if there is no match, the callback gets to stay on the list.  the filter returns a new list and reassigns the list of observers
        this.observers = this.observers.filter(function(item) {
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },
    fire: function(){
        this.observers.forEach(function(item){
            item.call();
        });
    }
}

const click = new EventObserver();

//even listeners
document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurrMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurrMilliseconds);
});
document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurrSeconds);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurrSeconds);
});

document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

//click handler
const getCurrMilliseconds = function(){
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurrSeconds = function(){
    console.log(`Current Seconds: ${new Date().getSeconds()}`);
}