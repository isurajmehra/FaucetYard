const site1 = document.getElementById("1");
const site2 = document.getElementById("2");
const site3 = document.getElementById("3");
const faucet = document.getElementById("faucet-frame");


function ChangeURL1() {
     faucet.src = "https://www.dogefaucet.com/en"
     site1.style.background = "red";
     site2.style.background = "";
     site3.style.background = "";
}

function ChangeURL2() {
    faucet.src = "https://dogebuzz.com/?ref=186677";
    site1.style.background = "";
    site2.style.background = "red";
    site3.style.background = "";
}

function ChangeURL3() {
    faucet.src = "https://litecoinpay.co/doge/?r=DRMcDzCG3AHVfY7nBuVbZc6xMpJJHsFJ1X";
    site1.style.background = "";
    site2.style.background = "";
    site3.style.background = "red";
}

function ChangeURL4() {
    faucet.src = "https://coinsearns.com/doge/?r=DRMcDzCG3AHVfY7nBuVbZc6xMpJJHsFJ1X";
    site1.style.background = "";
    site2.style.background = "";
    site3.style.background = "";
    site4.style.background = "red";
}

