let contatos = window.document.getElementById("contatos");
let informações = window.document.getElementById("informacao");

function addHoverEffect(column) {
  column.classList.add("hover-effect");
  if (column == informações) {
    column.classList.add("hover-effect-informacao");
  }
}

function removeHoverEffect(column) {
  column.classList.remove("hover-effect");
  if (column == informações) {
    column.classList.add("hover-effect-informacao");
  }
}

contatos.addEventListener("mouseenter", () => addHoverEffect(contatos));
contatos.addEventListener("mouseleave", () => removeHoverEffect(contatos));

informações.addEventListener("mouseenter", () => addHoverEffect(informações));
informações.addEventListener("mouseleave", () =>
  removeHoverEffect(informações)
);

let footer = window.document.getElementById("footer");
footer.innerHTML += `\u{1F9D9}`;
