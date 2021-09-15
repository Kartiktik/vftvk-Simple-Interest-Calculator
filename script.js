function compute()
{
    // Import HTML elements
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    result = document.getElementById("result");

    // Calculate interest
    interest = principal * years * rate / 100;

    // Asure that the principal is positive number
    if (principal < 1) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    // Calculate the year
    thisYear = new Date().getFullYear();
    futureYear = thisYear + Number(years);

    // Display the result - with numbers in bold.
    result.innerHTML = "</br>If you deposit <mark>" + principal + "</mark>,</br> at an interest rate of <mark>" + rate + "</mark> %.</br> You will receive an amount of <mark>"  + interest + "</br></mark> in the year <mark>" + futureYear + "</mark>.";
}

function rangeSlider() {
    // Import HTML elements
    rate = document.getElementById("rate").value;
    rateNumber = document.getElementById("rate-number");

    // Express the rate from the range slider in numbers
    rateNumber.innerHTML = rate + " %";
}
