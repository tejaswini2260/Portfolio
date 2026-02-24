// Dark Mode
document.getElementById("darkModeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// Filter Projects
function filterProjects(type) {
    let cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {
        if (type === "all" || card.classList.contains(type)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let msg = document.getElementById("formMsg");

    msg.style.color = "green";
    msg.textContent = "Message sent successfully!";
    this.reset();
});

/* ===== TYPING EFFECT ===== */
const text = ["Web Developer", "AI Enthusiast", "C# Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = text[i];

    if (isDeleting) {
        j--;
    } else {
        j++;
    }

    document.querySelector(".typing").textContent = currentText.substring(0, j);

    if (!isDeleting && j === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % text.length;
    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();

/* ===== PARTICLES ===== */
particlesJS("particles-js", {
    particles: {
        number: { value: 60 },
        size: { value: 3 },
        move: { speed: 2 }
    }
});

/* ===== MODAL ===== */
function openModal(title, desc) {
    document.getElementById("modal").style.display = "block";
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalDesc").textContent = desc;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}