function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function openProfile(url) {
  window.open(url, '_blank');
}

const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const certificateSlides = document.querySelectorAll('.certificate-slide');
const slideIndicatorsContainer = document.querySelector('.slide-indicators');

let currentIndex = 0;
const slideWidth = certificateSlides[0].offsetWidth;

function showSlide(index) {
  carousel.style.transform = `translateX(-${index * slideWidth}px)`;
  updateSlideIndicators(index);
}

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= certificateSlides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function showPrevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = certificateSlides.length - 1;
  }
  showSlide(currentIndex);
}

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
      }
    }
  
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
  


  // script for the typing effect 

  const stringsToType = [
    { text: "Technical Support Engineer", delay: 100 },
    { text: "At Informatica", delay: 80, color: "#FF4D00"},
  ];

  const cursorBlinkDelay = 500; // Milliseconds for the cursor to blink

  const targetElement = document.getElementById("typingEffect");
  let stringIndex = 0;
  let charIndex = 0;

  function typeNextCharacter() {
    const currentString = stringsToType[stringIndex].text;
    const currentDelay = stringsToType[stringIndex].delay || 100;
    const currentColor = stringsToType[stringIndex].color || "#000"; // Default to black color if not specified

    if (charIndex < currentString.length) {
      targetElement.style.color = currentColor; // Set the text color
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

  function clearTextAndTypeNext() {
    targetElement.innerHTML = '';
    typeNextCharacter();
  }

  function cursorBlink() {
    targetElement.style.borderRightColor = targetElement.style.borderRightColor === "transparent" ? "#000" : "transparent";
    setTimeout(cursorBlink, cursorBlinkDelay);
  }

  // Start the typing effect when the page loads
  window.onload = () => {
    typeNextCharacter();
    cursorBlink();
  };
  