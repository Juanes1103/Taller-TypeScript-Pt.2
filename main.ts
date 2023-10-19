import { Serie } from "./Serie.js";
import { series } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("series")!;
let average: HTMLElement = document.getElementById("average")!;
let card: HTMLElement = document.getElementById("data")!;
let showEvent: NodeListOf <HTMLElement>;

function cargar():void{

    showEvent = document.getElementsByName("click")!;
    showEvent.forEach(c=> {c.onclick=() =>showCard(Number(c.id))})
}

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
    cargar();
    
}

function avergae(series : Serie[]) :void{

    let prom : number = 0;
    let add = document.createElement("h5");
    let total : number = 0;

    for(let serie of series){

        prom += serie.seasons;
        total += 1;

    }

    add.innerHTML = (series.length>0)?`Season Average: ${prom/total}` : "No hay series";
    average.appendChild(add);

}

function showCard(number: number):void{
    
    card.childNodes.forEach(c=>{card.removeChild(c);})

    let serie = series[number-1];
    let cardBody = document.createElement("div");
    cardBody.innerHTML = 
    `
    <img class="card-img-top" src="${serie.foto}" alt="cardImage">
    <div class="card-body">
        <h5 class="cardTitle">${serie.name}</h5>
        <p class="cardInfo">${serie.sipnosis}</p>
        <a href="${serie.link}"> ${serie.link}</a>
    </div>
    `

    card.appendChild(cardBody);
}
