//Definición Clase Serie
export class Serie{

    public  id: number
    public name: string
    public channel: string
    public seasons: number
    public sipnosis: string
    public link: string
    public foto: string
    
    constructor(id: number, name: string, channel: string, seasons: number, sipnosis: string, link: string, foto: string){

        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.sipnosis = sipnosis;
        this.link = link;
        this.foto = foto;

    }
    
}