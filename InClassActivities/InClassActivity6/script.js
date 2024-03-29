document.addEventListener("DOMContentLoaded", function() {
const button = document.getElementById("button");
let level = 1;
let clicks = 0;
let timeout = 500;
let gameStarted = false;

button.style.marginTop = "10px";
button.style.marginLeft = "10px";

button.addEventListener("mouseover", () => {
    if (!gameStarted) {
        gameStarted = true;
        moveButton();
    }
});

button.addEventListener("click", () => {
    clicks++;
    if (clicks === 3) {
        level++;
        clicks = 0;
        if (level <= 6) {
            alert(`You are the winner! You can go next level ${level}!`);
            timeout -= 100;
        } else {
            alert(`Congratulations! You have completed all levels!`);
            timeout = 500;
        }
    }

    button.style.transform = "scale(1.3)";
    setTimeout(() => {
        button.style.transform = "scale(1)";
    }, 100);
});

function moveButton() {
    const maxWidth = window.innerWidth - button.offsetWidth;
    const maxHeight = window.innerHeight - button.offsetHeight;
    const randomLeft = Math.random() * maxWidth;
    const randomTop = Math.random() * maxHeight;
    
    button.style.marginLeft = randomLeft + "px";
    button.style.marginTop = randomTop + "px";

    setTimeout(moveButton, timeout);
}
});
