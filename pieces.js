const reponse = await fetch("pieces-autos.json");
console.log("ça marche");
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
const boutonTrier = document.quereySelector(".btn-trier");
boutonTrier.addEventListener("click", function(){

});