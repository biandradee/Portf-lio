var menuButton = document.getElementById("menu-button");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

function escreverPalavra() {
  var texto = "Sou desenvolvedora front-end.";
  var elemento = document.getElementById('loading');
  var index = 0;

function escreverProximaLetra() {
    if (index < texto.length) {
      elemento.textContent += texto.charAt(index);
      index++;
      setTimeout(escreverProximaLetra, 100); 
    }
  }
  escreverProximaLetra();
}

window.onload = function() {
  escreverPalavra();
  setTimeout(function() {
      document.getElementById('content').style.display = 'block';
  }, 3000); 
}