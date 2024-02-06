"use strict"

//hämta element från HTML-koden
let openButtonEl = document.getElementById("open-menu");
let closeButtonEl = document.getElementById("close-menu");

//eventlyssnare
openButtonEl.addEventListener("click", togglemenu);
closeButtonEl.addEventListener("click", togglemenu);

//funktion som visar och gömmer dropdownmenyn för skärmar mindre än 800 pixlar
function togglemenu() {

    let navMenuEl = document.getElementById("nav-menu");    

    let style = window.getComputedStyle(navMenuEl);    

    if(style.display === "none") {
        navMenuEl.style.display = "block";
    } else {
        navMenuEl.style.display = "none";
    }
}