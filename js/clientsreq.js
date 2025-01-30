let currentStep = 1;
let primaryColor1 = document.querySelector('#primaryColor1');


primaryColor1.addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--primary-color', e.target.value);
});

function showStep(step) {
    document.querySelectorAll('fieldset').forEach((fieldset, index) => {
        if (index + 1 === step) {
            fieldset.classList.add('active');
        } else {
            fieldset.classList.remove('active');
        }
    });
    updateProgressBar(step);
}

function nextStep(step) {
    showStep(step + 1);
}

function previousStep(step) {
    showStep(step - 1);
}

function updateProgressBar(step) {
    const percentage = (step / 4) * 100;
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percentage + '%';
    progressBar.textContent = 'Step ' + step + ' of 4';
}

// Initialize the first step
showStep(currentStep);

function disableRightClick(event) {
    if (event.button == 2) {
        event.preventDefault();
        alert("Right click disabled.");
        return false;
    }
}
document.addEventListener('contextmenu', disableRightClick);

