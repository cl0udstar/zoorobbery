const div = document.querySelector(".home-text");
const text1 = "It's Commander Sheonagh MacDonald from the Scottish Space Agency in the year 2052 and we need your help to bring our team of space explorers back from the Plant BRAW5 in the Fearty Galaxy.";
const text2 = "Our intrepid explorers have ventured further than any other humans to look for Peelywally Crystals which will triple our renewable energy supplies in Scotland.";
const text3 = "However, whilst doing that, they have run into danger and need you to help them to get home safely";
const text4 = "You will complete sever missions which will bring them back to splashdown in the North Sea, just off St Andrews.";

let text1Finished = false;
let text2Finished = false;
let text3Finished = false;
let text4Finished = false;

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
                        });
                    }
                });
            }
        });
    }
});
