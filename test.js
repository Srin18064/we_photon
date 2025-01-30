let nameStarted = false;

function validateForm() {
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mobile').value;
    var dropdown = document.getElementById('dropdown');
    
    dropdown.disabled = (name === "" || mail === "" || mail.length !== 10);

    if (dropdown.disabled) {
        dropdown.style.backgroundColor = 'gray';
        dropdown.style.color = 'white';
        
    }
    else {
        dropdown.style.backgroundColor = 'white';
        dropdown.style.color = 'black';
    }
}

function handleNameInput() {
    if (!nameStarted) {
        nameStarted = true;
        setTimeout(function() {
            document.getElementById('mail').focus();
        }, 30000); // 30 seconds
    }
    validateForm();
    
}

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

function confirmSubmission(event) {
    event.preventDefault(); // Prevent the form from submitting immediately
    if (confirm("Are you sure you want to submit the form?")) {
        document.getElementById("multiStepForm").submit(); // If confirmed, submit the form
    }
}

function disableRightClick(event) {
    if (event.button == 2) {
        event.preventDefault();
        alert("Right click disabled.");
        return false;
    }
}
document.addEventListener('contextmenu', disableRightClick);
