//Toggle hamburger menu for mobile devices
function myToggle(){
    let myLinks = document.getElementById("navbar");
    if (myLinks.className === "navbar"){
        myLinks.className += " responsive";
    } else {
        myLinks.className = "navbar";
    }
}

//Dynamic copyright year
window.onload = function myDate(){
    let myDate = new Date();
    let dateYear = myDate.getFullYear();
        document.getElementById('copyleft').innerHTML = `&copy; 2020 - ${dateYear} Jason Thompson. All rights reserved.`;
    if (dateYear === 2020){
        document.getElementById('copyleft').innerHTML = `&copy; ${dateYear} Jason Thompson. All rights reserved.`;
    }
}
