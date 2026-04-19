document.getElementById("formularz").addEventListener("submit", function(e) {
    e.preventDefault();

    var imie = document.getElementById("imie").value;
    var nazwisko = document.getElementById("nazwisko").value;
    var email = document.getElementById("email").value;
    var wiadomosc = document.getElementById("wiadomosc").value;

    document.getElementById("blad_imie").innerText = "";
    document.getElementById("blad_nazwisko").innerText = "";
    document.getElementById("blad_email").innerText = "";
    document.getElementById("blad_wiadomosc").innerText = "";
    document.getElementById("sukces").innerText = "";

    var ok = true;

    if (imie === "") {
        document.getElementById("blad_imie").innerText = "Podaj imie";
        ok = false;
    }

    if (nazwisko === "") {
        document.getElementById("blad_nazwisko").innerText = "Podaj nazwisko";
        ok = false;
    }

    if (email === "") {
        document.getElementById("blad_email").innerText = "Podaj email";
        ok = false;
    }

    if (wiadomosc === "") {
        document.getElementById("blad_wiadomosc").innerText = "Podaj wiadomosc";
        ok = false;
    }

    // tylko sprawdzenie czy jest @
    if (email !== "" && email.indexOf("@") === -1) {
        document.getElementById("blad_email").innerText = "Email musi zawierac @";
        ok = false;
    }

    // imie i nazwisko bez cyfr (bez regexa)
    for (var i = 0; i < imie.length; i++) {
        if (imie[i] >= '0' && imie[i] <= '9') {
            document.getElementById("blad_imie").innerText = "Imie bez cyfr";
            ok = false;
            break;
        }
    }

    for (var i = 0; i < nazwisko.length; i++) {
        if (nazwisko[i] >= '0' && nazwisko[i] <= '9') {
            document.getElementById("blad_nazwisko").innerText = "Nazwisko bez cyfr";
            ok = false;
            break;
        }
    }

    if (ok) {
        document.getElementById("sukces").innerText = "OK";
    }
});