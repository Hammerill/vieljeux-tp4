function marcheBtn()
{
    if (document.getElementById("machine_title").innerText === "La machine à café est arrêtée.") {
        document.getElementById("machine_title").innerText = "La machine à café est en marche.";
        document.getElementById("machine_button").value = "Arrêt";
    } else {
        document.getElementById("machine_title").innerText = "La machine à café est arrêtée.";
        document.getElementById("machine_button").value = "Marche";
    }
}