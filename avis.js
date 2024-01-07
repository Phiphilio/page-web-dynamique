export function ajooutListenerAvis(){
    const piecesElements = document.querySelectorAll(".fiches article button");
    for (let i = 0; i < piecesElements.length; i++) {
        piecesElements[i].addEventListener("click", async function (event) {
            const id = event.target.dataset.id;
            // le veerbe utilisé par la fonction fetch par défaut est GET
            fetch(`http://localhost:8081/pieces/${id}/avis`);

        }
        )
    };
    
}