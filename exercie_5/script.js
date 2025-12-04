// Exercice 5 – Afficher la valeur d’un champ texte
// Exercices sur les évènements en JavaScript 1
// Ajoutez un champ de texte avec l’ id="champNom" et un bouton avec
// l’ id="afficherNom" .
// Lorsqu’on clique sur le bouton, le contenu du champ doit être affiché dans un
// paragraphe id="message" , sous la forme suivante :
// "Bonjour, [valeur du champ]"
// (par exemple : "Bonjour, Sophie").


let btn = document.getElementById('afficherNom')
let champDeTexte = document.getElementById('champNom')

let paragraphe = document.createElement('p')
paragraphe.id = "message";

console.log(paragraphe)

btn.addEventListener("click",()=>{

})