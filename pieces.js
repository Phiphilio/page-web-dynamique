const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());
import {ajooutListenerAvis} from "./avis.js";

//fonction qui génère toute la page web
function genererPieces(pieces) {

    for (let i = 0; i < pieces.length; ++i) {
        const sectionFiches = document.querySelector(".fiches");
        // création d'une balise dédiée à une pièce automobile
        const pieceElement = document.createElement("article");
        //création de l'élément img
        const imageElement = document.createElement("img");
        //on accède à l'indice i de la liste pieces pour configurer la source de l'image
        imageElement.src = pieces[i].image;
        //création de l'élément
        const nomElement = document.createElement("h2");
        nomElement.innerText = pieces[i].nom;

        const prixElement = document.createElement("p");
        prixElement.innerText = `prix ${pieces[i].prix} €`;

        const categorieElement = document.createElement("p");
        categorieElement.innerText = pieces[i].categorie;

        const descriptionElement = document.createElement("p");
        descriptionElement.innerText = pieces[i].description ?? "Pas de description pour le moment.";


        const stockElement = document.createElement("p");
        stockElement.innerText = pieces[i].disponibilite ? "en stock" : "Rupture de stock";

        const avisBouton = document.createElement("button");
        avisBouton.dataset.id= pieces[i].id;
        avisBouton.innerText = "afficher les avis";

        pieceElement.appendChild(imageElement);
        pieceElement.appendChild(nomElement);
        pieceElement.appendChild(prixElement);
        pieceElement.appendChild(categorieElement);
        pieceElement.appendChild(descriptionElement);
        pieceElement.appendChild(stockElement);
        pieceElement.appendChild(avisBouton);

        sectionFiches.appendChild(pieceElement);
        document.body.appendChild(sectionFiches);
    };
    console.log("ça marche");
    ajooutListenerAvis();
};

//premier affichage de la page 
genererPieces(pieces);

const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });

    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", () => {

    const piecesFiltres = pieces.filter(function (piece) {
        return pieces.disponibilite;
    })
    //effacement de l'écran et regénération de la page avec pièces
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltres);
});

const boutonDecroissant = document.querySelector(".btn-decroissant");

boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesOrdonnees);
});

const boutonNoDescription = document.querySelector(".btn-nodesc");

boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.description
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].prix > 35) {
        noms.splice(i, 1);
    }
}
console.log(noms)
//Création de l'en-tête

const pElement = document.createElement('p')
pElement.innerText = "Pièces abordables";
//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}

// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables')
    .appendChild(pElement)
    .appendChild(abordablesElements);

//Code Exercice 
const nomsDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)

for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        nomsDisponibles.splice(i, 1);
        prixDisponibles.splice(i, 1);
    }
}

const disponiblesElement = document.createElement('ul');

for (let i = 0; i < nomsDisponibles.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomsDisponibles[i]} - ${prixDisponibles[i]} €`
    disponiblesElement.appendChild(nomElement);
}

const pElementDisponible = document.createElement('p')
pElementDisponible.innerText = "Pièces disponibles:";
document.querySelector('.disponibles').appendChild(pElementDisponible).appendChild(disponiblesElement)

const inputPrixMax = document.querySelector('#prix-max')
inputPrixMax.addEventListener('input', function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= inputPrixMax.value;
    });
    document.querySelector(".fiches").innerHTML = "";
    genererPieces(piecesFiltrees);
})
/*
const noms = pieces.map(pieces => pieces.nom);
/**la methode map s'applique sur un tableau d'origine et permet de créer un nouveau tableau contenant les éléments du tableau d'origine qui eux ont étés modifiés par une fonction prise en paramètre par map
 * 
 * fonctionnement étape par étape : 
 * La méthode map() est appelée sur un tableau d'origine.
 * Elle prend en argument une fonction qui sera appliquée à chaque élément du tableau.
 * Cette fonction de transformation définit comment chaque élément du tableau d'origine doit être modifié.
 * La méthode map() crée un nouveau tableau contenant les résultats de l'application de la fonction à chaque élément.
 * Le tableau d'origine reste inchangé.
  */
/*
for (let i = pieces.length - 1; i >= 0; i--) {

    if (pieces[i].prix > 35) {
        noms.splice(i, 1);
    }
}


const abordablesElements = document.createElement("ul");

for (let i = 0; i < noms.length; ++i) {

    const nomElement = document.createElement("li");
    nomElement.innerText = noms[i];
    abordablesElements.appendChild(nomElement);
}
const cardAbord = document.querySelector(".abordables");
cardAbord.appendChild(abordablesElements);

for (let i = pieces.length - 1; i >= 0; i--) {
    if (pieces[i].disponibilite === false) {
        pieces.splice(i, 1);
    }
}
const listeDispo = document.createElement("ul");

for (let i = 0; i < pieces.length; i++) {
    const dispo = document.createElement("li")
    dispo.innerText = pieces[i].nom;
    listeDispo.appendChild(dispo)
}

const disponible = document.querySelector(".disponibles");
disponible.appendChild(listeDispo);*/