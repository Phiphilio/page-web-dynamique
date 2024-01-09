export function ajooutListenerAvis() {
    const piecesElements = document.querySelectorAll(".fiches article button");
    for (let i = 0; i < piecesElements.length; i++) {
        piecesElements[i].addEventListener("click", async function (event) {
            const id = event.target.dataset.id;
            // le veerbe utilisé par la fonction fetch par défaut est GET
            const reponse = await fetch(`http://localhost:8081/pieces/${id}/avis`);
            const avis = await reponse.json();
            const pieceElement = event.target.parentElement;

            const avisElement = document.createElement("p");
            for (let i = 0; i < avis.length; i++) {
                avisElement.innerHTML += `${avis[i].utilisateur} : <br> ${avis[i].commentaire} <br>;`
            }
            pieceElement.appendChild(avisElement);
        }
        )
    };

}
export function ajoutListenerEnvoyerAvis() {
    const btnSoumettre = document.querySelector(".formulaire-avis");

    btnSoumettre.addEventListener("submit", function (event) {

        // empeche la page de se charger automatiquement après qu'un formulaire soit validé
        event.preventDefault();

        const avis = {
            //parseInt sert à convertir une chaine de caractère en un nombre entier
            pieceId: parseInt(event.target.querySelector("[name=piece-id]").value),
            utilisateur: event.target.querySelector("[name=utilisateur]").value,
            commentaire: event.target.querySelector("[name=commentaire]").value,
            nbEtoiles: parseInt(event.target.querySelector("[name=nbEtoiles]").value)
        }
        // cet objet doit être transformé en chaine de caractère au format json
        const chargeUtile = JSON.stringify(avis);

        // maintenant je oeux utiliser la fonction fetch pour soumettre les informations nécéssaires
        fetch("http://localhost:8081/avis", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: chargeUtile
        })

    })
}