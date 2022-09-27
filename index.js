let hosszusag = 0;
class Zene{
    #nev;
    #hossz;
    constructor(nev, hossz) {
        this.nev = nev;
        this.hossz = hossz;
    }

    get nev() {
        return this.#nev;
    }
    set nev(nev){
        this.#nev = nev;
    }
    get hossz() {
        return this.#hossz;
    }
    set hossz(hossz){
        if(typeof hossz === "number" && hossz > 0){
            this.#hossz = hossz;
        }else{
            throw new Error("Hossza 0-nál nagyobb szám kell legyen");
        }
    }
    static osszeg(zenehossz){
        hosszusag += zenehossz;
        return hosszusag;
    }
    
}

const lista = new Array();
function bevitel(){
    hosszusag += parseInt(document.getElementById("zenehossza").value);

    let zenehossz = parseInt(document.getElementById("zenehossza").value);
    let zenecim = document.getElementById("zenehossza").value;
    let currentZene = new Zene(zenecim, zenehossz);
    lista.push(currentZene);
    
    parseInt(document.getElementById("zenehossza").value);
    document.getElementById("zenehossza").value;
    document.getElementById("kiiras").innerHTML = Zene.osszeg(zenehossz);
}

function init(){
    document.getElementById('gomb').addEventListener('click', bevitel);
}

document.addEventListener('DOMContentLoaded', init);