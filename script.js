const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll smoothly to the top
backToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});