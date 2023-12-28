const reponse = await fetch("pieces-autos.json");
console.log("ça marche");
const pieces = await reponse.json();

const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image; /*l'élément img qui a été créé et stocké dans imageElement, 
on spécifie que pour l'attribut src qui se trouve dans la balise(<img src=""> on lui donne la valeur qui se trouve dans article.image.
cette valeur doit correspondre à l'url de l'image*/
const nomElement = document.createElement("h2");
nomElement.innerText = article.nom; /*même principe sauf que innerText se réfère à la zone de texte (<h2> texte</h2>) */
const prixElement = document.createElement("p");
prixElement.innerText = `prix :${artcile.prix} €`;
const categorieElemnt = document.createElement("p");
categorieElemnt.innerText = article.categorie;

/**pour accueillir tous ces nouveaux éléments, il leur faudra des parents. la structure DOM de notre code html
 * nous oblige à procéder de la sorte.
 * pour pouvoir le faire, nous allons utiliser la method appendChild qui permet justement de créer des "enfants"
 */
const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);

