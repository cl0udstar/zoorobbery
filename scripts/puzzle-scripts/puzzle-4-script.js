function changeColor(radio, color) {
    var container = radio.parentNode.querySelector('.water_wave');
    var route = radio.closest('.route');

    // Reset color for all containers within the same set
    var containersInSet = route.querySelectorAll('.water_wave');
    containersInSet.forEach(function(containerInSet) {
        containerInSet.style.backgroundColor = '';
        containerInSet.style.border = '';
    });

    // Set color for the selected container
    if (radio.checked) {
        container.style.backgroundColor = color;
        container.style.border = "2px solid";
    }
}


// Predefined sequence of checked radio buttons
const correctSequence = [
    ['route1-1'], 
    ['route2-2'], 
    ['route3-1'], 
    ['route4-1'], 
    ['route5-2'], 
    ['route6-2'], 
    ['route7-1', 'route7-2'], 
    ['route8-1'], 
    ['route9-2'], 
    ['route10-2']
];

var Q1Check = false;
var Q2Check = false;
var Q3Check = false;
var Q4Check = false;

// Function to check the sequence of checked radio buttons
function checkSequence() {
    var checkedButtons = document.querySelectorAll('.results input[type="radio"]:checked');
    var checkedIds = Array.from(checkedButtons).map(button => button.id);

    var correct = true;
    var correctCheckedButtons = []; // Array to store IDs of correct checked buttons
    var wrongCheckedButtons = []; // Array to store IDs of wrong checked buttons
    for (var i = 0; i < correctSequence.length; i++) {
        
        var correctSet = correctSequence[i];

        var isChecked = false;
        for (var j = 0; j < correctSet.length; j++) {
            if (checkedIds.includes(correctSet[j])) {
                isChecked = true;
                correctCheckedButtons.push(correctSet[j]); // Store ID of correct checked button
                var container = document.getElementById('ww_' + correctSet[j]);
                container.style.backgroundColor = 'green'; // Set background color to green for correct checked buttons
            }
        }
        if (!isChecked) {
            correct = false;
        }
    }

    var result = document.getElementById("result");
    if (correct) {
        Q4Check = true;
        checkCompletion();
        
        result.textContent = "Well done, Agent! You've successfully plotted the safest route through the geomagnetic fields to reach the main Peelywally Crystal deposit site at Crystal Mountain. Your careful planning will protect the explorer buggy's electronics. Excellent work!";
        result.style.color = "green";
    } else {
        result.textContent = "Alert, Agent! The plotted route does not appear to be the safest path through the geomagnetic fields. The buggy's electronics are at risk. Let's reassess the data and find the correct route to ensure a safe journey to the Peelywally Crystal deposit site.";
        result.style.color = "red";
    }
    result.style.display = "block";

    // Display IDs of correct checked buttons (for testing)
    wrongCheckedButtons = checkedIds.filter(value => !correctCheckedButtons.includes(value));

    for (var i = 0; i < wrongCheckedButtons.length; i++) {
        var container = document.getElementById('ww_' + wrongCheckedButtons[i]);
        container.style.backgroundColor = 'red'; // Set background color to green for correct checked buttons
    }
}




// First Question
var keyInputQ1 = document.getElementById("userAnswerQ1");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

function checkAnswerQ1() {
    var userAnswer = document.getElementById("userAnswerQ1").value.trim().toLowerCase();
    var result = document.getElementById("result1");

    if (userAnswer === "beta") {
        Q1Check = true;
        checkCompletion();
        
        result.textContent = "Excellent work, Agent! You've correctly identified the product range with the highest mean strength. Your analytical skills are top-notch!";
        result.style.color = "green";
        keyInputQ1.disabled = true;
        keyInputQ1.style.background = "#C8E4B2";
    } else {
        result.textContent = "Alert, Agent! The selected product range does not have the highest mean strength. Let's review the data and find the true leader. Your mission continues! (Hint lowest negative value)";
        result.style.color = "red";
        keyInputQ1.style.background = "#FF7676";
    }
    result.style.display = "block";
}


// Second Question
var keyInputQ2 = document.getElementById("userAnswerQ2");
keyInputQ2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q2").click();
    }
});

function checkAnswerQ2() {
    var userAnswer = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
    var result = document.getElementById("result2");

    if (userAnswer === "45" || userAnswer === "fortyfive" || userAnswer === "forty five" || userAnswer === "forty-five") {
        Q2Check = true;
        checkCompletion();
        
        result.textContent = "Outstanding, Agent! You've accurately calculated the difference between the lowest and highest Alpha values. Your precision is impressive!";
        result.style.color = "green";
        keyInputQ2.disabled = true;
        keyInputQ2.style.background = "#C8E4B2";
    } else {
        result.textContent = "Attention, Agent! The difference between the lowest and highest Alpha values seems incorrect. Let's re-evaluate the data to find the accurate range. Keep pushing forward!";
        result.style.color = "red";
        keyInputQ2.style.background = "#FF7676";
    }
    result.style.display = "block";
}


// Third Question
var keyInputQ3 = document.getElementById("userAnswerQ3");
keyInputQ3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q3").click();
    }
});

function checkAnswerQ3() {
    var userAnswer = document.getElementById("userAnswerQ3").value.trim().toLowerCase();
    var result = document.getElementById("result3");

    if (userAnswer === "headquarters") {
        Q3Check = true;
        checkCompletion();
        
        result.textContent = "Fantastic, Agent! You've correctly pinpointed the location where the difference between Alpha and Beta is the greatest. Your sharp analysis is commendable!";
        result.style.color = "green";
        keyInputQ3.disabled = true;
        keyInputQ3.style.background = "#C8E4B2";
    } else {
        result.textContent = "Agent! The identified location does not have the greatest difference between Alpha and Beta. Let's re-examine the data and find the correct location. Your mission is not yet complete!";
        result.style.color = "red";
        keyInputQ3.style.background = "#FF7676";
    }
    result.style.display = "block";
}

function checkCompletion() {
    if (Q1Check && Q2Check && Q3Check && Q4Check) {
        setPuzzleCompletionStatus(4, 'complete');
        var nextPuzzle = document.getElementById("next-puzzle");
        nextPuzzle.style.display = "block";
    }
} 
