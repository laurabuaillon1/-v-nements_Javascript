const champtexte = document.getElementById("filtreAnimaux");
const liste = document.querySelectorAll(".animal");

champtexte.addEventListener("input", (e) => {
  let texteRecherche = e.target.value; //récupère ce que l'utilisateur a tapé

  liste.forEach((li) => {
    let texteAnimal = li.textContent;
    if (texteAnimal.includes(texteRecherche)) {
      li.style.display = "";
    } else {
      li.style.display = "none";
    }
  });
});
