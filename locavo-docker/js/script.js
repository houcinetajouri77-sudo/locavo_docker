function validerContact() {
    let ok = true;

    const nom       = document.getElementById("contact_nom");
    const email     = document.getElementById("contact_email");
    const telephone = document.getElementById("contact_telephone");
    const sujet     = document.getElementById("contact_sujet");
    const message   = document.getElementById("contact_message");

    const errNom   = document.getElementById("err_nom");
    const errEmail = document.getElementById("err_email");
    const errTel   = document.getElementById("err_telephone");
    const errSujet = document.getElementById("err_sujet");
    const errMsg   = document.getElementById("err_message");

    [errNom, errEmail, errTel, errSujet, errMsg].forEach(function(el) {
        if (el) el.innerText = "";
    });

    if (nom.value.trim().length < 2) {
        errNom.innerText = "Le nom est obligatoire (minimum 2 caractères).";
        ok = false;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email.value.trim())) {
        errEmail.innerText = "Veuillez entrer une adresse email valide (ex: nom@domaine.com).";
        ok = false;
    }

    if (telephone && telephone.value.trim() !== "") {
        const regexTel = /^[0-9]{8}$/;
        if (!regexTel.test(telephone.value.trim())) {
            errTel.innerText = "Le numéro de téléphone doit contenir exactement 8 chiffres.";
            ok = false;
        }
    }

    if (sujet.value === "") {
        errSujet.innerText = "Veuillez choisir un sujet pour votre demande.";
        ok = false;
    }

    const msgLen = message.value.trim().length;
    if (msgLen < 10) {
        errMsg.innerText = "Votre message doit contenir au moins 10 caractères.";
        ok = false;
    } else if (msgLen > 1000) {
        errMsg.innerText = "Votre message ne peut pas dépasser 1000 caractères.";
        ok = false;
    }

    return ok;
}