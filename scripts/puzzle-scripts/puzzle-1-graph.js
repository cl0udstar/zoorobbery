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

    if (userAnswer1.trim().toLowerCase() === "emperor penguin" && userAnswer2.trim().toLowerCase() === "dwarf crocodile" && userAnswer3.trim().toLowerCase() === "tarantula spider" && userAnswer4.trim().toLowerCase() === "emperor penguin"){
        Q1Check = true;
        Q2Check = true;
        Q3Check = true;
        Q4Check = true;

        checkCompletion();

        result.textContent = "Excellent deduction, Agent! Based on the given clues, you've correctly identified the stolen animal. Your investigative skills are exceptional!";
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
        if (userAnswer1.trim().toLowerCase() === "emperor penguin") {
            Q1Check = true;

            keyInputQ1.disabled = true;
            keyInputQ1.style.background = "#C8E4B2";
        } else {
            keyInputQ1.style.background = "#FF7676";
        }

        if (userAnswer2.trim().toLowerCase() === "dwarf crocodile") {
            Q2Check = true;

            keyInputQ2.disabled = true;
            keyInputQ2.style.background = "#C8E4B2";
        } else {
            keyInputQ2.style.background = "#FF7676";
        }

        if (userAnswer3.trim().toLowerCase() === "tarantula spider") {
            Q3Check = true;

            keyInputQ3.disabled = true;
            keyInputQ3.style.background = "#C8E4B2";
        } else {
            keyInputQ3.style.background = "#FF7676";
        }

        if (userAnswer4.trim().toLowerCase() === "emperor penguin") {
            Q3Check = true;

            keyInputQ4.disabled = true;
            keyInputQ4.style.background = "#C8E4B2";
        } else {
            keyInputQ4.style.background = "#FF7676";
        }

        result.textContent = "Uh-oh, Agent! That doesn't seem to be the right animal. Let's re-evaluate the clues and make sure we identify the correct one for a successful mission!";
        result.style.color = "red";
    }
    result.style.display = "block";
}

function checkCompletion() {
    if (Q1Check && Q2Check && Q3Check && Q4Check) {
        setPuzzleCompletionStatus(1, 'complete');
    }
}
