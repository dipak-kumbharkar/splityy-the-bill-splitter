//Bill Spiltter

function splitTheBill() {
    let billInput = document.getElementById("billInput").value;
    let nPeople = document.getElementById("nPeople").value;

    document.getElementById("result").innerHTML = "Result : " + "₹" + (billInput/nPeople).toFixed(2);
}