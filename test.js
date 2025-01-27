function nextStep(step) {
    var currentStep = document.getElementById('step-' + step);
    var nextStep = document.getElementById('step-' + (step + 1));
    if (validateStep(step)) {
        currentStep.classList.remove('active');
        nextStep.classList.add('active');
        updateProgress(step + 1);
    }
}

function previousStep(step) {
    var currentStep = document.getElementById('step-' + (step + 1));
    var previousStep = document.getElementById('step-' + step);
    currentStep.classList.remove('active');
    previousStep.classList.add('active');
    updateProgress(step);
}

function validateStep(step) {
    var valid = true;
    if (step === 1) {
        var brandName = document.getElementById('brand-name').value;
        var brandAge = document.getElementById('brandAge').value;
        if (brandName === '') {
            valid = false;
            // brandName = alert('Please fill out the brand name.');
            document.getElementById('brand-name').focus();

        }
        else if (brandAge === '') {
            valid = false;
            document.getElementById('brandAge').focus();
        }
    } else if (step === 2) {
        var personalName = document.getElementById('personal-name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var lastName = document.getElementById('lastName').value;
        if (personalName === '' ) {
            valid = false;
            document.getElementById('personal-name').focus();
        }
        else if (lastName === '') {
            valid = false;
            document.getElementById('lastName').focus();
        }
        else if (email === '') {
            valid = false;
            document.getElementById('email').focus();
        }
        else if (phone === '') {
            valid = false;
            document.getElementById('phone').focus();
        }
    } else if (step === 3) {
        var checkboxes = document.getElementsByName('checklist1');
        var checked = Array.prototype.slice.call(checkboxes).some(x => x.checked);
        if (!checked) {
            valid = false;
            alert('Please select your Brand Category.');
        }
    }
    return valid;
}

function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('checklist');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false;
    });
}

function submitForm() {
    var message = document.getElementById('message').value;
    if (message === '') {
        alert('Please fill out the message.');
        return;
    }
    alert('Form submitted successfully!');
}


function updateProgress(step) {
    var progressBars = document.querySelectorAll('.progress-bar div');
    progressBars.forEach((bar, index) => {
        if (index < step) {
            bar.classList.add('active');
        } else {
            bar.classList.remove('active');
        }
    });
}

document.getElementById('image').addEventListener('click', function() { 
document.getElementById('imageCheckboxList').style.display = 'block'; 
document.getElementById('videoCheckboxList').style.display = 'none'; 
}); 
document.getElementById('video').addEventListener('click', function() { 
    document.getElementById('imageCheckboxList').style.display = 'none';
    document.getElementById('videoCheckboxList').style.display = 'block'; 
    }
);