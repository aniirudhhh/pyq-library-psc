// script.js

// Get all the FAQ questions
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const toggleButton = item.querySelector(".toggle");
  const answer = item.querySelector(".faq-answer");

  // Add a click event to toggle the visibility of the answer
  toggleButton.addEventListener("click", () => {
    if (answer.style.display === "block") {
      answer.style.display = "none";
      toggleButton.textContent = "+";
    } else {
      answer.style.display = "block";
      toggleButton.textContent = "-";
    }
  });
});
document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
  alert("Right-click is disabled on this website! 😣");
});

document.addEventListener("keydown", function (event) {
  if (
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I")
  ) {
    event.preventDefault();
    alert("Sorry Bruh! 😣 Developer tools are disabled on this site.");
  }
});
