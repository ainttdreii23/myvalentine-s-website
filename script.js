const messages = [
    "Are you sure, bebu?",
    "Really sure, bebu?",
    "Just think about it first, bebu!",
    "If you say no, I will be really sad po...",
    "I will be very sad...",
    "I will be very very very sad...",
    "say yes please! i'm cry cry na po, bebu...",
    "say yes please! I love you so muchh, bebu ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}