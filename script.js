function toggleNav() {
  const navLinks = document.querySelector(".nav-hero-links");
  navLinks.classList.toggle("active");

  const icon = document.querySelector(".toggleNav a i");
  if (navLinks.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
  }
}
