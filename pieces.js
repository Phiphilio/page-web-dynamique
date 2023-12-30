const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
/**apparemment contrôle + shift + r réactualise le site et égalemet le cache du navigateur */


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
    pieces.sort(function (a, b) {
        return a.prix - b.prix;
    });
    /**la methode sort est utilisée pour trier un tableau. Elle s'attend à recevoir une valeur de la fonction qu'elle contient. la fonction elle va faire le calcul suivant
     * deuxième paramètre (b) - premier paramètre (a)
     * si le résultat est positif alors le deuxième parammètre (b) est plus grand que le premier(a) et sera donc placé avant, 
     * si le résultat est négatif alors le premier paramètre(a) est plus grand que le second(b), il sera placé avant.
     * si le résultat est égal à 0, il n'y a pas de changements. 
     */
    console.log(pieces);
});

