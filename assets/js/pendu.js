let listemot = new Array();
let motcache = "";
let playedchar = new Array(26);
let played = 0;
let nbplayed = 0;
let pieces = new Array(5);
let table = new Array(motcache.length);
let affiche = new Array(motcache.length);
// definissions des images pendu
pieces[0] = 'pendu1.png';
pieces[1] = 'pendu2.png';
pieces[2] = 'pendu3.png';
pieces[3] = 'pendu4.png';
pieces[4] = 'pendu5.png';
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
    affiche = new Array(motcache.length)
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
}

