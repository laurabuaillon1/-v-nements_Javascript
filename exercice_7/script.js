let button = document.getElementById('ajouter');
let ul = document.getElementById('listeElements');

button.addEventListener("click",()=>{
    const li = document.createElement('li')
    li.textContent= "Nouvel élément ajouté"
    ul.appendChild(li)
})