let listemot = new Array();
let motcache = "";
let playedchar = new Array(26);
let played = 0;
let nbplayed = 0;
let pieces = new Array(5);
let table = new Array(motcache.length);
let affiche = new Array(motcache.length);
// definissions des images pendu
pieces[0] = 'Pendu1.png';
pieces[1] = 'Pendu2.png';
pieces[2] = 'Pendu3.png';
pieces[3] = 'Pendu4.png';
pieces[4] = 'Pendu5.png';
listemot[0] = 'salle';
listemot[1] = 'cours';
listemot[2] = 'begayer';
listemot[3] = 'cosplay';
listemot[4] = 'argent';
listemot[5] = 'billets';
listemot[6] = 'zombie';
listemot[7] = 'arc';
listemot[8] = 'camion';
listemot[9] = 'voiture';
listemot[10] = 'fenetre';
listemot[11] = 'porte';
listemot[12] = 'chemise';
listemot[13] = 'veste';

// fonction aléatoire qui retourne un nombre
function Aleatoire(mini,maxi) {
    let x = -1;
    while(x < mini) {
        x = Math.round(Math.random() * maxi);
    }

    return x;
}
function Initialise() {
    motcache = listemot[Aleatoire(0,listemot.length)];
    table = new Array(motcache.length);
    affiche = new Array(motcache.length);
    played = 0;
    nbplayed = 0;
    for(var x = 0; x < motcache.length; x++){
        table[x] = motcache.charAt(x);
        affiche[x] = "- ";
    }
    out="";
    for(var x =0; x < motcache.length; x++){
        out = out + affiche[x];
    }
    for(var x=0; x <=nbplayed;x++){
        playedchar[x] = "";
    }
    document.pendu.motcache.value = out;
    document.pendu.caracteres.value = "";
    document.pendu.caracterejoue.value ="";
    document.pendu.caracteres.focus();
}
function Continue() {
    if(played == 5) {
        alert('vous avez perdu');
        out = "";
        for(var x = 0; x < motcache.length; x++){
            out = out + table[x];
        }
        document.pendu.motcache.value = out;
    }
    else {
        if(table.join() == affiche.join()){
            alert('vous avez gagné');
        }
    }
}
function OKToPlay(carac) {
    if(played == 5) {
        return 1;
    }
    else {
        if(table.join() == affiche.join()) {
            return 2;
        }
        else {
            if(carac="") {
                return 3;
            }
            else {
                let exist = false;
                for(var x=0; x < nbplayed; x++) {
                    if(playedchar[x] == carac) {
                        exist = true;
                    }
                }
                if(exist) {
                    return 4;
                }
            }
        }
    }
    return 0;
}
function TestCar() {
    let good = false;
    propose = document.pendu.caracteres.value;
    propose = propose.toLowerCase();
    let test = OKToPlay(propose);
    if(test == 0) {
        playedchar[nbplayed] = propose;
        for(var x=0; x < motcache.length; x++) {
            if(propose == table[x]) {
                affiche[x] = propose;
                good = true;
            }
        }
        if(good) {
            out = "";
            for(var x =0; x < motcache.length; x++) {
                out = out + affiche[x];
            }
            document.pendu.motcache.value = out;
        }
        else {
            document.getElementsByClassName('partie').innerHTML = '<img src="assets/img/'+pieces[played]+'" />';
            played++;
        }
        out="";
        for(var x = 0; x <= nbplayed; x++) {
            out = out + playedchar[x];
        }
        nbplayed++;
        document.pendu.caracterejoue.value = out;
        document.pendu.caracteres.value = "";


        Continue();
    }
    else {
        if(test == 1) {
            alert('vous avez perdu')
            document.pendu.caracteres.value = "";
        }
        if(test == 2) {
            alert('vous avez gagné')
            document.pendu.caracteres.value="";
        }
        if(test == 3) {
            alert('saisir un caractere')
            document.pendu.caracteres.value="";
        }
        if(test == 4) {
            alert('cara deja proposé')
            document.pendu.caracteres.value="";
        }
    }
    document.pendu.caracteres.focus();
}
Initialise();



