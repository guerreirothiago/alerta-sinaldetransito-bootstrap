document.getElementById("alertButton").addEventListener("click", function () {
  const alertHtml =
    '<div class="alert alert-danger alert-dismissible fade show" role="alert">Sou um Alert vermelho<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
  document.getElementById("alertContainer").innerHTML = alertHtml;
});

document
  .getElementById("selecioneSinal")
  .addEventListener("change", function () {
    const color = this.value;
    const light = document.getElementById("trafegoSinal");
    if (color === "red") {
      light.style.backgroundColor = "red";
    } else if (color === "yellow") {
      light.style.backgroundColor = "yellow";
    } else if (color === "green") {
      light.style.backgroundColor = "green";
    } else {
      light.style.backgroundColor = "white";
    }
  });
