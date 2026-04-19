var zmiana_koloru = 0;

document.getElementById("zmienkolor").addEventListener("click", function() {
    if (zmiana_koloru == 0) {
        document.body.style.backgroundColor = "red";
        zmiana_koloru = 1;
    } else {
        document.body.style.backgroundColor = "green";
        zmiana_koloru = 0;
    }
});
document.getElementById("SchowajSekcje").addEventListener("click", function() {
    var sekcja = document.getElementById("projekty");

    if (sekcja.style.display === "none") {
        sekcja.style.display = "block";
    } else {
        sekcja.style.display = "none";
    }
});