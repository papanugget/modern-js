console.log('Factory connected');

function MemberFactory(){
    this.createMember = function(name, type){
        let member;
        if(type === 'simple'){
            member = new SimpleMembership(name);
        } else if(type === 'standard'){
            member = new StandardMembership(name);
        } else if(type === 'super'){
            member = new SuperMembership(name);
        }
        member.type = type;
        member.define = function(){
            console.log(`${this.name}(${this.type}): ${this.cost}`)
        }
        return member;
    }
}

const SimpleMembership = function(name) {
    this.name = name;
    this.cost = '$5.99'
}

const StandardMembership = function(name) {
    this.name = name;
    this.cost = '$10.99'
}

const SuperMembership = function(name) {
    this.name = name;
    this.cost = '$15.99'
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('John Doe', 'simple'));
members.push(factory.createMember('Eminem', 'simple'));
members.push(factory.createMember('Snoopy', 'standard'));
members.push(factory.createMember('Dr. Dre', 'standard'));
members.push(factory.createMember('Richard Roe', 'super'));
members.push(factory.createMember('Arnold Schwarzenegger', 'super'));


members.forEach((member) => {
    member.define();
});
// console.log(members);