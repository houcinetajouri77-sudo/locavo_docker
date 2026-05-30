function Tarif(categorie, jour1, jour3, semaine, mois, modeles) {
    this.categorie = categorie;
    this.jour1     = jour1;
    this.jour3     = jour3;
    this.semaine   = semaine;
    this.mois      = mois;
    this.modeles   = modeles;
}

var tarifs = [
    new Tarif("Économique", 90, 250, 530, 1700, "Hyundai Ioniq 6, Renault 5 E-TECH, Tesla Model Y"),
    new Tarif("SUV", 180, 500, 1100, 3400, "Peugeot 3008, Mercedes-Benz GLS, Lamborghini URUS"),
    new Tarif("Cabriolet", 250, 680, 1550, 5000, "Mini Cooper, Mazda MX-5, BMW Z4"),
    new Tarif("Sport", 620, 1700, 3700, 12500, "Ferrari SF90, Aston-Martin Vantage, Lamborghini SVJ")
];

function afficherTarifs(liste) {
    var tbody = document.getElementById("tarif-body");
    tbody.innerHTML = "";

    for (var i = 0; i < liste.length; i++) {
        var tr = document.createElement("tr");

        var tdCat = document.createElement("td");
        tdCat.textContent = liste[i].categorie;
        tdCat.className = "category-cell";
        tr.appendChild(tdCat);

        var prix = [liste[i].jour1, liste[i].jour3, liste[i].semaine, liste[i].mois];

        for (var j = 0; j < prix.length; j++) {
            var td = document.createElement("td");
            td.textContent = prix[j] + " DT";
            td.className = "price";
            tr.appendChild(td);
        }

        var tdMod = document.createElement("td");
        tdMod.innerHTML = "<em>" + liste[i].modeles + "</em>";
        tr.appendChild(tdMod);

        tbody.appendChild(tr);
    }
}

function ajouterTarif(categorie, jour1, jour3, semaine, mois, modeles) {
    var nouveau = new Tarif(categorie, jour1, jour3, semaine, mois, modeles);
    tarifs.push(nouveau);
    afficherTarifs(tarifs);
}

function rechercherTarif(motCle) {
    var resultats = [];
    var mot = motCle.toLowerCase();

    for (var i = 0; i < tarifs.length; i++) {
        if (tarifs[i].categorie.toLowerCase().indexOf(mot) !== -1 ||
            tarifs[i].modeles.toLowerCase().indexOf(mot) !== -1) {
            resultats.push(tarifs[i]);
        }
    }

    return resultats;
}

document.addEventListener("DOMContentLoaded", function () {
    afficherTarifs(tarifs);

    document.getElementById("form-ajout").addEventListener("submit", function (e) {
        e.preventDefault();

        var cat = document.getElementById("add-categorie").value.trim();
        var j1  = parseInt(document.getElementById("add-jour1").value);
        var j3  = parseInt(document.getElementById("add-jour3").value);
        var sem = parseInt(document.getElementById("add-semaine").value);
        var mo  = parseInt(document.getElementById("add-mois").value);
        var mod = document.getElementById("add-modeles").value.trim();

        ajouterTarif(cat, j1, j3, sem, mo, mod);

        var msg = document.getElementById("msg-ajout");
        msg.textContent = "Catégorie " + cat + " ajoutée !";
        msg.style.color = "#27ae60";

        this.reset();
    });

    document.getElementById("form-recherche").addEventListener("submit", function (e) {
        e.preventDefault();

        var mot = document.getElementById("search-mot").value.trim();
        var msg = document.getElementById("msg-recherche");

        if (mot === "") {
            afficherTarifs(tarifs);
            msg.textContent = "";
            return;
        }

        var resultats = rechercherTarif(mot);
        afficherTarifs(resultats);

        if (resultats.length > 0) {
            msg.textContent = resultats.length + " résultat(s) pour " + mot + ".";
            msg.style.color = "#0e6fa5";
        } else {
            msg.textContent = "Aucun résultat pour " + mot + ".";
            msg.style.color = "#c0392b";
        }
    });

    document.getElementById("btn-tout").addEventListener("click", function () {
        afficherTarifs(tarifs);
        document.getElementById("msg-recherche").textContent = "";
        document.getElementById("search-mot").value = "";
    });
});