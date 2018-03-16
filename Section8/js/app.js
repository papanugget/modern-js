console.log('Github finder app connected');
//Init Github constructor
const github = new GitHub;
//Init UI constructor
const ui = new UI;

//Search Input
const searchUser = document.getElementById('searchUser');

//event listener for search input
searchUser.addEventListener('keyup', (e) => {
    //get input text value
    const userText = e.target.value;
    //validate input
    if(userText != '') {
        // console.log(userText);
        //make HTTP call
        github.getUser(userText)
            .then(data => {
                // console.log(data);
                if(data.profile.message === 'Not Found'){
                    //show alert if user not found -UI
                    ui.showAlert('User Not Found', 'alert alert-danger');
                } else {
                    //show profile -UI
                    ui.showProfile(data.profile);
                }
            })
    } else {
        //clear profile -UI
        ui.clearProfile();
    }
});