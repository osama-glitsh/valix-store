// GSAP Setup
gsap.registerPlugin(ScrollTrigger);

// Logo Reveal Animation
gsap.to("#logo-reveal", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 2,
    ease: "power2.out",
    delay: 1
});

// About Text Reveal
gsap.to("#about-title", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    scrollTrigger: { trigger: "#about", start: "top 80%" }
});
gsap.to("#about-text", {
    opacity: 1,
    y: 0,
    duration: 1.5,
    delay: 0.5,
    scrollTrigger: { trigger: "#about", start: "top 80%" }
});

// Parallax Background
gsap.to(".parallax-bg", {
    y: -100,
    scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: true }
});

// Reviews Fade-In
gsap.utils.toArray(".review").forEach((review, i) => {
    gsap.to(review, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: { trigger: review, start: "top 80%" },
        delay: i * 0.2
    });
});

// Three.js 3D Setup
const heroContainer = document.getElementById('hero-3d');
const scene = new THREE.Scene();
scene.fog = new THREE.Fog(0x000000, 10, 50); // Subtle fog for depth

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 2, 8);

const renderer = new THREE.WebGLRenderer({ antial