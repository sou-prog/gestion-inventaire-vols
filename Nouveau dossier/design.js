function ajouterVol() {
    const listeVols = document.getElementById('liste-vols');
    const vol = prompt("Entrez le numéro de vol :");
    if (vol) {
        const div = document.createElement('div');
        div.textContent = `Vol ajouté : ${vol}`;
        listeVols.appendChild(div);
    }
}

function ajouterPassager() {
    const listePassagers = document.getElementById('liste-passagers');
    const passager = prompt("Entrez le nom du passager :");
    if (passager) {
        const div = document.createElement('div');
        div.textContent = `Passager ajouté : ${passager}`;
        listePassagers.appendChild(div);
    }
}

function ajouterReservation() {
    const listeReservations = document.getElementById('liste-reservations');
    const reservation = prompt("Entrez les détails de la réservation :");
    if (reservation) {
        const div = document.createElement('div');
        div.textContent = `Réservation ajoutée : ${reservation}`;
        listeReservations.appendChild(div);
    }
}

function ajouterEquipage() {
    const listeEquipage = document.getElementById('liste-equipage');
    const equipage = prompt("Entrez le nom de l'équipage :");
    if (equipage) {
        const div = document.createElement('div');
        div.textContent = `Équipage ajouté : ${equipage}`;
        listeEquipage.appendChild(div);
    }
}

function ajouterAeroport() {
    const listeAeroports = document.getElementById('liste-aeroports');
    const aeroport = prompt("Entrez le nom de l'aéroport :");
    if (aeroport) {
        const div = document.createElement('div');
        div.textContent = `Aéroport ajouté : ${aeroport}`;
        listeAeroports.appendChild(div);
    }
}
