let div = document.getElementById('div')
let input = document.getElementById('champTexte');
let button = document.getElementById ('toggleChamp');

button.addEventListener("click",(event) =>{
 if(input.disabled === true){
    input.disabled = false
 }else{
    input.disabled = true
 }
})

