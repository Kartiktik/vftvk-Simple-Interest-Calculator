function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal < 1){
        alert("Please enter a positive value");
        document.getElementById("principal").focus();
        return false;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	var year = new Date().getFullYear()+parseInt(years);
    var interest = (principal * years * rate ) / 100;
	
	var amount = interest+principal;
    document.getElementById("result").innerHTML="<br\>If you deposit <strong>Rs."+principal+"</strong>,\<br\>at an interest rate of <strong> "+rate+"% </strong>\<br\>You will receive an amount of <strong>Rs."+amount+"</strong>,\<br\>in the year <strong>"+year+"</strong>\<br\>"

    
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
        