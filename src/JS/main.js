/* kod skriven av Anne-Lii Hansen anha2324@student.miun.se*/
"use strict"

window.onload = init;

const stapelChartEl = document.getElementById('stapelChart');
const doughnutChartEl = document.getElementById('doughnutChart');

//fetch-anrop och konvertera till js
async function init() {

  const url = "https://studenter.miun.se/~mallar/dt211g/"; //API adressen

  try {

    const response = await fetch(url);//inväntas svar från fetchen
    let data = await response.json();//inväntar svar från konverteringen till js

    //sortera ut enbart kurser
    let courses = data.filter(e => e.type == 'Kurs');

    //sortera ut enbart program
    let programs = data.filter(e => e.type == 'Program');

    //sortera efter antal sökande i kurser
    let sortedCourses = courses.sort(function (a, b) {
      return b.applicantsTotal - a.applicantsTotal;
    });

    //sortera efter antal sökande i program
    let sortedPrograms = programs.sort(function (a, b) {
      return b.applicantsTotal - a.applicantsTotal;
    });

    //plocka ut de 6 första kurserna med högst antal sökande
    let popularCourses = sortedCourses.slice(0, 6);

    //plocka ut de 5 första programmen med högst antal sökande
    let popularPrograms = sortedPrograms.slice(0, 5);

    //plocka ut kursnamnen
    let courseNames = popularCourses.map(course => course.name);

    //plocka ut programnamnen
    let programNames = popularPrograms.map(program => program.name);

    //plocka ut antalet sökande på kurser
    let courseValues = popularCourses.map(course => course.applicantsTotal);
    
    //plocka ut antalet sökande på program
    let programValues = popularPrograms.map(prog => prog.applicantsTotal);

    //nytt diagram
    new Chart(stapelChartEl, {
      type: 'bar', //typ av diagram (stapeldiagram)
      data: { //datan för diagrammet
        labels: courseNames, //namnen på de olika staplarna
        datasets: [{
          label: 'Antal sökande', //vad staplarna består av
          backgroundColor: 'pink',
          borderColor: 'darkpink',
          data: courseValues, //värden som stoppas in i diagrammet
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });


    new Chart(doughnutChartEl, {
      type: 'doughnut',//typ av diagram (cirkeldiagram)
      data: {
        labels: programNames,
        datasets: [{
          label: 'Antal sökande',
          data: programValues,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  } catch (error) {

  }
}