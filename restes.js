
/* const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;

/*l'élément img qui a été créé et stocké dans imageElement, 
on spécifie que pour l'attribut src qui se trouve dans la balise(<img src=""> on lui donne la valeur qui se trouve dans article.image.
cette valeur doit correspondre à l'url de l'image*/

/*
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom; /*même principe sauf que innerText se réfère à la zone de texte (<h2> texte</h2>) */

/*const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie;

/**
 * l'opérateur ternaire se présente comme ça 
 * expression à tester ? valeur si vrai : valeur si faux.
 */

/*const prixElement = document.createElement("p");
prixElement.innerText = `prix ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`
document.body.appendChild(prixElement);

/**
 * l'opérateur nullish se présente comme ça:
 * expression à tester ?? valeur de subtitution
 */
/*
const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";
document.body.appendChild(descriptionElement);

const stockElement = document.createElement("p");
stockElement.innerText = article.disponibilite ? "en stock" : "Rupture de stock"
document.body.appendChild(stockElement)

/**pour accueillir tous ces nouveaux éléments, il leur faudra des parents. la structure DOM de notre code html
 * nous oblige à procéder de la sorte.
 * pour pouvoir le faire, nous allons utiliser la method appendChild qui permet justement de créer des "enfants"
 */
/*
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(stockElement);*/