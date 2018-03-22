console.log('profile scroller connected');

const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingFor: 'female',
        location: 'NYC NY',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jane Doe',
        age: 28,
        gender: 'female',
        lookingFor: 'male',
        location: 'Denver CO',
        image: 'https://randomuser.me/api/portraits/women/83.pg'
    },
    {
        name: 'Richard Roe',
        age: 32,
        gender: 'male',
        lookingFor: 'male',
        location: 'Los Angeles CA',
        image: 'https://randomuser.me/api/portraits/men/7.jpg'
    }
];

const profiles = profileIterator(data);

//load first profile on page load
nextProfile();

//click event
document.getElementById('next').addEventListener('click', nextProfile);

//next profile function
function nextProfile(){
    //iterate next
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking For: ${currentProfile.lookingFor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
        `;
        document.getElementById('imageDisplay').innerHTML = `
            <img src="${currentProfile.image}" class="rounded">
        `;
    } else {
        //no more profiles reload 
        window.location.reload();
    }
}
    

//iterator function
function profileIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} :
            { done: true}
        }
    };
}