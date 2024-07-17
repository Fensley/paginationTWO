document.addEventListener("DOMContentLoaded", () => {
  const numbers = document.querySelectorAll(".number h1");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentIndex = 2; // Start at 3 (index 2)

  const updateHighlight = () => {
    numbers.forEach((number, index) => {
      number.classList.toggle("four", index === currentIndex);
    });
  };

  // Initialize the highlight on page load.
  updateHighlight();

  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateHighlight();
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < numbers.length - 1) {
      currentIndex++;
      updateHighlight();
    }
  });
});
