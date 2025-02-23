//cambiar beneficios
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

//navegacion responsive
const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir');
const cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', ()=>{
  nav.classList.add("visible");
  document.body.style.overflow = "hidden";
} );

cerrar.addEventListener('click', () => {
  nav.classList.remove("visible");
  document.body.style.overflow = "";
})