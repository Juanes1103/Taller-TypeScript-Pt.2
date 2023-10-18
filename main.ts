import { Serie } from "./Serie.js";
import { series } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("series")!;
let average: HTMLElement = document.getElementById("average")!;

showSeries(series);
avergae(series);

function showSeries(series : Serie[]):void{
    let bodySerie = document.createElement("tbody");

    for (let serie of series) {
        bodySerie.innerHTML += 
        `<tr name="click" id = ${serie.id}>
        <td> ${serie.id}</td>
        <td><a href="${serie.link}"> ${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
        </tr>`

        console.log(serie);
        console.log(serie.foto);
        
    }

    seriesTable.appendChild(bodySerie);
    
}

function avergae(series : Serie[]) :void{

    let prom : number = 0;
    let add = document.createElement("h5");
    let total : number = 0;

    for(let serie of series){

        prom += serie.seasons;
        total += 1;

    }

    add.innerHTML = (series.length>0)?`Season Average ${prom/total}` : "No hay series";
    average.appendChild(add);

}
