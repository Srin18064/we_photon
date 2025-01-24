const form = document.getElementById('multiStepForm');
const steps = Array.from(form.querySelectorAll('.form-step'));
const progressBar = Array.from(form.querySelectorAll('.step'));

form.addEventListener('click', (e) => {
    if (e.target.matches('[data-next]')) {
        changeStep('next');
    } else if (e.target.matches('[data-prev]')) {
        changeStep('prev');
    }
});

function changeStep(direction) {
    let index = form.querySelector('.form-step-active');
    let stepIndex = steps.indexOf(index);

    steps[stepIndex].classList.remove('form-step-active');
    progressBar[stepIndex].classList.remove('active');

    if (direction === 'next') {
        stepIndex++;
    } else if (direction === 'prev') {
        stepIndex--;
    }

    steps[stepIndex].classList.add('form-step-active');
    progressBar[stepIndex].classList.add('active');
}


function updateValue() {
    const rangeInput = document.getElementById('rangeInput');
    const valueDisplay = document.getElementById('valueDisplay');
    valueDisplay.textContent = rangeInput.value;
}

// Optionally, you can dynamically update the min and max labels based on the input's attributes
window.onload = function() {
    const rangeInput = document.getElementById('rangeInput');
    document.getElementById('minValue').textContent = rangeInput.min;
    document.getElementById('maxValue').textContent = rangeInput.max;
}