// Function to toggle the menu visibility
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to open a profile in a new tab/window
function openProfile(url) {
  window.open(url, '_blank');
}

// Function to toggle the visibility of a list
function toggleList() {
  const listContainer = document.getElementById("listContainer");
  listContainer.style.display = listContainer.style.display === "block" ? "none" : "block";
}

// Hide the list on initial load (to ensure it's hidden on mobile)
document.addEventListener("DOMContentLoaded", function() {
  const listContainer = document.getElementById("listContainer");
  listContainer.style.display = "none";
});

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Carousel functionality
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const certificateSlides = document.querySelectorAll('.certificate-slide');
const slideIndicatorsContainer = document.querySelector('.slide-indicators');

let currentIndex = 0;
const slideWidth = certificateSlides[0].offsetWidth;

// Function to show a slide at the specified index
function showSlide(index) {
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
  updateSlideIndicators(index);
}

// Function to show the next slide
function showNextSlide() {
  currentIndex++;
  if (currentIndex >= certificateSlides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Function to show the previous slide
function showPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = certificateSlides.length - 1;
  }
  showSlide(currentIndex);
}

// Function to update the slide indicators
function updateSlideIndicators(currentIndex) {
  const slideIndicators = document.querySelectorAll('.slide-indicator');
  slideIndicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Event listeners for carousel navigation
nextBtn.addEventListener('click', showNextSlide);
prevBtn.addEventListener('click', showPrevSlide);

// Auto loop the carousel
let intervalId;

function startAutoLoop() {
  intervalId = setInterval(showNextSlide, 3000);
}

function stopAutoLoop() {
  clearInterval(intervalId);
}

startAutoLoop();

// Pause auto loop on hover
carousel.addEventListener('mouseenter', stopAutoLoop);
carousel.addEventListener('mouseleave', startAutoLoop);

// Create slide indicators and add event listeners
certificateSlides.forEach((_, index) => {
  const indicator = document.createElement('div');
  indicator.classList.add('slide-indicator');
  indicator.addEventListener('click', () => showSlide(index));
  slideIndicatorsContainer.appendChild(indicator);
});

// Show the initial slide indicator
updateSlideIndicators(currentIndex);

// Touch swipe functionality for mobile devices
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const SWIPE_THRESHOLD = 50;
  const deltaX = touchEndX - touchStartX;

  if (deltaX > SWIPE_THRESHOLD) {
    // Swiped left to right (previous)
    showPrevSlide();
  } else if (deltaX < -SWIPE_THRESHOLD) {
    // Swiped right to left (next)
    showNextSlide();
  }
}

// Function to pause the auto loop
function pauseAutoLoop() {
  stopAutoLoop();
}

// Function to resume the auto loop
function resumeAutoLoop() {
  startAutoLoop();
}

// Pause auto loop when touch starts
certificateSlides.forEach(slide => {
  slide.addEventListener('touchstart', pauseAutoLoop);
});

// Resume auto loop when touch ends
certificateSlides.forEach(slide => {
  slide.addEventListener('touchend', resumeAutoLoop);
});

// Function to handle navigation bar and back-to-top button behavior
document.addEventListener("DOMContentLoaded", function () {
  const desktopNav = document.getElementById("desktop-nav");
  const hamburgerNav = document.getElementById("hamburger-nav");
  const backToTopButton = document.getElementById("back-to-top");

  let prevScrollPos = window.pageYOffset;

// Function to show or hide the nav bars based on scroll direction
function toggleNavVisibility() {
  const currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    desktopNav.classList.remove("nav-hidden");
    desktopNav.classList.add("nav-visible");
    hamburgerNav.classList.remove("nav-hidden");
    hamburgerNav.classList.add("nav-visible");
    } else {
    desktopNav.classList.remove("nav-visible");
    desktopNav.classList.add("nav-hidden");
    hamburgerNav.classList.remove("nav-visible");
    hamburgerNav.classList.add("nav-hidden");
    }
    prevScrollPos = currentScrollPos;

// Show or hide the back to top button based on scroll position
if (currentScrollPos > 300) {
  backToTopButton.style.display = "block";
} else {
  backToTopButton.style.display = "none";
}}

// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// Event listener to show or hide the nav bars on scroll
window.addEventListener("scroll", toggleNavVisibility);

 // Event listener for back to top button
backToTopButton.addEventListener("click", scrollToTop);
});

// Typing effect functionality
const stringsToType = [
  { text: "Technical Support Engineer", delay: 100,},
  { text: "At Informatica", delay: 80, color: "#FF4D00" },
];

const cursorBlinkDelay = 500; // Milliseconds for the cursor to blink

const targetElement = document.getElementById("typingEffect");
let stringIndex = 0;
let charIndex = 0;

// Function to type the next character in the string
function typeNextCharacter() {
  const currentString = stringsToType[stringIndex].text;
  const currentDelay = stringsToType[stringIndex].delay || 100;
  const currentColor = stringsToType[stringIndex].color || "#000"; // Default to black color if not specified

  if (charIndex < currentString.length) {
    if (document.body.classList.contains("dark-mode") && currentString === "Technical Support Engineer") {
      // Check if the dark mode class is present on the body and if the current string is "Technical Support Engineer"
      targetElement.style.color = "#FFF"; // Set the text color to white in dark mode only for "Technical Support Engineer"
    } else {
      targetElement.style.color = currentColor; // Set the text color to the specified color in normal mode or for other strings in dark mode
    }

      targetElement.innerHTML += currentString.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextCharacter, currentDelay);
    } else {
      // Move to the next string in the array
      stringIndex = (stringIndex + 1) % stringsToType.length;
      charIndex = 0;
      // Clear the text in the targetElement to start typing the next string
      setTimeout(clearTextAndTypeNext, 1000);
    }
  }

// Function to clear the text and type the next string
function clearTextAndTypeNext() {
  targetElement.innerHTML = '';
  typeNextCharacter();
}

// Function to handle cursor blinking
function cursorBlink() {
  targetElement.style.borderRightColor = targetElement.style.borderRightColor === "transparent" ? "#000" : "transparent";
  setTimeout(cursorBlink, cursorBlinkDelay);
}

// Start the typing effect when the page loads
window.onload = () => {
  typeNextCharacter();
  cursorBlink();
};

// loading projects using AJAX (Asynchronous JavaScript and XML)...Enjoy!

const frontEndBtn = document.getElementById("frontEndBtn");
const backEndBtn = document.getElementById("backEndBtn");
const fullStackBtn = document.getElementById("fullStackBtn");
const projectsArea = document.getElementById("projectsArea");

function loadProjectContent(category) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${category}.html`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      projectsArea.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

frontEndBtn.addEventListener("click", () => loadProjectContent("frontEnd"));
backEndBtn.addEventListener("click", () => loadProjectContent("backEnd"));
fullStackBtn.addEventListener("click", () => loadProjectContent("fullStack"));
// Load frontend project content when the page loads (default)
window.addEventListener("load", () => {
  loadProjectContent("frontEnd"); // Load the frontend content by default
});