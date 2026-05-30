document.addEventListener("DOMContentLoaded", function () {

    var form = document.getElementById("form-questionnaire");
    var rangeNote = document.getElementById("q-note");
    var noteDisplay = document.getElementById("note-display");

    rangeNote.addEventListener("input", function () {
        noteDisplay.textContent = rangeNote.value;
    });

    form.addEventListener("reset", function () {
        setTimeout(function () {
            noteDisplay.textContent = "7";
        }, 0);
    });

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        var nom = document.getElementById("q-nom").value.trim();
        var email = document.getElementById("q-email").value.trim();
        var age = document.getElementById("q-age").value;
        var commentaire = document.getElementById("q-commentaire").value.trim();

        var radios = document.getElementsByName("satisfaction");
        var satisfOk = false;

        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                satisfOk = true;
                break;
            }
        }

        var erreurs = document.querySelectorAll(".err");
        for (var j = 0; j < erreurs.length; j++) {
            erreurs[j].textContent = "";
        }

        document.getElementById("resultat-questionnaire").innerHTML = "";

        var valide = true;

        if (nom.length < 3) {
            document.getElementById("err-nom").textContent =
                "Le nom doit contenir au moins 3 caractères.";
            valide = false;
        }

        if (email.indexOf("@") === -1 || email.indexOf(".") === -1 || email.length < 5) {
            document.getElementById("err-email").textContent =
                "Veuillez entrer un email valide.";
            valide = false;
        }

        if (age === "" || parseInt(age) < 18 || parseInt(age) > 99) {
            document.getElementById("err-age").textContent =
                "L'âge doit être compris entre 18 et 99.";
            valide = false;
        }

        if (!satisfOk) {
            document.getElementById("err-satisfaction").textContent =
                "Veuillez indiquer votre satisfaction.";
            valide = false;
        }

        if (commentaire.length < 10) {
            document.getElementById("err-commentaire").textContent =
                "Le commentaire doit contenir au moins 10 caractères.";
            valide = false;
        }

        if (valide) {
            form.submit();
        }
    });
});