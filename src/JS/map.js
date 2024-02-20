/* kod skriven av Anne-Lii Hansen anha2324@student.miun.se*/
"use strict"

//hämta element från HTML-koden
const searchButtonEl = document.getElementById("searchButton");
const searchFieldEl = document.getElementById("searchField");
const mapEl = document.getElementById("map");
const url = "https://nominatim.openstreetmap.org/search?format=json&q=";

//event vid klick på SÖK-knappen
searchButtonEl.onclick = function () {    

    let searchInput = searchFieldEl.value;//input från sökfältet

    fetch(url + searchInput) //hämta data från API plus input från sökfältet
        .then(response => response.json())//konvertera till javascript
        .then(data => {//ger mig data tillbaka

            //plocka ut koorinaterna från sökningen
            let lat = data[0].lat;
            let lon = data[0].lon;

            //skicka iväg url plus koordinater för Openstreetmap
            let mapURL = `https://www.openstreetmap.org/export/embed.html?bbox=${lon},${lat},${lon},${lat}&layer=mapnik`;
               
            //uppdatera kartan med nya koordinater
            mapEl.src = mapURL;
        })

        //fånga error
        .catch(error => {
            console.error("det har uppstått ett fel", error);
        })
};