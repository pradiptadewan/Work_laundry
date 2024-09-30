// DOM Selectors
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

// Dropdown Menu Logic
const dropdownButton = document.querySelector('.dropdown-button');
const dropdownContent = document.querySelector('.dropdown-content');

// Slideshow Logic
let slideIndices = [1, 1]; // Array to store slide indices for each container

// Event Listeners
menuBtn.addEventListener("click", toggleMenu);
navLinks.addEventListener("click", closeMenu);
dropdownButton.addEventListener('click', toggleDropdown);
window.addEventListener('click', closeDropdown);

// Slideshow Navigation Event Listeners
document.querySelectorAll('.prev').forEach((btn, index) => {
  btn.addEventListener('click', () => plusSlides(-1, index));
});

document.querySelectorAll('.next').forEach((btn, index) => {
  btn.addEventListener('click', () => plusSlides(1, index));
});

// Thumbnail Click Event Listeners
document.querySelectorAll('.demo').forEach((dot, index) => {
  dot.addEventListener('click', function() {
    let containerIndex = Array.from(this.parentNode.children).indexOf(this) + 1;
    currentSlide(containerIndex, index);
  });
});

// Functions
function toggleMenu() {
  navLinks.classList.toggle("open");
  menuBtnIcon.setAttribute("class", navLinks.classList.contains("open") ? "ri-close-line" : "ri-menu-line");
}

function closeMenu() {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
}

function toggleDropdown(event) {
  event.stopPropagation(); // Prevent click on button from closing dropdown
  dropdownContent.classList.toggle('show');
}

function closeDropdown(event) {
  // Close dropdown if click is outside of button and content
  if (!dropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
    dropdownContent.classList.remove('show');
  }
}

function plusSlides(n, no) {
  showSlides(slideIndices[no] += n, no);
}

function currentSlide(n, no) {
  showSlides(slideIndices[no] = n, no);
}

function showSlides(n, no) {
  let i;
  let slides = document.querySelectorAll(`.container:nth-child(${no + 1}) .mySlides`);
  //let dots = document.querySelectorAll(`.container:nth-child(${no + 1}) .demo`);
  let captionText = document.getElementById(`hargaPaket${no + 1}`);

  // Wrap around slide indices
  if (n > slides.length) { slideIndices[no] = 1 }
  if (n < 1) { slideIndices[no] = slides.length }

  // Hide all slides and remove active class from dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
  //  dots[i].className = dots[i].className.replace(" active", "");
  //}

  // Show the current slide and add active class to the corresponding dot
  slides[slideIndices[no]-1].style.display = "block";
  //dots[slideIndices[no]-1].className += " active";

  // Update caption if available
  if(captionText) captionText.innerHTML = slides[slideIndices[no]-1].querySelector('.harga').textContent;
}

// Scroll Reveal Animation
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// Header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  showSlides(1, 0);
  showSlides(1, 1);
  //showSlides(1, 2);

  // Tambahkan event listener untuk tombol "Pesan Sekarang"
  const pesanButton = document.querySelector('.btn');
  pesanButton.addEventListener('click', () => {
    // Tambahkan efek animasi saat tombol di-klik
    pesanButton.classList.add('clicked');
    setTimeout(() => {
      pesanButton.classList.remove('clicked');
    }, 500); // 500 milidetik (0.5 detik)
  });

  // Tambahkan efek animasi untuk tombol "Pesan Sekarang"
  pesanButton.addEventListener('mouseover', () => {
    pesanButton.classList.add('hovered');
  });
  pesanButton.addEventListener('mouseout', () => {
    pesanButton.classList.remove('hovered');
  });

  // Tambahkan efek animasi untuk tombol "Tentang Kami"
  const aboutButton = document.querySelector('.btn__about');
  aboutButton.addEventListener('mouseover', () => {
    aboutButton.classList.add('hovered');
  });
  aboutButton.addEventListener('mouseout', () => {
    aboutButton.classList.remove('hovered');
  });
});

// Styles for Animations
const style = document.createElement('style');
style.innerHTML = `
  .clicked {
    transform: scale(0.95);
    transition: transform 0.2s ease;
  }
  .hovered {
    transform: scale(1.05);
    transition: transform 0.2s ease;
  }
`;
document.head.appendChild(style);

// ... kode lainnya ...

// Back to Top Button
const backToTopButton = document.querySelector('.back-to-top');

// Tampilkan tombol ketika di-scroll ke bawah
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) { // Jika scroll lebih dari 100px
    backToTopButton.style.display = 'block'; // Tampilkan tombol
  } else {
    backToTopButton.style.display = 'none'; // Sembunyikan tombol
  }
});

// Fungsi untuk scroll ke atas
backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Scroll mulus
  });
});

// ... kode lainnya ...

