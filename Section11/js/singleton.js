console.log('Singleton Connected');

//another IIFE that returns one instance of an object at a time - useful for instances where you want to create one user at a time

const Singleton = (function(){
    let instance;
    function createInstance(){
        const object = new Object('object instance');
        return object;
    }
    return {
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA  === instanceB);  //evals true because only one object is returned