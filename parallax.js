// parallax.js
document.addEventListener('DOMContentLoaded', () => {
    const bg = document.createElement('div');
    Object.assign(bg.style, {
        position: 'fixed', inset: '0', zIndex: '-2', pointerEvents: 'none', background: '#050507', overflow: 'hidden'
    });
    document.body.appendChild(bg);

    // 1. Falling Rain
    for (let i = 0; i < 80; i++) {
        const drop = document.createElement('div');
        Object.assign(drop.style, {
            position: 'absolute', width: '1px', height: '80px', background: 'rgba(255,255,255,0.08)',
            left: Math.random() * 100 + '%', top: Math.random() * 100 + '%',
        });
        bg.appendChild(drop);
        animateRain(drop);
    }

    function animateRain(el) {
        function step() {
            let top = parseFloat(el.style.top);
            el.style.top = (top > 100 ? -10 : top + 1.5) + '%';
            requestAnimationFrame(step);
        }
        step();
    }

    // 2. Gotham Skyline Parallax
    const skyline = document.createElement('div');
    Object.assign(skyline.style, {
        position: 'absolute', bottom: '0', left: '0', width: '300%', height: '400px',
        background: 'linear-gradient(transparent, #000), url("https://i.imgur.com/G4ABy9p.png") repeat-x',
        backgroundSize: 'contain', opacity: '0.1', transition: 'transform 0.1s linear'
    });
    bg.appendChild(skyline);

    window.addEventListener('scroll', () => {
        skyline.style.transform = `translateX(-${window.scrollY * 0.15}px)`;
        
        // Random lightning while scrolling
        if (Math.random() > 0.98) {
            bg.style.background = '#1a1a2e';
            setTimeout(() => { bg.style.background = '#050507'; }, 40);
        }
    });
});