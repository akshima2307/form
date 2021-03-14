/////Form validation
let username = document.getElementById('username');
let phone = document.getElementById('phone');
let email =  document.getElementById('email');
let ticket = document.getElementById('ticket');
let date = document.getElementById('date');
let option = document.getElementById('option');
const btn = document.querySelector('.btn');

/*btn.addEventListener('click', e => {
	checkInputs();
});*/


function formReset(){
    const form = document.getElementById('form');
    form.reset();
}


const createModel = function(usernameValue,phoneValue,emailValue,ticketValue,dateValue,optionValue,feeValue){
    console.log("Hello");
    const popContainer = document.getElementById('popup__content');
    const markup = `
        <a href="#form" class="popup__close" onclick="formReset()">&times;</a>
        <div class="popup__header">
            <h1>User's Details</h1>
            <p>Confirm the entered details to proceed further in the payment process</p>
        </div>  
        <div class="popup__innercontent">
            <div class="row">
                <h4>Name: </h4>
                <span>${usernameValue}</span>
            </div>
            <div class="row">
                <h4>Contact number: </h4>
                <p>${phoneValue}</p>
            </div>
            <div class="row">
                <h4>Email Address:</h4>
                <p>${emailValue}</p>
            </div>
            <div class="row">
                <h4>Number of Tickets: </h4>
                <p>${ticketValue}</p>
            </div>
            <div class="row">
                <h4>Status: </h4>
                <p>${optionValue}</p>
            </div>
            <div class="row">
                <h4>Date of the event: </h4>
                <p>${dateValue}</p>
            </div>
            <div class="row">
                <h4>Total amount: </h4>
                <p>${feeValue}</p>
            </div>
        </div>
        <div class="row">
            <a href = "Back-End Code goes here">Proceed</a>
        </div>
    `
    popContainer.insertAdjacentHTML('afterbegin' , markup);
};


function checkInputs() {
    const usernameValue = username.value.trim();
    const phoneValue = phone.value.trim();
    const emailValue = email.value.trim();
    const ticketValue = ticket.value.trim();
    const dateValue = date.value;
    const optionValue = option.value;
    let feeValue = fee.value;
    var status = false;
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
        status = true;
	} else {
		setSuccessFor(username);
	}

    if(phoneValue === '') {
		setErrorFor(phone, 'Phone number cannot be blank');
        status = true;
	} else if(phoneValue.length != 10){
        setErrorFor(phone, 'Phone number should be a 10 digit number.');
        status = true;
    }
    else {
		setSuccessFor(phone);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
        status = true;
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
        status = true;
	} else {
		setSuccessFor(email);
	}

    if(ticketValue === '') {
		setErrorFor(ticket, 'Please enter the number of tickets');
        status = true;
	} else {
		setSuccessFor(ticket);
	}

    if(dateValue === '') {
        setErrorFor(date, 'Please set the date');
        status = true;
    } else {
        setSuccessFor(date);
    }
    if(optionValue === '') {
        setErrorFor(option, 'Please select one option');
        status = true;
    } else {
        setSuccessFor(option);
    }

    if(feeValue === '') {
        setErrorFor(fee, 'Please select one option');
        status = true;
    } else {
        setSuccessFor(fee);
    }
    console.log(status);
    if(status === false){
        const btn = document.querySelector('.btn');
        btn.setAttribute("href", "#popup");
        createModel(usernameValue,phoneValue,emailValue,ticketValue,dateValue,optionValue,feeValue);
    }
	
};

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form__control error';
	small.innerText = message;
};

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form__control success';
};
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};



const calculateFee = function(){
    let status = document.getElementById("option").value;
    let fee = document.getElementById("fee");
    const ticketValue = Number(ticket.value);
    console.log(typeof ticketValue);
    var Totalfee = 0;
    if(status === "STUDENT"){
        fee.value = 0;
    }
    else if(status === "INDIAN"){
        fee.value = ticketValue * 20;
        Totalfee = Number(fee.value);
    }
    else if(status === "FOREIGN NATIONALS"){
        fee.value = ticketValue * 500;
        Totalfee = Number(fee.value);
    }
    console.log(Totalfee);
    console.log(typeof Totalfee);
};


