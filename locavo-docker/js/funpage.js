document.addEventListener("DOMContentLoaded", function () {

    var marques = [
        { nom: "Ferrari" },
        { nom: "BMW" },
        { nom: "Mercedes" },
        { nom: "Lamborghini" },
        { nom: "Porsche" },
        { nom: "Audi" }
    ];

    var cartes = [];
    var carte1 = null;
    var carte2 = null;
    var verrouille = false;
    var tentatives = 0;
    var paires = 0;

    var plateau = document.getElementById("plateau");
    var spanTent = document.getElementById("compteur-tentatives");
    var spanPaires = document.getElementById("compteur-paires");
    var msgFin = document.getElementById("msg-fin");
    var eventLog = document.getElementById("event-log");

    function melanger(tab) {
        for (var i = tab.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = tab[i];
            tab[i] = tab[j];
            tab[j] = temp;
        }
        return tab;
    }

    function logEvent(texte, couleur) {
        var p = document.createElement("p");
        p.textContent = texte;
        p.style.color = couleur || "#333";
        p.style.margin = "4px 0";
        eventLog.appendChild(p);
        eventLog.scrollTop = eventLog.scrollHeight;
    }

    function creerPlateau() {
        plateau.innerHTML = "";

        carte1 = null;
        carte2 = null;
        verrouille = false;
        tentatives = 0;
        paires = 0;

        spanTent.textContent = "0";
        spanPaires.textContent = "0";
        msgFin.textContent = "";

        eventLog.innerHTML = "<p><em>Cliquez sur une carte pour voir la propagation…</em></p>";

        cartes = [];

        for (var i = 0; i < marques.length; i++) {
            cartes.push({ nom: marques[i].nom });
            cartes.push({ nom: marques[i].nom });
        }

        cartes = melanger(cartes);

        for (var k = 0; k < cartes.length; k++) {
            var div = document.createElement("div");
            div.className = "memory-carte";
            div.dataset.nom = cartes[k].nom;
            div.dataset.index = k;
            div.textContent = "?";
            div.addEventListener("click", gererClic);
            plateau.appendChild(div);
        }
    }

    function gererClic(e) {
        if (verrouille) return;

        if (this.classList.contains("retournee") || this.classList.contains("trouvee")) return;

        if (this.dataset.index === "6") {
            e.stopPropagation();
            logEvent("stopPropagation() sur la carte index 6 : l'événement ne remonte pas.", "#e74c3c");
        }

        this.textContent = this.dataset.nom;
        this.classList.add("retournee");

        if (carte1 === null) {
            carte1 = this;
        } else {
            carte2 = this;
            verrouille = true;
            tentatives++;
            spanTent.textContent = tentatives;

            if (carte1.dataset.nom === carte2.dataset.nom) {
                carte1.classList.add("trouvee");
                carte2.classList.add("trouvee");

                paires++;
                spanPaires.textContent = paires;

                logEvent("Paire trouvée : " + carte1.dataset.nom, "#27ae60");

                carte1 = null;
                carte2 = null;
                verrouille = false;

                if (paires === marques.length) {
                    msgFin.textContent = "Bravo ! Toutes les paires ont été trouvées en " + tentatives + " tentatives.";
                    msgFin.style.color = "#27ae60";
                }

            } else {
                logEvent("Raté : " + carte1.dataset.nom + " n'est pas égal à " + carte2.dataset.nom, "#c0392b");

                setTimeout(function () {
                    carte1.textContent = "?";
                    carte2.textContent = "?";
                    carte1.classList.remove("retournee");
                    carte2.classList.remove("retournee");
                    carte1 = null;
                    carte2 = null;
                    verrouille = false;
                }, 900);
            }
        }
    }

    document.getElementById("zone-externe").addEventListener("click", function () {
        logEvent("Événement reçu par : zone-externe", "#2980b9");
    });

    document.getElementById("zone-milieu").addEventListener("click", function () {
        logEvent("Événement reçu par : zone-milieu", "#16a085");
    });

    document.getElementById("zone-interne").addEventListener("click", function () {
        logEvent("Événement reçu par : zone-interne", "#f39c12");
    });

    document.getElementById("btn-rejouer").addEventListener("click", function () {
        creerPlateau();
    });

    document.getElementById("btn-clear-log").addEventListener("click", function () {
        eventLog.innerHTML = "";
    });

    creerPlateau();
});