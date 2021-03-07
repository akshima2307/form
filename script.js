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
}