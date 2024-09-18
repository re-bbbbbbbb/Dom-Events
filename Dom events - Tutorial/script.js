function CambiaTesto() {
    testo.innerHTML = "E' un insieme di strategie che puntano all'innovazione dei servizi pubblici";
}

function petrolio2020() {
    document.getElementById("esemPet20").innerHTML = "90 milioni di barili al giorno";
}

function petrolio2021() {
  document.getElementById("esemPet21").innerHTML = "75 milioni di barili al giorno";
}

function petrolio2022() {
  document.getElementById("esemPet22").innerHTML = "35 milioni di barili al giorno";
}

function upperCase() {
    const x = document.getElementById("nome");
    x.value = x.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "L'agenda 2030 è una serie di 17 obiettivi interconnessi, definiti dall'ONU"
}

function mOut(obj) {
  obj.innerHTML = "Cosa? Non sai cos'è l'agenda 2030? Passa il mouse qui sopra"
}

function mDown(obj) {
  obj.style.backgroundColor = "#a763ff";
  obj.innerHTML = "Non inquinare >:(";
}

function mUp(obj) {
  obj.style.backgroundColor="#fc60fa";
  obj.innerHTML="e fai la raccolta differenziata.";
}