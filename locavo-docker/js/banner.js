document.addEventListener("DOMContentLoaded", function () {

    var msg = document.getElementById("banniere-msg");

    if (!msg) return;

    function majBanniere() {
        var now = new Date();

        var dateStr = now.toLocaleDateString("fr-FR", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });

        var heureStr = now.toLocaleTimeString("fr-FR");

        msg.textContent =
            "Bienvenu au site web Locavo ! Aujourd'hui " +
            dateStr +
            ", et l'heure actuelle est " +
            heureStr;
    }

    majBanniere();

    setInterval(majBanniere, 1000);
});