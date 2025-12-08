let ul = document.getElementById("ul");
let li = document.querySelectorAll(".cliquable");


li.forEach(el => {
  el.addEventListener("click", () => {
    el.remove();
  });
});
