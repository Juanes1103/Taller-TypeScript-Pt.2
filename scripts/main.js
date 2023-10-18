import { series } from "./data.js";
var seriesTable = document.getElementById("series");
var average = document.getElementById("average");
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
    add.innerHTML = (series.length > 0) ? "Season Average ".concat(prom / total) : "No hay series";
    average.appendChild(add);
}
