function showContent() {
    var dropdown = document.getElementById("dropdown");
    var selectedValue = dropdown.value;
    var contents = document.getElementsByClassName("content");
    
    for (var i = 0; i < contents.length; i++) {
        contents[i].style.display = "none";
    }
    
    if (selectedValue) {
        var selectedContent = document.getElementById(selectedValue);
        selectedContent.style.display = "block";
    }
}

function showPopup(imageSrc) {
    var popup = document.getElementById("popup");
    var popupImage = document.getElementById("popupImage");
    var popupImage1 = document.getElementById("popupImage1");
    popupImage1.value = imageSrc;
   
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