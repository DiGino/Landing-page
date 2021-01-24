
const time = document.querySelector("#time"),
      message = document.querySelector("#message"),
      nom = document.querySelector("#nom"),
      objectif = document.querySelector("#objectif"),
      body = document.querySelector("body");


//AFficher l'heure complète
function afficherHeure() {

  let date = new Date(),
      heure = date.getHours(),
      minutes = date.getMinutes(),
      secondes = date.getSeconds();    

//Date en Format 12h
heure = heure % 12 || 12;

time.innerHTML = `${heure}<span>:</span>${minutes}<span>:</span>${secondes}`;

setTimeout(afficherHeure, 1000);
}

//Modifier Arrière plan et message en fonction de l'heure
function changeArrièrePlan() {
  let date = new Date(),
      heure = date.getHours();

  if(heure < 12) {
        body.classList.add("bg-night");
        message.innerHTML = "Belle journée!!!";
      }
  if(heure > 12) {
    body.classList.add("bg-night");
    message.innerHTML = "Le soir est là";
  }
}

//Enregistrer Nom
function EnregistrerNom(e) {
  if(e.type === 'keypress') {
    if(e.which ==13 || e.keyCode == 13) {
      localStorage.setItem('nom', e.target.innerHTML);
      nom.blur();
    }
  }
  else {
    localStorage.setItem('nom', e.target.innerHTML);
  }
}

//Enregistrer objectif
function EnregistrerObjectif(e) {
  if(e.type === 'keypress') {
    if(e.which ==13 || e.keyCode == 13) {
      localStorage.setItem('objectif', e.target.innerHTML);
      objectif.blur();
    }
  }
  else {
    localStorage.setItem('objectif', e.target.innerHTML);
  }
}

//Recupérer nom
function recupererNom() {
  if(localStorage.getItem('nom') === null) {
    nom.innerHTML = "[Saisis ton nom]";
  }
  else {
    nom.innerHTML = localStorage.getItem("nom");
  }
}

//Récupérer objectif
function recupererObjectif() {
  if(localStorage.getItem('objectif') === null) {
    objectif.innerHTML = "[Saisis ton objectif]";
  }
  else {
    objectif.innerHTML = localStorage.getItem("objectif");
  }
}

nom.addEventListener("keypress", EnregistrerNom);
nom.addEventListener("blur", EnregistrerNom);
objectif.addEventListener("keypress", EnregistrerObjectif);
objectif.addEventListener("blur", EnregistrerObjectif);


recupererObjectif();
recupererNom();
afficherHeure();
changeArrièrePlan();
