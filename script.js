function calculateTotal() {
  // Obtendo os valores dos inputs
  let protein = parseFloat(document.getElementById("protein").value);

  let carbs = parseFloat(document.getElementById("carbs").value);
  let sugar = parseFloat(document.getElementById("sugar").value);
  let addsugar = parseFloat(document.getElementById("addsugar").value);

  let fat = parseFloat(document.getElementById("fat").value);
  let saturated = parseFloat(document.getElementById("saturated").value);
  let fattrans = parseFloat(document.getElementById("fattrans").value);

  let fiber = parseFloat(document.getElementById("fiber").value);
  let na = parseFloat(document.getElementById("na").value);

  let portionWeight = parseFloat(
    document.getElementById("portionWeight").value
  );

  protein = isNaN(protein) ? 0 : protein;

  carbs = isNaN(carbs) ? 0 : carbs;
  sugar = isNaN(sugar) ? 0 : sugar;
  addsugar = isNaN(addsugar) ? 0 : addsugar;

  fat = isNaN(fat) ? 0 : fat;
  saturated = isNaN(saturated) ? 0 : saturated;
  fattrans = isNaN(fattrans) ? 0 : fattrans;

  fiber = isNaN(fiber) ? 0 : fiber;
  na = isNaN(na) ? 0 : na;

  portionWeight = isNaN(portionWeight) ? 0 : portionWeight;

  // Calculando o total de calorias
  let totalCalories = protein * 4 + carbs * 4 + fat * 9;

  // Calculando o total dos nutrientes
  let totalProtein = protein;

  let totalCarbs = carbs;
  let totalSugar = sugar;
  let totalAddSugar = addsugar;

  let totalFat = fat;
  let totalsaturated = saturated;
  let totaltrans = fattrans;

  let totalfiber = fiber;

  let totalNa = na;

  let totalProteinPerPortion = (protein * portionWeight) / 100;

  let totalCarbsPerPortion = (carbs * portionWeight) / 100;
  let totalSugarPerPortion = (totalSugar * portionWeight) / 100;
  let totalAddSugarPerPortion = (totalAddSugar * portionWeight) / 100;

  let totalFatPerPortion = (fat * portionWeight) / 100;
  let totalsaturatedPerPortion = (totalsaturated * portionWeight) / 100;
  let totaltransPerPortion = (totaltrans * portionWeight) / 100;

  let totalCaloriesPerPortion = (totalCalories * portionWeight) / 100;

  let totalfiberPerPortion = (totalfiber * portionWeight) / 100;

  let totalNaPerPortion = (totalNa * portionWeight) / 100;

  let totalportionWeight = portionWeight;

  let vdCalories = (100 * totalCaloriesPerPortion) / 2000;
  let vdCarbs = (100 * totalCarbsPerPortion) / 300;
  let vdProtein = (100 * totalProteinPerPortion) / 75;
  let vdFat = (100 * totalFatPerPortion) / 55;
  let vdsaturated = (100 * totalsaturatedPerPortion) / 22;

  let vdfiber = (100 * totalfiberPerPortion) / 25;
  let vdNa = (100 * totalNaPerPortion) / 2400;

  // Atualizando a tabela com os resultados
  document.getElementById("totalCalories").innerText = totalCalories.toFixed(1);

  document.getElementById("totalProtein").innerText = totalProtein.toFixed(1);

  document.getElementById("totalCarbs").innerText = totalCarbs.toFixed(1);
  document.getElementById("totalSugar").innerText = totalSugar.toFixed(1);
  document.getElementById("totalAddSugar").innerText = totalAddSugar.toFixed(1);

  document.getElementById("totalFat").innerText = totalFat.toFixed(1);
  document.getElementById("totalsaturated").innerText =
    totalsaturated.toFixed(1);
  document.getElementById("totaltrans").innerText = totaltrans.toFixed(1);

  document.getElementById("totalfiber").innerText = totalfiber.toFixed(1);

  document.getElementById("totalNa").innerText = totalNa.toFixed(1);

  document.getElementById("totalCaloriesPerPortion").innerHTML =
    totalCaloriesPerPortion.toFixed(1);

  document.getElementById("totalProteinPerPortion").innerHTML =
    totalProteinPerPortion.toFixed(1);

  document.getElementById("totalCarbsPerPortion").innerHTML =
    totalCarbsPerPortion.toFixed(1);
  document.getElementById("totalSugarPerPortion").innerHTML =
    totalSugarPerPortion.toFixed(1);
  document.getElementById("totalAddSugarPerPortion").innerHTML =
    totalAddSugarPerPortion.toFixed(1);

  document.getElementById("totalFatPerPortion").innerHTML =
    totalFatPerPortion.toFixed(1);
  document.getElementById("totalsaturatedPerPortion").innerHTML =
    totalsaturatedPerPortion.toFixed(1);
  document.getElementById("totaltransPerPortion").innerHTML =
    totaltransPerPortion.toFixed(1);

  document.getElementById("totalfiberPerPortion").innerHTML =
    totalfiberPerPortion.toFixed(1);

  document.getElementById("totalNaPerPortion").innerHTML =
    totalNaPerPortion.toFixed(1);

  document.getElementById("totalportionWeight").innerHTML =
    totalportionWeight + "g";

  document.getElementById("vdCalories").innerHTML = vdCalories.toFixed(0) + "%";
  document.getElementById("vdCarbs").innerHTML = vdCarbs.toFixed(0) + "%";
  document.getElementById("vdProtein").innerHTML = vdProtein.toFixed(0) + "%";
  document.getElementById("vdFat").innerHTML = vdFat.toFixed(0) + "%";
  document.getElementById("vdsaturated").innerHTML =
    vdsaturated.toFixed(0) + "%";
  document.getElementById("vdfiber").innerHTML = vdfiber.toFixed(0) + "%";
  document.getElementById("vdNa").innerHTML = vdNa.toFixed(0) + "%";

  let totalsaturated100g = totalsaturated;
  let totalNa100g = totalNa;
  let totalAddSugar100g = totalAddSugar;


  let  alertImage = "";
  if (totalAddSugar100g >= 15 && totalsaturated100g >= 6 && totalNa100g >= 600) {
    alertImage = "./img/acucarsodiogordura.png";
} else if (totalAddSugar100g >= 15 && totalsaturated100g >= 6) {
    alertImage = "./img/gorduraacucar.png";
} else if (totalAddSugar100g >= 15 && totalNa100g >= 600) {
    alertImage = "./img/altoemacucarsodio.png";
} else if (totalsaturated100g >= 6 && totalNa100g >= 600) {
    alertImage = "./img/altoemgordurasodio.png";
} else if (totalAddSugar100g >= 15) {
    alertImage = "./img/altoEmAcucar.png";
} else if (totalsaturated100g >= 6) {
    alertImage = "./img/altoEmGordura.png";
} else if (totalNa100g >= 600) {
    alertImage = "./img/altoEmSodio.png";
}

// Exibindo a imagem de alerta, se necessário
if (alertImage !== "") {
    document.getElementById('alertImg').src = alertImage;
    document.getElementById('alertImg').style.display = "inline";
} else {
    document.getElementById('alertImg').style.display = "none";
}

}

