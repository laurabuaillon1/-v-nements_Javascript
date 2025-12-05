// Exercice 4 – Compter les clics d’un bouton
// Ajoutez un bouton avec l’ id="compter" et un paragraphe avec l’ id="resultat" .
// À chaque fois que le bouton est cliqué, le paragraphe doit afficher un message
// sous la forme :
// "Vous avez cliqué X fois."
// où X est le nombre de clics effectués depuis le chargement de la page.

let btn = document.getElementById("compter");
btn.addEventListener("click", comptage);
let resultat = 0;

function comptage() {
  resultat = resultat + 1;
  let click = document.getElementById("resultat");
  click.textContent = resultat;
}


