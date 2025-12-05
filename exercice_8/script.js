let ul = document.getElementById("ul");
let li = document.querySelectorAll(".cliquable");


li.forEach(li => {
  li.addEventListener("click", () => {
    li.remove();
  });
});
