const pieces = await fetch("pieces-autos.json").then(pieces=>pieces.json());


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

    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stockElement);

    sectionFiches.appendChild(pieceElement);

};
const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
    });
    /**la methode sort est utilisée pour trier un tableau. Elle s'attend à recevoir une valeur de la fonction qu'elle contient. la fonction elle va faire le calcul suivant
     * deuxième paramètre (b) - premier paramètre (a)
     * si le résultat est positif alors le deuxième parammètre (b) est plus grand que le premier(a) et sera donc placé avant, 
     * si le résultat est négatif alors le premier paramètre(a) est plus grand que le second(b), il sera placé avant.
     * si le résultat est égal à 0, il n'y a pas de changements. 
     */
    console.log(piecesOrdonnees);
});

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", () => {

    const piecesFiltres = pieces.filter(function (piece) {
        return piece.prix <= 35;
    })
    console.log(piecesFiltres);
});

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

for (let i = 0; i<pieces.length; i++){
    const dispo = document.createElement("li")
    dispo.innerText = pieces[i].nom;
    listeDispo.appendChild(dispo)
}

const disponible = document.querySelector(".disponibles");
disponible.appendChild(listeDispo);