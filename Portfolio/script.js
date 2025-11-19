const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  hamburger.classList.toggle("toggle");
});

const btn = document.getElementById("langBtn");
const section = document.getElementById("aboutSection");

const EN = document.querySelector(".EN");
const AR = document.querySelector(".AR");

const amHead = document.querySelector(".amHead");

let isArabic = false;

btn.addEventListener("click", () => {
    isArabic = !isArabic;

    if (isArabic) {
        // Switch to AR
        section.classList.add("dark");
        amHead.classList.add("dark");

        EN.classList.add("hide");
        EN.classList.remove("show");

        AR.classList.add("show");
        AR.classList.remove("hide");

        btn.textContent = "EN";

    } else {
        // Switch to EN
        section.classList.remove("dark");
        amHead.classList.remove("dark");

        AR.classList.add("hide");
        AR.classList.remove("show");

        EN.classList.add("show");
        EN.classList.remove("hide");

        btn.textContent = "AR";
    }
});

document.querySelectorAll('.projectImages').forEach((container) => {
  let startX = 0;
  let currentImg = 0;
  const imgs = container.querySelectorAll('img');

  container.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
  });

  container.addEventListener('touchmove', (e) => {
    if (!startX) return;
    let x = e.touches[0].clientX;
    let diff = startX - x;

    if (diff > 50) {
      // swipe left -> next image
      imgs[currentImg].style.opacity = 0;
      currentImg = (currentImg + 1) % imgs.length;
      imgs[currentImg].style.opacity = 1;
      startX = 0;
    } else if (diff < -50) {
      // swipe right -> previous image
      imgs[currentImg].style.opacity = 0;
      currentImg = (currentImg - 1 + imgs.length) % imgs.length;
      imgs[currentImg].style.opacity = 1;
      startX = 0;
    }
  });

  container.addEventListener('touchend', () => {
    startX = 0;
  });
});

// Initialize EmailJS
(function() {
    emailjs.init("AuZ83o0Ee1oa-Q1a8");  // Public key
})();

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const serviceID = "service_27rbaus";
    const templateID = "template_yskp07l";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert("Message sent successfully!");
            this.reset();
        })
        .catch((err) => {
            console.error("Failed:", err);
            alert("Something went wrong!");
        });
});
