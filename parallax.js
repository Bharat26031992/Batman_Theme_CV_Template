// parallax.js - Unifying background layers, rain, and Arkham Thunder

document.addEventListener('DOMContentLoaded', () => {
    const bg = document.getElementById('gotham-bg');
    if (!bg) return;
    
    bg.innerHTML = '';

    // 2. ARKHAM ASYLUM (Deep Background Layer - Hidden normally)
    const arkham = document.createElement('div');
    Object.assign(arkham.style, {
        position: 'absolute', 
        top: '-10%', left: '-10%',
        width: '120%', height: '120%', 
        background: 'url("Arkhum2.jpg") center center no-repeat', 
        backgroundSize: 'cover', 
        opacity: '0', // Completely invisible normally
        transition: 'opacity 0.1s ease, filter 0.1s ease, transform 0.1s linear'
    });
    bg.appendChild(arkham);

    // 3. GOTHAM SKYLINE (Mid-ground Layer - Visible normally under the torch)
    const skyline = document.createElement('div');
    Object.assign(skyline.style, {
        position: 'absolute', 
        top: '-10%', left: '0', 
        width: '300%', height: '120%', 
        // Removed dark gradient and brightness filter so the torch can reveal it!
        background: 'url("Dark Deco.jpg") left center repeat-x',
        backgroundSize: 'auto 100%', 
        opacity: '0.6', // Make it visible! The torch layer handles the darkness.
        transition: 'opacity 0.1s ease, transform 0.1s linear'
    });
    bg.appendChild(skyline);

    // 4. HEAVY STORM ENGINE (Rain Layer)
    const dropCount = window.innerWidth < 800 ? 50 : 120;
    
    for (let i = 0; i < dropCount; i++) {
        const drop = document.createElement('div');
        let speed = Math.random() * 4 + 4; 
        
        Object.assign(drop.style, {
            position: 'absolute', 
            width: '1px', 
            height: `${Math.random() * 60 + 40}px`, 
            background: 'rgba(200, 220, 255, 0.25)', 
            left: Math.random() * 100 + '%', 
            top: Math.random() * 100 + '%'
        });
        bg.appendChild(drop);
        animateRain(drop, speed);
    }

    function animateRain(el, speed) {
        function step() {
            let top = parseFloat(el.style.top);
            el.style.top = (top > 105 ? -10 : top + speed) + '%';
            requestAnimationFrame(step);
        }
        step();
    }

    // 5. SYNTHESIZED THUNDER AUDIO
    let thunderCtx = null;
    
    const initAudio = () => {
        if (!thunderCtx) thunderCtx = new (window.AudioContext || window.webkitAudioContext)();
        if (thunderCtx.state === 'suspended') thunderCtx.resume();
    };
    
    document.addEventListener('click', initAudio, { once: true });
    document.addEventListener('touchstart', initAudio, { once: true, passive: true });

    function playThunder() {
        if (!thunderCtx || thunderCtx.state === 'suspended') return;
        
        const dur = 4.0; 
        const bufferSize = thunderCtx.sampleRate * dur;
        const buffer = thunderCtx.createBuffer(1, bufferSize, thunderCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

        const noise = thunderCtx.createBufferSource();
        noise.buffer = buffer;
        
        const filter = thunderCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(250, thunderCtx.currentTime); 
        filter.frequency.exponentialRampToValueAtTime(20, thunderCtx.currentTime + dur);

        const gain = thunderCtx.createGain();
        gain.gain.setValueAtTime(0.9, thunderCtx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.01, thunderCtx.currentTime + dur);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(thunderCtx.destination);
        noise.start();
    }

    // 6. LIGHTNING STRIKE SYSTEM (Swaps the images)
    function triggerLightning() {
        // Drop torch darkness completely to 0.0 to reveal the flash
        document.documentElement.style.setProperty('--torch-darkness', '0.0');
        
        // Hide skyline, reveal Arkham with a bright flash
        skyline.style.opacity = '0';
        arkham.style.opacity = '1';
        arkham.style.filter = 'brightness(1.5) contrast(1.2)'; 
        
        playThunder();
        
        setTimeout(() => {
            // Return to dark state (Skyline back, Arkham hidden)
            document.documentElement.style.setProperty('--torch-darkness', '0.98');
            arkham.style.opacity = '0';
            arkham.style.filter = 'none';
            skyline.style.opacity = '0.6';
            
            // Secondary flicker
            setTimeout(() => {
                document.documentElement.style.setProperty('--torch-darkness', '0.2');
                skyline.style.opacity = '0';
                arkham.style.opacity = '0.8';
                arkham.style.filter = 'brightness(1.2) contrast(1.2)';
                
                setTimeout(() => {
                    // Final return to normal
                    document.documentElement.style.setProperty('--torch-darkness', '0.98');
                    arkham.style.opacity = '0';
                    arkham.style.filter = 'none';
                    skyline.style.opacity = '0.6';
                }, 150); 
            }, 200); 
        }, 180); 

        let nextStrike = Math.random() * 10000 + 5000;
        setTimeout(triggerLightning, nextStrike);
    }
    
    // Start lightning loop a few seconds after the page loads
    setTimeout(triggerLightning, 3000);

    // 7. SCROLL PARALLAX ENGINE
    window.addEventListener('scroll', () => {
        let scrollY = window.scrollY;
        
        skyline.style.transform = `translateX(-${scrollY * 0.15}px)`;
        arkham.style.transform = `translateY(${scrollY * 0.08}px) translateX(-${scrollY * 0.03}px)`;
    });
});