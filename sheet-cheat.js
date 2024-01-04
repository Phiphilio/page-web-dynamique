
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

// === Méthode sort() en JavaScript ===

// La méthode sort() est utilisée pour trier les éléments d'un tableau.

// === Syntaxe ===

// Ascendant (par défaut)
array.sort();

// Descendant
array.sort((a, b) => b - a);

// === Fonctionnement étape par étape ===

// 1. La méthode sort() trie les éléments du tableau en les convertissant en chaînes de caractères et en les comparant dans l'ordre lexicographique (Unicode).

// Exemple :
let fruits = ['orange', 'pomme', 'fraise', 'kiwi'];
fruits.sort();
console.log(fruits);
// Output: ['fraise', 'kiwi', 'orange', 'pomme']

// 2. Tri Ascendant (par défaut) :
//    - Les éléments sont comparés en tant que chaînes de caractères.
//    - Le tableau est modifié sur place.

// Exemple :
let nombres = [5, 2, 8, 1, 9];
nombres.sort();
console.log(nombres);
// Output: [1, 2, 5, 8, 9]

// 3. Tri Descendant :
//    - Vous fournissez une fonction de comparaison qui renvoie une valeur négative, zéro ou positive.
//    - Si la fonction renvoie une valeur négative, a est trié avant b.
//    - Si la fonction renvoie zéro, a et b restent inchangés par rapport à eux-mêmes.
//    - Si la fonction renvoie une valeur positive, b est trié avant a.

// Exemple :
let nombresDesc = [5, 2, 8, 1, 9];
nombresDesc.sort((a, b) => b - a);
console.log(nombresDesc);
// Output: [9, 8, 5, 2, 1]

// 4. Personnaliser le Tri :
//    - Vous fournissez une fonction de comparaison pour définir votre propre logique de tri.
//    - La fonction de comparaison compare deux éléments et renvoie un nombre négatif, zéro ou positif.

// Exemple :
let mots = ['orange', 'pomme', 'fraise', 'kiwi'];
mots.sort((a, b) => a.length - b.length);
console.log(mots);
// Output: ['kiwi', 'pomme', 'orange', 'fraise']

// Exemple :
let personnes = [
    { nom: 'John', age: 30 },
    { nom: 'Jane', age: 25 },
    { nom: 'Bob', age: 35 }
];
personnes.sort((a, b) => a.age - b.age);
console.log(personnes);
// Output: [{ nom: 'Jane', age: 25 }, { nom: 'John', age: 30 }, { nom: 'Bob', age: 35 }]

// === Conclusion ===

// La méthode sort() offre une flexibilité pour le tri des tableaux, que ce soit en ordre ascendant, descendant ou personnalisé en fonction de vos besoins.

// === Fin de la fiche de référence ===



// === Méthode splice() en JavaScript ===

// La méthode splice() est utilisée pour modifier le contenu d'un tableau en supprimant ou remplaçant des éléments existants et/ou en ajoutant de nouveaux éléments à partir d'une position spécifiée( à partir de là où ça supprime).

// === Syntaxe ===

// Supprimer des éléments à partir d'une position
array.splice(start, deleteCount);

// Supprimer des éléments et ajouter de nouveaux à partir d'une position( à partir de là où ça supprime)
array.splice(start, deleteCount, item1, item2, ...);

// === Fonctionnement étape par étape ===

// 1. La méthode splice() modifie le tableau sur place(ça modifie directement le dit tableau, ça n'en créé pas un nouveau).

// 2. Suppression d'éléments à partir d'une position (start) :
//    - start : L'index à partir duquel commencer la modification.
//    - deleteCount : Le nombre d'éléments à supprimer à partir de start.
//    - Les éléments supprimés sont renvoyés dans un nouveau tableau.

// Exemple :
let fruits = ['pomme', 'orange', 'banane', 'fraise'];
let elementsSupprimes = fruits.splice(1, 2);
console.log(fruits);
// Output: ['pomme', 'fraise']
console.log(elementsSupprimes);
// Output: ['orange', 'banane']

// 3. Suppression et ajout d'éléments à partir d'une position (start) :
//    - Après la suppression, de nouveaux éléments peuvent être ajoutés à la même position.
//    - Les éléments ajoutés sont spécifiés comme arguments après deleteCount.

// Exemple :
let couleurs = ['rouge', 'vert', 'bleu'];
couleurs.splice(1, 1, 'jaune', 'orange');
console.log(couleurs);
// Output: ['rouge', 'jaune', 'orange', 'bleu']

// 4. Suppression sans ajout :
//    - Si deleteCount est 0 et des éléments sont ajoutés, aucun élément n'est supprimé, mais les nouveaux éléments sont insérés à la position spécifiée.

// Exemple :
let nombres = [1, 2, 3, 4];
nombres.splice(2, 0, 5, 6);
console.log(nombres);
// Output: [1, 2, 5, 6, 3, 4]
// précision : dans ce cas, les éléments sont ajoutés AVANT l'endroit du start, d'où le fait que 5 et 6 soient avant 3
// === Conclusion ===

// La méthode splice() est puissante pour la manipulation des tableaux en permettant la suppression, le remplacement et l'ajout d'éléments à des positions spécifiques.

// === Fin de la fiche de référence ===

/********** Méthode map en JavaScript **********/

// La méthode map est utilisée pour créer un nouveau tableau en appliquant une fonction à chaque élément du tableau d'origine.

// === SYNTAXE ===
// newArray = array.map(callback(element, index, array))

// 1. Création d'un tableau d'origine
const originalArray = [1, 2, 3, 4, 5];

// 2. Utilisation de la méthode map
const newArray = originalArray.map((element, index, array) => {
    // === FONCTION DE RAPPEL (CALLBACK) ===
    // La fonction de rappel prend trois arguments :
    // - element : la valeur de l'élément en cours
    // - index : l'index de l'élément en cours
    // - array : le tableau sur lequel map est appelé (originalArray dans cet exemple)

    // === LOGIQUE D'APPLICATION ===
    // Appliquer une transformation ou une opération à chaque élément
    return element * 2;
});

// 3. Résultat
console.log("Tableau d'origine :", originalArray);
console.log("Nouveau tableau avec map :", newArray);

/**************************************************/

// === EXPLICATIONS ===

// - La méthode map crée un nouveau tableau sans modifier le tableau d'origine.
// - Pour chaque élément du tableau d'origine, la fonction de rappel est appelée.
// - La valeur retournée par la fonction de rappel est ajoutée au nouveau tableau.

// === ANALOGIE ===
// Imaginez que vous ayez un plateau de cookies (tableau d'origine).
// Vous utilisez une machine (map) pour doubler la taille de chaque cookie.
// Un nouveau plateau est créé avec les cookies agrandis (nouveau tableau).

// === EXEMPLE ===
// Vous avez un tableau de prix en dollars et vous souhaitez les convertir en euros.

const pricesInDollars = [20, 30, 40, 50];

const pricesInEuros = pricesInDollars.map((price) => {
    // Convertir chaque prix de dollars à euros (hypothétiquement)
    return price * 0.85; // Taux de change imaginaire
});

console.log("Prix en dollars :", pricesInDollars);
console.log("Prix en euros avec map :", pricesInEuros);

/**************************************************/
