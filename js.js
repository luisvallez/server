// Constantes para encontrar las clases llamadas entre las " ".
const sobreMi = document.querySelector(".sobreMi");
const titulos = document.querySelector(".titulos");
const proyectos = document.querySelector(".proyectos");
// Poco mas de lo mismo
const info1 = document.querySelector(".info1");
const info2 = document.querySelector(".info2");
const info3 = document.querySelector(".info3");

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

// Evento click para activar solo una infomacion y desactivar las demas.
sobreMi.addEventListener("click", (event) => {
  sobreMi.style.fontSize = "60px";
  titulos.style.fontSize = "40px";
  proyectos.style.fontSize = "40px";

  info1.style.display = "block";
  info2.style.display = "none";
  info3.style.display = "none";
});

// Lo mismo de arriba.
titulos.addEventListener("click", (event) => {
  sobreMi.style.fontSize = "40px";
  titulos.style.fontSize = "60px";
  proyectos.style.fontSize = "40px";

  info2.style.display = "block";
  info1.style.display = "none";
  info3.style.display = "none";
});

// Lo mismo de arriba.
proyectos.addEventListener("click", (event) => {
  sobreMi.style.fontSize = "40px";
  titulos.style.fontSize = "40px";
  proyectos.style.fontSize = "60px";

  info3.style.display = "block";
  info1.style.display = "none";
  info2.style.display = "none";
});
