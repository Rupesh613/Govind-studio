let currentSlide = 0; // Pehle slide se start ho raha hai
const slides = document.querySelectorAll('.slider-container .slide');
const totalSlides = slides.length;

function showSlide(index) {
    // Agar index range se bahar jaye toh slides ko loop karo
    if (index >= totalSlides) {
        currentSlide = 0; // First slide par wapas aa jao
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Last slide pe chale jao
    } else {
        currentSlide = index;
    }

    // Slide ko horizontally shift karne ke liye transform apply karna
    const slider = document.querySelector('.slider-container');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Agla Slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Pichla Slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Har 3 second mein slide change karna
setInterval(() => {
    nextSlide();
}, 3000); // 3 second mein slide change karna

// Pehla slide dikhana
showSlide(currentSlide);

// Image Popup functionality
function showPopup(imageSrc) {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');
    popupImage.src = imageSrc;
    popup.classList.add('active');
}

function closePopup() {
    const popup = document.getElementById('imagePopup');
    popup.classList.remove('active');
}

// Contact Us Form ka Modal
const contactLink = document.getElementById('contactLink');
const contactModal = document.getElementById('contactModal');
const closeContactModal = contactModal.querySelector('.close');

contactLink.onclick = function () {
    contactModal.style.display = "flex";
};

closeContactModal.onclick = function () {
    contactModal.style.display = "none";
};

// Agar user modal ke bahar click kare toh modal close ho jaaye
window.onclick = function (event) {
    if (event.target === contactModal) {
        contactModal.style.display = "none";
    }

};

// Login / Signup Forms ke liye Modal

const loginModalLink = document.getElementById('loginModalLink'); // Login button jo modal ko open karta hai
const loginModal = document.getElementById('loginModal'); // Modal

// Open the login modal when the login button is clicked
loginModalLink.onclick = function() {
    loginModal.style.display = "flex"; // Show modal
};


function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none'; // Hide the login modal
}

loginModalLink.onclick = function() {
    loginModal.style.display = 'flex'; // Modal ko display karo
};
window.addEventListener('click', function(e) {
    if (e.target === loginModal) {
        loginModal.style.display = 'none'; // Modal ko close karo agar bahar click kiya
    }
});



// Add animation for switching between Sign Up and Sign In
let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});
