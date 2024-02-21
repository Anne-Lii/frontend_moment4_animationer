/* kod skriven av Anne-Lii Hansen anha2324@student.miun.se*/
"use strict"

//hämta element från HTML-koden
const searchButtonEl = document.getElementById("searchButton");
const searchFieldEl = document.getElementById("searchField");
const mapEl = document.getElementById("map");

let map = L.map('map').setView([58.03222280237399, 14.349985267448993], 12);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//placera markör
let marker = L.marker([58.03222280237399, 14.349985267448993]).addTo(map);

//Locate controle
L.control.locate().addTo(map);


//event vid klick på SÖK-knappen
searchButtonEl.addEventListener("click", function() {   
    
    let searchInput = searchFieldEl.value;//input från sökfältet
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchInput}`;

  

    fetch(url) //hämta data från API plus input från sökfältet
        .then(response => response.json())//konvertera till javascript
        .then(data => {//ger mig data tillbaka
      
            //plocka ut koorinaterna från sökningen
            let lat = data[0].lat;
            let lon = data[0].lon;
            
            //uppdatera kartan med nya koordinater och zoom
            map.setView([lat, lon], 12);

            // Placera markören på de nya koordinaterna
            marker.setLatLng([lat, lon]);       

            //uppdatera kartan med nya koordinater
            mapEl.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lon},${lat},${lon},${lat}&layer=mapnik`;
        })

        //fånga error
        .catch(error => {
            console.error("det har uppstått ett fel", error);
        })
});