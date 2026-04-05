/**
 * GTA VI Countdown Logic
 * Targets "Fall 2025" - Using November 1, 2025 as a speculative target.
 */

const targetDate = new Date('November 1, 2025 00:00:00').getTime();

const countdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = "<h3 style='font-size: 2rem; color: var(--secondary); text-transform: uppercase;'>The wait is over. VI is here.</h3>";
        return;
    }

    // Time calculations
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Padding function
    const pad = (num) => num.toString().padStart(2, '0');

    // Update DOM
    document.getElementById('days').innerText = pad(days);
    document.getElementById('hours').innerText = pad(hours);
    document.getElementById('minutes').innerText = pad(minutes);
    document.getElementById('seconds').innerText = pad(seconds);
};

// Initial call
countdown();

// Update every second
const interval = setInterval(countdown, 1000);

// Add subtle cursor move parallax to background if on desktop
if (window.innerWidth > 1024) {
    document.addEventListener('mousemove', (e) => {
        const overlay = document.querySelector('.overlay');
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        overlay.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.05)`;
    });
}
