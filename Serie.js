"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
//Definición Clase Serie
class Serie {
    constructor(id, name, channel, seasons, sipnosis, link, foto) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.sipnosis = sipnosis;
        this.link = link;
        this.foto = foto;
    }
}
exports.Serie = Serie;
