import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var average = document.getElementById("average");
var card = document.getElementById("data");
var showEvent;
function cargar() {
    showEvent = document.getElementsByName("click");
    showEvent.forEach(function (c) { c.onclick = function () { return showCard(Number(c.id)); }; });
}
showSeries(series);
avergae(series);
function showSeries(series) {
    var bodySerie = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        bodySerie.innerHTML +=
            "<tr name=\"click\" id = ".concat(serie.id, ">\n        <td> ").concat(serie.id, "</td>\n        <td><a href=\"").concat(serie.link, "\"> ").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n        </tr>");
        console.log(serie);
        console.log(serie.foto);
    }
    seriesTable.appendChild(bodySerie);
    cargar();
}
function avergae(series) {
    var prom = 0;
    var add = document.createElement("h5");
    var total = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        prom += serie.seasons;
        total += 1;
    }
    add.innerHTML = (series.length > 0) ? "Season Average: ".concat(prom / total) : "No hay series";
    average.appendChild(add);
}
function showCard(number) {
    card.childNodes.forEach(function (c) { card.removeChild(c); });
    var serie = series[number - 1];
    var cardBody = document.createElement("div");
    cardBody.innerHTML =
        "\n    <img class=\"card-img-top\" src=\"".concat(serie.foto, "\" alt=\"cardImage\">\n    <div class=\"card-body\">\n        <h5 class=\"cardTitle\">").concat(serie.name, "</h5>\n        <p class=\"cardInfo\">").concat(serie.sipnosis, "</p>\n        <a href=\"").concat(serie.link, "\"> ").concat(serie.link, "</a>\n    </div>\n    ");
    card.appendChild(cardBody);
}
