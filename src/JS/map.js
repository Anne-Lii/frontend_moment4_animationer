/* kod skriven av Anne-Lii Hansen anha2324@student.miun.se*/
"use strict"

let map = L.map('map').setView([58.03222280237399, 14.349985267448993], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([58.03222280237399, 14.349985267448993]).addTo(map);

/* GOOGLE MAPS
//hämta element från HTML-koden
const searchButtonEl = document.getElementById("searchButton");
const searchFieldEl = document.getElementById("searchField");
const mapEl = document.getElementById("map");

//event vid klick på SÖK-knappen
searchButtonEl.onclick = function () {   
    let url = "";

    let searchInput = searchFieldEl.value;//input från sökfältet

    fetch(url + searchInput) //hämta data från API plus input från sökfältet
        .then(response => response.json())//konvertera till javascript
        .then(data => {//ger mig data tillbaka

            //plocka ut koorinaterna från sökningen
            let lat = data[0].lat;
            let lon = data[0].lon;
            
            console.log(lat);
            console.log(lon);

            //skicka iväg url plus koordinater för Openstreetmap
            let mapURL = `https://www.openstreetmap.org/export/embed.html?bbox=${lon},${lat},${lon},${lat}&layer=mapnik`;
            console.log(mapURL);
            //uppdatera kartan med nya koordinater
            mapEl.src = mapURL;
        })

        //fånga error
        .catch(error => {
            console.error("det har uppstått ett fel", error);
        })
};
*/








/* openstreetmap men utan markörer

//hämta element från HTML-koden
const searchButtonEl = document.getElementById("searchButton");
const searchFieldEl = document.getElementById("searchField");
const mapEl = document.getElementById("map");
const url = "https://nominatim.openstreetmap.org/search?format=json&q=";

window.onload = function(){
   
    let mapURL = "https://www.openstreetmap.org/export/embed.html?bbox=14.3515176,58.0321418,14.3515176,58.0321418&layer=mapnik";
    mapEl.src = mapURL;
};

//event vid klick på SÖK-knappen
searchButtonEl.onclick = function () {    

    let searchInput = searchFieldEl.value;//input från sökfältet

    fetch(url + searchInput) //hämta data från API plus input från sökfältet
        .then(response => response.json())//konvertera till javascript
        .then(data => {//ger mig data tillbaka

            //plocka ut koorinaterna från sökningen
            let lat = data[0].lat;
            let lon = data[0].lon;
            
            console.log(lat);
            console.log(lon);

            //skicka iväg url plus koordinater för Openstreetmap
            let mapURL = `https://www.openstreetmap.org/export/embed.html?bbox=${lon},${lat},${lon},${lat}&layer=mapnik`;
            console.log(mapURL);
            //uppdatera kartan med nya koordinater
            mapEl.src = mapURL;
        })

        //fånga error
        .catch(error => {
            console.error("det har uppstått ett fel", error);
        })
};
*/