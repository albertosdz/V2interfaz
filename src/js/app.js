document.addEventListener("DOMContentLoaded", function () {
  contrasteMode();

  const breadcrumb = document.querySelector(".breadcrumb ul");
  const path = window.location.pathname.split("/");

  // Agregar la ruta de inicio
  const homeLi = document.createElement("li");
  const homeA = document.createElement("a");
  homeA.href = "/";
  homeA.textContent = "Inicio";
  homeLi.appendChild(homeA);
  breadcrumb.appendChild(homeLi);

  // Agregar las otras partes de la URL como elementos del breadcrumb
  path.forEach((segment, index) => {
    if (segment && index !== path.length - 1) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = "/" + path.slice(0, index + 1).join("/");
      a.textContent = segment.charAt(0).toUpperCase() + segment.slice(1);
      li.appendChild(a);
      breadcrumb.appendChild(li);
    }
  });

  // Agregar el nombre de la página sin enlace
  if (path[path.length - 1]) {
    const li = document.createElement("li");
    li.textContent =
      path[path.length - 1].charAt(0).toUpperCase() +
      path[path.length - 1].slice(1);
    breadcrumb.appendChild(li);
  }
});

//cambiar beneficios

if (window.matchMedia("(min-width: 850px)").matches) {
  let beneficio = "beneficio1"; // Establece el beneficio inicial

  window.addEventListener("load", function () {
    document.getElementById("beneficio2").style.display = "none";
    document.getElementById("beneficio3").style.display = "none";
    document.getElementById("beneItem1").style.boxShadow =
      "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15), inset 5px 0 0 #3586ff";
  });
  function cambiarBeneficio(cual) {
    // Ocultar el beneficio actual
    document.getElementById(beneficio).style.display = "none";
    // Actualizar la variable 'beneficio' con el nuevo valor
    beneficio = cual;
    // Mostrar el nuevo beneficio
    document.getElementById(beneficio).style.display = "block";
    // Cambiar la propiedad 'box-shadow'

    switch (cual) {
      case "beneficio1":
        document.getElementById("beneItem1").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15), inset 5px 0 0 #3586ff";
        document.getElementById("beneItem2").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)";
        document.getElementById("beneItem3").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)";
        break;
      case "beneficio2":
        document.getElementById("beneItem2").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15), inset 5px 0 0 #3586ff";
        document.getElementById("beneItem1").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)";
        document.getElementById("beneItem3").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)";
        break;
      case "beneficio3":
        document.getElementById("beneItem3").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15), inset 5px 0 0 #3586ff";
        document.getElementById("beneItem1").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)";
        document.getElementById("beneItem2").style.boxShadow =
          "0px 0.5rem 1rem 0px rgba(9, 30, 66, 0.15)";
        break;
    }
  }
}

function contrasteMode() {
  const botonContrasteMode = document.querySelector(".boton-contraste");

  botonContrasteMode.addEventListener("click", function () {
    document.body.classList.toggle("contraste-mode");
  });
}

// Filtra las preguntas y respuestas por categoría
function filterFAQ(category) {
  // Obtiene todas las categorías
  const categories = document.querySelectorAll(".faq__category");

  // Si la categoría está vacía, muestra todo
  categories.forEach((cat) => {
    if (
      category === "" ||
      cat.querySelector(".faq__category-title").textContent === category
    ) {
      cat.style.display = "block"; // Muestra la categoría
    } else {
      cat.style.display = "none"; // Oculta las categorías no seleccionadas
    }
  });
}

//navegacion responsive
const nav = document.getElementById("nav");
const abrir = document.getElementById("abrir");
const cerrar = document.getElementById("cerrar");

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
  document.body.style.overflow = "hidden";
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
  document.body.style.overflow = "";
});
