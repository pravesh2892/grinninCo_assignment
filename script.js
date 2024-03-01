let currentStep = 1;
let userData = {};

function startOnboarding() {
    const welcomeContainer = document.getElementById('welcome-container');
    const onboardingContainer = document.getElementById('onboarding-container');

    welcomeContainer.style.display = 'none';
    onboardingContainer.style.display = 'flex';
}

function nextStep() {
    const currentStepElement = document.getElementById(`step${currentStep}`);
   
    if (currentStep === 1) {
        const userNameInput = document.getElementById('user-name');
        const userEmailInput = document.getElementById('user-email');
        const userFitnessGoal = document.querySelector('input[name="fitnessGoal"]:checked');
        const userExerciseLevel = document.querySelector('input[name="ExerciseLevel"]:checked');
        const userName = userNameInput.value;
        const userEmail = userEmailInput.value;

        userNameInput.style.border = '';
        userEmailInput.style.border = '';

        if (!userName || !userEmail || !userFitnessGoal || !userExerciseLevel) {
            if (!userName) {
                userNameInput.style.border = '2px solid red';
            }
            if (!userEmail) {
                userEmailInput.style.border = '2px solid red';
            }
            return; 
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(userEmail)) {
            userEmailInput.style.border = '2px solid red';
            return;
        }

        userData['name'] = userName;
        userData['email'] = userEmail;
        userData['fitnessGoal'] = userFitnessGoal.value;
        userData['exerciseLevel'] = userExerciseLevel.value;
    }

    if (currentStep === 2) {
        userData['exerciseTypes'] = [];
        const checkboxes = document.querySelectorAll('input[name="exercise"]:checked');
        checkboxes.forEach((checkbox) => {
            userData['exerciseTypes'].push(checkbox.value);
        });

        const workoutDuration = document.querySelector('input[name="duration"]:checked');
        const preferredTime = document.querySelector('input[name="time"]:checked');

        userData['workoutDuration'] = workoutDuration ? workoutDuration.value : '';
        userData['preferredTime'] = preferredTime ? preferredTime.value : '';
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
 
    userData['age'] = document.getElementById('user-age').value;
    userData['weight'] = document.getElementById('user-weight').value;
    userData['height'] = document.getElementById('user-Height').value;

    const weightGoal = document.querySelector('input[name="weightGoal"]:checked');
    userData['weightGoal'] = weightGoal ? weightGoal.value : '';

    const jsonData = JSON.stringify(userData);
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'user_data.json';
    link.click();
  
    const confirmationMessage = document.getElementById('confirmation-message');
    if (window.innerWidth > 600) {
        confirmationMessage.innerHTML = '<p>Congratulations! Your personalized fitness plan is ready to go.</p>';
        confirmationMessage.style.display = 'block';
    } else {
      
        confirmationMessage.style.display = 'none';
    }

    
}


function typeEffect() {
    var text = "Welcome to our Innovative Fitness";
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



