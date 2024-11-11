// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Voice Feedback on Button Click
function triggerVoiceFeedback(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

// Modal for Double-Tap Confirmation
function openModal(action) {
    const modal = document.getElementById("modal");
    const modalText = document.getElementById("modal-text");
    modalText.textContent = `Are you sure you want to open ${action}?`;
    modal.style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Confirm Action in Modal
function confirmAction() {
    alert("Action confirmed!");
    closeModal();
}

// Toggle Settings Menu
function toggleSettings() {
    const settings = document.getElementById("settings");
    settings.style.display = settings.style.display === "block" ? "none" : "block";
}

// Font Size Adjustment
function changeFontSize(size) {
    const container = document.querySelector(".container");
    container.classList.remove("large-font", "extra-large-font");
    if (size === "18px") {
        container.classList.add("large-font");
    } else if (size === "20px") {
        container.classList.add("extra-large-font");
    }
}

// Button Spacing Adjustment
function changeButtonSpacing(spacing) {
    const menu = document.querySelector(".menu");
    menu.classList.remove("button-spacing-medium", "button-spacing-wide");
    if (spacing === "medium") {
        menu.classList.add("button-spacing-medium");
    } else if (spacing === "wide") {
        menu.classList.add("button-spacing-wide");
    }
}
