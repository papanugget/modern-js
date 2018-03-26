console.log('Mediator connected');

const User = function(name){  //colleagues of chatroom
    this.name = name;
    this.chatroom = null;
}

User.prototype = {
    send: function(message, to){
        this.chatroom.send(message, this, to);
    }, 
    receive: function(message, from){
        console.log(`${from.name} to ${this.name} : ${message}`)
    }
}

const Chatroom = function(){  //mediator
    let users = {};  //list of users

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
        },
        send: function(message, from, to){
            if(to) {
                //single user message
                to.receive(message, from);
            } else {
                //mass message
                for(key in users){
                    if(users[key] !== from){
                        users[key].receive(message, from);
                    }
                }
            }
        }
    }
}

const jon = new User('Jon');
const arya = new User('Arya');
const sansa = new User('Sansa');

const chatroom = new Chatroom();

chatroom.register(jon);
chatroom.register(arya);
chatroom.register(sansa);

jon.send('Hello Arya', arya);
sansa.send('Jump in a lake', arya);
arya.send('Valar Morghulis');

