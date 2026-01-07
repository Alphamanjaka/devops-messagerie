let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function showSlide(n) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Navigation au clavier
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && currentSlide > 0) {
    changeSlide(-1);
  } else if (e.key === "ArrowRight" && currentSlide < slides.length - 1) {
    changeSlide(1);
  }
});

// Initialisation
showSlide(0);
