// GOLDEN PARTICLES

const particleArea = document.getElementById("particles");

for (let i = 0; i < 55; i++) {

    const particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";

    particle.style.animationDelay =
        Math.random() * 5 + "s";

    particle.style.animationDuration =
        (3 + Math.random() * 5) + "s";

    particleArea.appendChild(particle);

}


// SCROLL REVEAL ANIMATION

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, { threshold: 0.2 });


document.querySelectorAll(".section").forEach(section => {

    observer.observe(section);

});


// MOUSE GLOW EFFECT

document.addEventListener("mousemove", (event) => {

    const x = event.clientX;
    const y = event.clientY;

    document.body.style.backgroundImage =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(212,175,55,0.07), transparent 350px)`;

});


// IMAGE TILT EFFECT

const profile = document.querySelector(".profile-image");

profile.addEventListener("mousemove", (event) => {

    const rect = profile.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = ((0.5 - y / rect.height) * 12);

    profile.style.transform =
        `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

});

profile.addEventListener("mouseleave", () => {

    profile.style.transform = "";

});


// CONSOLE SIGNATURE

console.log("Welcome to Sathya Murthy's Royal Portfolio 👑");