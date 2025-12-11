// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Logo Reveal Animation
gsap.to("#logo-reveal", {
    opacity: 1,
    y: 0,
    duration: 2,
    ease: "power2.out",
    delay: 1
});

// Parallax Effects
gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true
        }
    });
});

// Product Hover Tilt (GSAP)
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        gsap.to(card, { rotationX: 10, rotationY: 10, duration: 0.3 });
    });
    card.addEventListener("mouseleave", () => {
        gsap.to(card, { rotationX: 0, rotationY: 0, duration: 0.3 });
    });
});

// Three.js 3D Hero Section
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('hero-3d').appendChild(renderer.domElement);

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// Rotating Mannequin (Simple Cylinder as Placeholder)
const mannequinGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 32);
const mannequinMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
const mannequin = new THREE.Mesh(mannequinGeometry, mannequinMaterial);
scene.add(mannequin);

// Floating Clothing Items (Boxes as Placeholders for Shirt, Hoodie, Cap)
const shirt = new THREE.Mesh(new THREE.BoxGeometry(1, 0.5, 0.2), new THREE.MeshStandardMaterial({ color: 0xff0000 }));
shirt.position.set(-2, 1, 0);
scene.add(shirt);

const hoodie = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.8, 0.3), new THREE.MeshStandardMaterial({ color: 0x0000ff }));
hoodie.position.set(2, 1, 0);
scene.add(hoodie);

const cap = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 0.8), new THREE.MeshStandardMaterial({ color: 0x00ff00 }));
cap.position.set(0, 2, 0);
scene.add(cap);

camera.position.z = 5;

// Animation Loop
function animate() {
    requestAnimationFrame(animate);
    mannequin.rotation.y += 0.01;
    shirt.rotation.x += 0.005;
    hoodie.rotation.y += 0.005;
    cap.rotation.z += 0.005;
    renderer.render(scene, camera);
}
animate();

// Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});