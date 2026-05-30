function validerReservation() {
    let ok = true;

    const nom       = document.getElementById("nom");
    const email     = document.getElementById("email");
    const tel       = document.getElementById("telephone");
    const age       = document.getElementById("age");
    const permis    = document.getElementById("permis");
    const depart    = document.getElementById("date_depart");
    const retour    = document.getElementById("date_retour");
    const categorie = document.getElementById("categorie");

    const errNom       = document.getElementById("err_nom");
    const errEmail     = document.getElementById("err_email");
    const errTel       = document.getElementById("err_telephone");
    const errAge       = document.getElementById("err_age");
    const errPermis    = document.getElementById("err_permis");
    const errDepart    = document.getElementById("err_date_depart");
    const errRetour    = document.getElementById("err_date_retour");
    const errCategorie = document.getElementById("err_categorie");

    [errNom, errEmail, errTel, errAge, errPermis,
     errDepart, errRetour, errCategorie].forEach(function(el) {
        if (el) el.innerText = "";
    });

    if (nom.value.trim().length < 2) {
        errNom.innerText = "Le nom complet est obligatoire (min. 2 caractères).";
        ok = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
        errEmail.innerText = "Veuillez entrer une adresse email valide (ex: nom@domaine.com).";
        ok = false;
    }

    const regexTel = /^[0-9]{8}$/;
    if (!regexTel.test(tel.value.trim())) {
        errTel.innerText = "Le téléphone doit contenir exactement 8 chiffres.";
        ok = false;
    }

    const ageVal = parseInt(age.value);
    if (isNaN(ageVal) || ageVal < 18 || ageVal > 99) {
        errAge.innerText = "Vous devez avoir entre 18 et 99 ans pour louer un véhicule.";
        ok = false;
    }

    if (permis && permis.value.trim() !== "") {
        const regexPermis = /^[0-9]{8}$/;
        if (!regexPermis.test(permis.value.trim())) {
            errPermis.innerText = "Le numéro de permis doit contenir exactement 8 chiffres.";
            ok = false;
        }
    }

    const aujourd_hui = new Date();
    aujourd_hui.setHours(0, 0, 0, 0);
    if (depart.value === "") {
        errDepart.innerText = "La date de départ est requise.";
        ok = false;
    } else if (new Date(depart.value) < aujourd_hui) {
        errDepart.innerText = "La date de départ ne peut pas être dans le passé.";
        ok = false;
    }

    if (retour.value === "") {
        errRetour.innerText = "La date de retour est requise.";
        ok = false;
    } else if (depart.value !== "" && new Date(retour.value) <= new Date(depart.value)) {
        errRetour.innerText = "La date de retour doit être strictement après la date de départ.";
        ok = false;
    }

    if (categorie && categorie.value === "") {
        errCategorie.innerText = "Veuillez sélectionner une catégorie de véhicule.";
        ok = false;
    }

    return ok;
}