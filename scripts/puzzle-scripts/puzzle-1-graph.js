var Q1Check = false;
var Q2Check = false;
var Q3Check = false;
var Q4Check = false;

// First Question
var keyInputQ1 = document.getElementById("userAnswerQ1");
keyInputQ1.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var keyInputQ2 = document.getElementById("userAnswerQ2");
keyInputQ2.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var keyInputQ3 = document.getElementById("userAnswerQ3");
keyInputQ3.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var keyInputQ4 = document.getElementById("userAnswerQ4");
keyInputQ4.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("check-q1").click();
    }
});

var nextPuzzle = document.getElementById("next-puzzle");

function checkAnswerQ1() {
    var userAnswer1 = document.getElementById("userAnswerQ1").value.trim().toLowerCase();
    var userAnswer2 = document.getElementById("userAnswerQ2").value.trim().toLowerCase();
    var userAnswer3 = document.getElementById("userAnswerQ3").value.trim().toLowerCase();
    var userAnswer4 = document.getElementById("userAnswerQ4").value.trim().toLowerCase();
    var result = document.getElementById("result1");

    if (userAnswer1.trim().toLowerCase() === "emperorpenguin" && userAnswer2.trim().toLowerCase() === "dwarfcrocodile" && userAnswer3.trim().toLowerCase() === "tarantulaspider" && userAnswer4.trim().toLowerCase() === "emperorpenguin"){
        Q1Check = true;
        Q2Check = true;
        Q3Check = true;
        Q4Check = true;

        checkCompletion();

        result.textContent = "Agent, your skills are so sharp, even the Vikings would admire your craftiness.";
        result.style.color = "green";
        nextPuzzle.style.display = "block";

        var keyInputs = [keyInputQ1, keyInputQ2, keyInputQ3, keyInputQ4];

        for (var i = 0; i < keyInputs.length; i++) {
            // Disable the input
            keyInputs[i].disabled = true;
            // Change the background color
            keyInputs[i].style.background = "#C8E4B2";
        }
    } else {
        if (userAnswer1.trim().toLowerCase() === "emperorpenguin") {
            Q1Check = true;

            keyInputQ1.disabled = true;
            keyInputQ1.style.background = "#C8E4B2";
        } else {
            keyInputQ1.style.background = "#FF7676";
        }

        if (userAnswer2.trim().toLowerCase() === "dwarfcrocodile") {
            Q2Check = true;

            keyInputQ2.disabled = true;
            keyInputQ2.style.background = "#C8E4B2";
        } else {
            keyInputQ2.style.background = "#FF7676";
        }

        if (userAnswer3.trim().toLowerCase() === "tarantulaspider") {
            Q3Check = true;

            keyInputQ3.disabled = true;
            keyInputQ3.style.background = "#C8E4B2";
        } else {
            keyInputQ3.style.background = "#FF7676";
        }

        if (userAnswer4.trim().toLowerCase() === "emperorpenguin") {
            Q3Check = true;

            keyInputQ4.disabled = true;
            keyInputQ4.style.background = "#C8E4B2";
        } else {
            keyInputQ4.style.background = "#FF7676";
        }

        result.textContent = "Agent, it seems one of the sensors has failed. Time for damage control!";
        result.style.color = "red";
    }
    result.style.display = "block";
}

function checkCompletion() {
    if (Q1Check && Q2Check && Q3Check && Q4Check) {
        setPuzzleCompletionStatus(1, 'complete');
    }
}
