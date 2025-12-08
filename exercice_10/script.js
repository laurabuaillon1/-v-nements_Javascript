const champtexte = document.getElementById("filtreAnimaux");
const liste = document.querySelectorAll(".animal");

 //Cet événement se déclenche À CHAQUE FOIS que l'utilisateur tape ou efface un caractère
champtexte.addEventListener("input", (e) => {
  let texteRecherche = e.target.value; //récupère ce que l'utilisateur a tapé
                                       //e.target.value contient le texte actuel du champ

  liste.forEach((li) => {              //faire une boucle pour vérifier chaque élément de la liste
    let texteAnimal = li.textContent;  //je récupère le texte de l'animal actuel
    if (texteAnimal.includes(texteRecherche)) { //je vérifie si le texte de l'animal contient le texte recherché
      li.style.display = "";           //"" affiche par défaut (visible)
    } else {
      li.style.display = "none";        //none= l'élement devient invisible
    }
  });
});
