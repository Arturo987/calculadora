let desplegar = document.getElementById("desplegar");
let botones = Array.from(document.getElementsByClassName("boton"));
botones.map((boton) => {
  boton.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        desplegar.innerText = "";
        break;
      case "=":
        try {
          desplegar.innerText = eval(desplegar.innerText);
        } catch {
          desplegar.innerText = "Error";
        }
        break;
      case "←":
        if (desplegar.innerText) {
          desplegar.innerText = desplegar.innerText.slice(0, -1);
        }
        break;
      default:
        desplegar.innerText += e.target.innerText;
    }
  });
});
