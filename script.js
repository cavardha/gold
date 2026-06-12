/* ================================
   KNR GOLD WEBSITE - SCRIPT
================================ */

// Mobile Menu
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuToggle.innerHTML = navbar.classList.contains("active") ? "✕" : "☰";
  });

  const navLinks = navbar.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("active");
      menuToggle.innerHTML = "☰";
    });
  });
}

// Header Shadow on Scroll
const siteHeader = document.querySelector(".site-header");

function updateHeaderShadow() {
  if (!siteHeader) return;

  if (window.scrollY > 40) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeaderShadow);
window.addEventListener("load", updateHeaderShadow);

// WhatsApp Enquiry Form
const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const phoneInput = document.getElementById("phone");
    const serviceInput = document.getElementById("service");

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const service = serviceInput.value.trim();

    if (!name || !phone || !service) {
      alert("Please fill all details before sending enquiry.");
      return;
    }

    const phonePattern = /^[0-9+\-\s]{8,15}$/;

    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }

    const shopWhatsAppNumber = "919949362143";

    const message =
      `Hello KNR Gold,%0A%0A` +
      `I would like to enquire about:%0A` +
      `Service: ${encodeURIComponent(service)}%0A` +
      `Name: ${encodeURIComponent(name)}%0A` +
      `Phone: ${encodeURIComponent(phone)}%0A%0A` +
      `Please contact me with details.`;

    const whatsappUrl = `https://wa.me/${shopWhatsAppNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");
    enquiryForm.reset();
  });
}

// FAQ: Keep only one open at a time
const faqItems = document.querySelectorAll(".faq-list details");

faqItems.forEach((item) => {
  item.addEventListener("toggle", () => {
    if (item.open) {
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.open = false;
        }
      });
    }
  });
});