function calculateTip(event) {
  // não recarregar a página
  event.preventDefault();

  let bill = document.getElementById("bill").value;
  let serviceQual = document.getElementById("serviceQual").value;
  let people = document.getElementById("people").value;

  //Verificar se a conta está preenchida
  if ((bill == "") | (serviceQual == 0)) {
    alert("Preencha os valores");
    return;
  }

  //Verificar número de pessoas
  if ((people == "") | (people <= 1)) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (bill * serviceQual) / people;
  total = total.toFixed(2);
  document.getElementById('tip').innerHTML = total;
  document.getElementById("totalTip").style.display = "block";






}
// remover frase (gorjeta tota)
// (cada)
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

// evento do formulário
document.getElementById("tipsForm").addEventListener("submit", calculateTip);

//
