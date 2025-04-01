const typingText = document.querySelector(".typing-text");
const words = ["Frontend Developer", "Software Tester Enthusiast", ]
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let typingSpeed = 150;

function type() {
    if (letterIndex < words[wordIndex].length) {
        currentWord += words[wordIndex][letterIndex];
        typingText.textContent = currentWord;
        letterIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    if (letterIndex > 0) {
        currentWord = currentWord.slice(0, -1);
        typingText.textContent = currentWord;
        letterIndex--;
        setTimeout(erase, typingSpeed / 2);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(type, typingSpeed);
    }
}
/*.......*/
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 1000);
});
document.addEventListener("DOMContentLoaded", function() {
    const circles = document.querySelectorAll(".circle");

    circles.forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        let degree = (percent / 100) * 360;
        circle.style.background = `conic-gradient(cyan ${degree}deg, #333 ${degree}deg)`;
    });
});
