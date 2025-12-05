// Exercice 5 – Afficher la valeur d’un champ texte
// Exercices sur les évènements en JavaScript 1
// Ajoutez un champ de texte avec l’ id="champNom" et un bouton avec
// l’ id="afficherNom" .
// Lorsqu’on clique sur le bouton, le contenu du champ doit être affiché dans un
// paragraphe id="message" , sous la forme suivante :
// "Bonjour, [valeur du champ]"
// (par exemple : "Bonjour, Sophie").

let boutton = document.getElementById("afficherNom");
let input = document.getElementById("champNom");
let div = document.getElementById("div");

boutton.addEventListener("click", () => {
  let paragraphe = document.createElement("p");
  paragraphe.textContent = "Bonjour," + input.value;
  
  div.appendChild(paragraphe);
});
