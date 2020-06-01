//Dynamic copyright year
window.onload = function myDate(){
    let myDate = new Date();
    let dateYear = myDate.getFullYear();
        document.getElementById('copyleft').innerHTML = `&copy; 2020 - ${dateYear} Jason Thompson. All rights reserved.`;
    if (dateYear === 2020){
        document.getElementById('copyleft').innerHTML = `&copy; ${dateYear} Jason Thompson. All rights reserved.`;
    }
}
