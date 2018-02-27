//listen for submit
document.getElementById('loan-form').addEventListener('click', (e) => {
    //hide results
    document.getElementById('results').style.display = 'none';
    //show loader 
    document.getElementById('loading').style.display = 'block';
    //set timeout for loader
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

//functions
function calculateResults(){
    // e.preventDefault();
    //UI Vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
    //calcs
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    // computer montly payments
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x -1);
    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
        //show results
        document.getElementById('results').style.display = 'block';
        //hide loader
        document.getElementById('loading').style.display = 'none';        
    } else {
        // console.log('Please check your numbers');
        showError('Please check your numbers');
    }
    // console.log(e.target);
};

function showError(error){
    //show results
    document.getElementById('results').style.display = 'none';
    //hide loader
    document.getElementById('loading').style.display = 'none';  
    //create a div
    const errDiv = document.createElement('div');
    //get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //add class
    errDiv.className = 'alert alert-danger';
    //create textNode and append to div
    errDiv.appendChild(document.createTextNode(error));
    //insert error before heading
    card.insertBefore(errDiv, heading);
    //clear error after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}