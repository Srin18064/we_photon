

function showPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");
    var site = document.getElementById("site");
    site.value = imageSrc;
   
    popupImage.src = imageSrc;
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function selectImage() {
    alert("Image selected!");
    closePopup();
}



function disableRightClick(event) {
    if (event.button == 2) {
        event.preventDefault();
        alert("Right click disabled.");
        return false;
    }
}
document.addEventListener('contextmenu', disableRightClick);
