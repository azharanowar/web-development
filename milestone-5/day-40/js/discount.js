document.getElementById("discountBtn").addEventListener('click', function() {
    const discountInputField = document.getElementById("discountInputField").value;
    if ( discountInputField === "" ) {
        alert("Input field can't be empty!!!");
    } else if ( discountInputField === "DOM" ) {
        let priceAmount = parseFloat( document.getElementById("priceAmount").innerText );
        priceAmount -= priceAmount * ( 30 * 1 / 100 );
        document.getElementById("priceAmount").innerText = priceAmount;
    } else {
        alert("Please provide a valid coupon code!!!");
    }
});