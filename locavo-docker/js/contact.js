document.addEventListener("DOMContentLoaded", function () {

    var images = [
        { src: "../images/cabrio1.jpg", legende: "Mini Cooper Convertible" },
        { src: "../images/suv1.jpg",    legende: "Peugeot 3008" },
        { src: "../images/sport1.jpg",  legende: "Lamborghini SVJ" },
        { src: "../images/eco1.jpg",    legende: "Tesla Model Y" },
        { src: "../images/cabrio3.jpg", legende: "BMW Z4" }
    ];

    var indexImg = 0;

    var imgEl = document.getElementById("galerie-img");
    var legendeEl = document.getElementById("galerie-legende");

    if (!imgEl || !legendeEl) return;

    function imageSuivante() {
        indexImg++;

        if (indexImg >= images.length) indexImg = 0;

        imgEl.style.opacity = "0";

        setTimeout(function () {
            imgEl.src = images[indexImg].src;
            imgEl.alt = images[indexImg].legende;

            legendeEl.textContent =
                images[indexImg].legende +
                "  (" + (indexImg + 1) + " / " + images.length + ")";

            imgEl.style.opacity = "1";
        }, 400);
    }

    setInterval(imageSuivante, 4000);
});