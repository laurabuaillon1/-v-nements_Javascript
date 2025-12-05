let input = document.getElementById('champClavier')
let paragraphe = document.getElementById('messageClavier')

input.addEventListener("keydown",(event) =>{
    if (event.key === "Enter"){
        paragraphe.textContent="Vous avez appuyé sur la touche Entrée"
    }
})