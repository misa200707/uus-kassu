// JavaScript ajastimelle
const countdownElement = document.getElementById('countdown');
const countdownTime = 24 * 60 * 60 * 1000; // 24 tuntia millisekunneissa
let endTime = new Date().getTime() + countdownTime;

function updateCountdown() {
    let now = new Date().getTime();
    let timeLeft = endTime - now;

    if (timeLeft < 0) {
        endTime = new Date().getTime() + countdownTime;
        timeLeft = countdownTime;
    }

    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    countdownElement.innerHTML = hours + "h " + minutes + "m " + seconds + "s ";
}

setInterval(updateCountdown, 1000);
