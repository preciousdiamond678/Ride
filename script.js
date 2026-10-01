function bookRide(event) {

    event.preventDefault();

    alert(
        "Thank you for choosing EkpomaRide! 🚗\n\n" +
        "Your ride request has been received."
    );

}


function sendMessage(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting EkpomaRide! 📩\n\n" +
        "Your message has been received."
    );

}



    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("show");

        if (navMenu.classList.contains("show")) {
            menuBtn.innerHTML = "✕";
            menuBtn.setAttribute("aria-label", "Close menu");
        } else {
            menuBtn.innerHTML = "☰";
            menuBtn.setAttribute("aria-label", "Open menu");
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll("#navMenu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("show");
            menuBtn.innerHTML = "☰";
        });
    });


// Mobile Menu Navigation Toggle
const menuBtn = document.getElementById('menuBtn');
const navMenu = document.getElementById('navMenu');

if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });
}

// Authentication Tab Switcher (Login / Sign Up)
function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTabBtn = document.getElementById('loginTabBtn');
    const registerTabBtn = document.getElementById('registerTabBtn');

    if (tab === 'login') {
        loginForm.classList.add('active-form');
        registerForm.classList.remove('active-form');
        loginTabBtn.classList.add('active');
        registerTabBtn.classList.remove('active');
    } else if (tab === 'register') {
        registerForm.classList.add('active-form');
        loginForm.classList.remove('active-form');
        registerTabBtn.classList.add('active');
        loginTabBtn.classList.remove('active');
    }
}




