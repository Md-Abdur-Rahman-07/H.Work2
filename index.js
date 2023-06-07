document.getElementById("btn-2").addEventListener("click",function(){

    const addAmount1 = document.getElementById("food").value;
    const addAmount2 = document.getElementById("rent").value;
    const addAmount3 = document.getElementById("clothes").value;
    const addAmount4 = document.getElementById("income").value;

    const addAmount = parseFloat(addAmount1) + parseFloat(addAmount2) + parseFloat(addAmount3);
    const addAmount5 = parseFloat(addAmount4) - parseFloat(addAmount);

    // const addAmount5 = document.getElementById("bal").value;
    const addAmount6 = document.getElementById("save").value;
    const addAmount7 = parseFloat(addAmount5) * parseFloat(addAmount6)/100;

    document.getElementById("save1").innerHTML = addAmount7;

    document.getElementById("reb").innerHTML = parseFloat(addAmount5) - parseFloat(addAmount7);

});
