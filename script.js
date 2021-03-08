const calculateFee = function(){
    let status = document.getElementById("option").value;
    //console.log(status);
    let fee = document.getElementById("fee");
    if(status === "STUDENT"){
        fee.value = "FREE!";
    }
    else if(status === "INDIAN"){
        fee.value = "INR 20";
    }
    else if(status === "FOREIGN NATIONALS"){
        fee.value = "INR 500";
    }
};

const input = document.querySelector('form__input');
const span = document.querySelector('form__label');

input.addEventListener('input', function (event) {
    span.innerHTML = this.value.replace(/\s/g, '&nbsp;');
    this.style.width = span.offsetWidth + 'px';
});