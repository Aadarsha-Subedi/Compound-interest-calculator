function calculateCPI(){

    let principal_amount = document.querySelector("#principal-amount").value;
    let rate = document.querySelector("#rate").value;
    let time = document.querySelector("#time").value;
    let total_interest = document.querySelector("#total-interest");
    let total_amount = document.querySelector("#total-amount");
    if(principal_amount == "" || rate == "" || time == ""){
        alert("Please fill all the fields. ");
        return;
    }
    if(principal_amount < 1 || rate < 1 || time < 1){
        alert("Fields cannot be negative. ");
        return;
    }

    // Parse inputs as numbers (avoid using .toFixed here)
    principal_amount = parseFloat(principal_amount);
    rate = parseFloat(rate);
    time = parseFloat(time);

    // Calculate total interest and ensure it's formatted as a fixed decimal after the calculation
    const ti = ((Math.pow((1 + (rate / 100)), time) * principal_amount) - principal_amount).toFixed(2);
    total_interest.innerHTML = ti;

    // Calculate total amount using numeric addition, then format it
    const ta = (parseFloat(ti) + principal_amount).toFixed(2);
    total_amount.innerHTML = ta;
 

}
