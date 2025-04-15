// Function to filter menu items based on category
function filterMenu(category) {
    // Hide all menu items
    let allItems = document.querySelectorAll(".menu-item");
    allItems.forEach(item => item.style.display = "none");

    // Show only the selected category
    let selectedItems = document.querySelectorAll("." + category);
    selectedItems.forEach(item => item.style.display = "flex");

    // Update active tab
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));

    event.target.classList.add("active");
}

// Show breakfast items by default on page load
document.addEventListener("DOMContentLoaded", function() {
    filterMenu('breakfast');
});

function playVideo() {
    let video = document.getElementById("promoVideo");
    let playButton = document.querySelector(".play-button");

    // Show video and play
    video.style.display = "block";
    video.play();

    // Hide play button
    playButton.style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    const teamData = [
        {
            name: "Jhonn",
            designation: "Head Chef",
            image: "https://th.bing.com/th/id/OIP.fzkE1XP_MlFMY3nw12cSIwHaLG?rs=1&pid=ImgDetMain",
            social: {
                facebook: "https://www.facebook.com/",
                watsapp: "https://web.whatsapp.com/",
                instagram: "https://www.instagram.com/"
            }
        },
        {
            name: "David",
            designation: "Sous Chef",
            image: "https://image.lexica.art/md2_webp/00acca7f-5b29-4b14-9f34-d300d31226de",
            social: {
                facebook: "https://www.facebook.com/",
                watsapp: "https://web.whatsapp.com/",
                instagram: "https://www.instagram.com/"
            }
        },
        {
            name: "Pema",
            designation: "Pastry Chef",
            image: "https://cdn.myanimelist.net/images/characters/3/496038.jpg",
            social: {
                facebook: "https://www.facebook.com/",
                watsapp: "https://web.whatsapp.com/",
                instagram: "https://www.instagram.com/"
            }
        },
        {
            name: "Sonam",
            designation: "Executive Chef",
            image: "https://png.pngtree.com/png-vector/20231202/ourmid/pngtree-anime-girl-chef-illustration-png-image_10863029.png",
            social: {
                facebook: "https://www.facebook.com/",
                watsapp: "https://web.whatsapp.com/",
                instagram: "https://www.instagram.com/"
            }
        }
    ];

    const teamContainer = document.getElementById("teamContainer");

    teamData.forEach(chef => {
        const card = document.createElement("div");
        card.classList.add("team-card");

        card.innerHTML = `
        <img src="${chef.image}" alt="${chef.name}">
        <h3>${chef.name}</h3>
        <p>${chef.designation}</p>
        <div class="team-social">
            ${chef.social.facebook ? `<a href="${chef.social.facebook}" target="_blank"><i class="fab fa-facebook-f"></i></a>` : ""}
            ${chef.social.watsapp ? `<a href="${chef.social.watsapp}" target="_blank"><i class="fab fa-whatsapp"></i></a>` : ""}
            ${chef.social.instagram ? `<a href="${chef.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>` : ""}
        </div>
    `;

        teamContainer.appendChild(card);
    });
});

// Get the button
const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show button when scrolling down
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to top when clicked
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// click menu bar
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".navbar-nav a");
    const navBarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            if (navBarCollapse.classList.contains("show")) {
                new bootstrap.Collapse(navBarCollapse).hide();
            }
        });
    });
});
// menu taps
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab");

    // Set Breakfast as default active tab
    tabs[0].classList.add("active");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            // Remove 'active' from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Add 'active' to clicked tab
            this.classList.add("active");
        });
    });
});
// Contact Form Validation
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault(); // Stop form from submitting

    const name = this.querySelector('input[type="text"]:first-child');
    const email = this.querySelector('input[type="email"]');
    const subject = this.querySelector('input[placeholder="Subject"]');
    const message = this.querySelector('textarea');

    // Regex to check email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (name.value.trim() === '' || email.value.trim() === '' || subject.value.trim() === '' || message.value.trim() === '') {
        alert('🚫 Please fill out all fields.');
        return;
    }

    if (!email.value.match(emailPattern)) {
        alert('📧 Please enter a valid email address.');
        return;
    }

    // If everything's valid
    alert('✅ Message sent successfully!');
    this.reset(); // Optional: clears the form
});


