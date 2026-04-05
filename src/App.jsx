import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const targetDate = new Date('November 19, 2026 00:00:00').getTime();
  
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    if (distance < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((distance % (1000 * 60)) / 1000)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const handleMouseMove = (e) => {
    setMousePos({
      x: (window.innerWidth - e.pageX * 2) / 100,
      y: (window.innerHeight - e.pageY * 2) / 100
    });
  };

  const pad = (num) => num.toString().padStart(2, '0');

  return (
    <div className="app-container" onMouseMove={handleMouseMove}>
      <div 
        className="overlay" 
        style={{ transform: `translateX(${mousePos.x}px) translateY(${mousePos.y}px) scale(1.05)` }}
      ></div>
      
      <main className="hero">
        <header>
          <div className="logo-container">
            <span className="rockstar-star">&#9733;</span>
            <h1>VI</h1>
          </div>
        </header>

        <section className="countdown-section">
          <p className="subtitle">RETURN TO VICE CITY</p>
          <h2 className="main-title">Coming Fall 2026</h2>
          
          <div className="countdown-wrapper">
            <div className="time-block">
              <span className="number">{pad(timeLeft.days)}</span>
              <span className="label">Days</span>
            </div>
            <div className="time-divider">:</div>
            <div className="time-block">
              <span className="number">{pad(timeLeft.hours)}</span>
              <span className="label">Hours</span>
            </div>
            <div className="time-divider">:</div>
            <div className="time-block">
              <span className="number">{pad(timeLeft.minutes)}</span>
              <span className="label">Minutes</span>
            </div>
            <div className="time-divider">:</div>
            <div className="time-block">
              <span className="number">{pad(timeLeft.seconds)}</span>
              <span className="label">Seconds</span>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <p className="teaser-text">
            Join the global community as we count down to the next evolution of open-world gaming.
          </p>
          <div className="btn-group">
            <a href="https://www.rockstargames.com/VI" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Watch Trailer</a>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Rockstar Fanbase. Official Countdown concept.</p>
        <div className="social-links">
          <a href="https://x.com/gamee_ovrr" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/></svg>
          </a>
          <a href="https://www.instagram.com/gamee_ovrr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="https://www.youtube.com/@GameeOvrrGaming" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
