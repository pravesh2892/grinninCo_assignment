let currentStep = 1;
let userData = {};

function nextStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);

   
    if (currentStep === 1) {
        const userNameInput = document.getElementById('user-name');
        const userEmailInput = document.getElementById('user-email');

        const userName = userNameInput.value;
        const userEmail = userEmailInput.value;

       
        userNameInput.style.border = '';
        userEmailInput.style.border = '';

        if (!userName || !userEmail) {
            
            if (!userName) {
                userNameInput.style.border = '2px solid red';
            }
            if (!userEmail) {
                userEmailInput.style.border = '2px solid red';
            }
            return; 
        }
    }

    currentStepElement.classList.remove('active-step');
    currentStep++;

    if (currentStep > 3) {
        currentStep = 3;
    }

    const nextStepElement = document.getElementById(`step${currentStep}`);
    nextStepElement.classList.add('active-step');
}




function submitForm() {
 
    userData['name'] = document.getElementById('user-name').value;
    userData['email'] = document.getElementById('user-email').value;

   
    userData['exerciseTypes'] = [];
    const checkboxes = document.querySelectorAll('input[name="exercise"]:checked');
    checkboxes.forEach((checkbox) => {
        userData['exerciseTypes'].push(checkbox.value);
    });

    userData['weightGoals'] = document.getElementById('weight-goals').value;

    const jsonData = JSON.stringify(userData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'user_data.json';
    link.click();

    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.innerHTML = '<p>Thank you for providing your information!</p>';
    confirmationMessage.style.display = 'block';
}

function typeEffect() {
    var text = "Welcome to our Fitness Service!";
    var header = document.getElementById("header-text");
    var index = 0;

    function type() {
        if (index < text.length) {
            header.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100); 
        }
    }

    type();
}

window.onload = typeEffect;



