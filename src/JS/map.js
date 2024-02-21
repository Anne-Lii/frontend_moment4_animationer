/* kod skriven av Anne-Lii Hansen anha2324@student.miun.se*/
"use strict"

//hämta element från HTML-koden
const searchButtonEl = document.getElementById("searchButton");
const searchFieldEl = document.getElementById("searchField");
const mapEl = document.getElementById("map");

//startkoordinater för kartan vid sidladdning
const map = L.map('map').setView([58.03222280237399, 14.349985267448993], 12);

//lägger till ett lager på befintlig karta med kartsökning
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//placera markör
let marker = L.marker([58.03222280237399, 14.349985267448993]).addTo(map);

//"Här är jag" funktion
L.control.locate().addTo(map);


//eventlistener vid klick på SÖK-knappen
searchButtonEl.addEventListener("click", function() {   
    
    const searchInput = searchFieldEl.value;//variabel med input från sökfältet

    //API adressen plus värdet från inputfältet
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${searchInput}`;   

    //fetch API
    fetch(url) 
        .then(response => response.json())//konvertera till javascript
        .then(data => {//ger mig data tillbaka
      
            //plocka ut koorinaterna från sökningen
            let lat = data[0].lat;
            let lon = data[0].lon;
            
            //uppdatera kartan med nya koordinater och zoom
            map.setView([lat, lon], 14);

            // Placera markören på de nya koordinaterna
            marker.setLatLng([lat, lon]);       
        })

        //fånga error
        .catch(error => {
            console.error("det har uppstått ett fel", error);
        })
});