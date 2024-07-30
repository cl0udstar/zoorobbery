const div = document.querySelector(".home-text");
const text1 = "Detective, we have a serious emergency in our midst!";
const text2 = "Our newest and most valuable animal has been stolen from the zoo, and we need you to solve the mystery and bring him home. As a seasoned investigator, your exceptional skills in data analysis and problem solving are crucial to cracking this case.";
const text3 = "Your mission is vital. The theft has caused widespread panic, and the zoo's prized possession is at risk. You must gather clues, analyse data, and track down the thief to recover the stolen animal.";
const text4 = "This will not be an easy mission - we need a dedicated team of detectives who can interpret data precisely. We cannot let on to the thief we are on his tail, through fear he will hurt our prized possession! We know you have experience in decoding, mapping, and problem solving. You will need to pull on every skill in your repertoire for this one!";
const text5 = "Good luck, Detective. The health and wellbeing of a scared animal depends on you!";

let text1Finished = false;
let text2Finished = false;
let text3Finished = false;
let text4Finished = false;
let text5Finished = false;

function textTypingEffect(element, text, i = 0, callback = null) {
    element.innerHTML += text[i];

    // If the end of the string is reached
    if (i === text.length - 1) {
        element.innerHTML += "<br><br>";
        if (callback) {
            callback();
        }
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1, callback), 45);
}

textTypingEffect(div, text1, 0, function() {
    text1Finished = true;
    console.log(text1Finished);

    if (text1Finished) {
        textTypingEffect(div, text2, 0, function() {
            text2Finished = true;
            console.log(text2Finished);

            if (text2Finished) {
                textTypingEffect(div, text3, 0, function() {
                    text3Finished = true;
                    console.log(text3Finished);

                    if (text3Finished) {
                        textTypingEffect(div, text4, 0, function() {
                            text4Finished = true;
                            console.log(text4Finished);

                            if (text4Finished) {
                                textTypingEffect(div, text5, 0, function() {
                                    text5Finished = true;
                                    console.log(text5Finished);
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});
