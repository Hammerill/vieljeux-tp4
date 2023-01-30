function btnOk()
{
    if (document.getElementById("frame_affichage").style.display === "none") {
        document.getElementById("frame_affichage").style.display = "block";
    } else {
        document.getElementById("frame_affichage").style.display = "none";
    }
}