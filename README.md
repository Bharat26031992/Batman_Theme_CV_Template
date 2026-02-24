# Batman Theme CV Template 🦇

A dark, immersive CV template inspired by the Batman: The Animated Series aesthetic. This interactive web-based portfolio uses advanced CSS and JavaScript to create a Gotham City atmosphere with parallax effects, dynamic lighting, and atmospheric elements.

## Features

### Visual Design
- **Batman: The Animated Series Aesthetic** - Dark noir-inspired color scheme with iconic yellows, purples, greens, and reds
- **Dynamic Torch/Spotlight Effect** - Cursor-following illumination that reveals content in the darkness
- **Parallax Layers** - Multi-layered backgrounds including Gotham skyline and Arkham Asylum imagery
- **Animated Curtains** - Joker theater curtain animations for dramatic reveals
- **HUD Crosshair** - Futuristic detective interface overlay

### Interactive Elements
- **Continuous Rain Animation** - Atmospheric weather effects with performance optimization
- **Synthesized Thunder Audio** - Web Audio API-powered thunder sounds triggered on interaction
- **Responsive Design** - Optimized for desktop and mobile devices with touch support
- **Custom Cursor** - Hidden default cursor with custom HUD overlay

### Technical Highlights
- **Pure JavaScript** - No external frameworks required for core functionality
- **Web Audio API** - Procedurally generated thunder sounds
- **CSS Custom Properties** - Themeable color variables for each Gotham villain
- **RequestAnimationFrame** - Smooth 60fps animations
- **MathJax Support** - Mathematical notation rendering for technical content

## File Structure

```
Batman_Theme_CV_Template/
├── index.html         # Main HTML structure and styling
├── parallax.js        # Background layers, rain, and thunder effects
└── README.md          # Project documentation
```

## Color Palette

- **Bat Yellow** - `#ffcc00` - Primary accent color
- **Noir Black** - `#050507` - Background
- **Joker Purple** - `#9d00ff` - Secondary accent
- **Riddler Green** - `#39ff14` - Neon accent
- **Freeze Blue** - `#00d4ff` - Cool accent
- **Ivy Green** - `#2ecc71` - Nature accent
- **Curtain Red** - `#6a0000` - Theater curtains

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bharat26031992/Batman_Theme_CV_Template.git
cd Batman_Theme_CV_Template
```

2. Open the template in a web browser:
```bash
open index.html
# or
start index.html  # Windows
```

### Customization

#### Update Personal Information
Edit the `index.html` file to replace placeholder content with your personal information, skills, and experience.

#### Modify Colors
Change the CSS variables in the `:root` selector to customize the villain-inspired color scheme:
```css
:root {
    --bat-yellow: #ffcc00;
    --noir-black: #050507;
    /* ... other colors ... */
}
```

#### Adjust Torch Effect
Modify the torch parameters in `index.html`:
```javascript
--torch-radius: 800px;        /* Size of illuminated area */
--torch-darkness: 0.98;       /* Darkness intensity */
```

#### Control Rain Intensity
Edit the drop count in `parallax.js`:
```javascript
const dropCount = window.innerWidth < 800 ? 50 : 120;
```

## Browser Compatibility

- Chrome/Chromium (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Considerations

- Optimized rain drop count based on screen width
- RequestAnimationFrame for smooth 60fps animations
- CSS transitions and transforms for hardware acceleration
- Lazy audio context initialization

## Dependencies

- **MathJax** - CDN-loaded for mathematical rendering (optional)
- **Google Fonts** - For custom typography (Bebas Neue, Special Elite, Playfair Display, Jolly Lodger, VT323)

## Usage Tips

1. **Sound** - Click or tap anywhere on the page to initialize audio context and enable thunder effects
2. **Torch Control** - Move your cursor/pointer to reveal content in the darkness
3. **Mobile** - Touch-optimized with single-tap sound initialization
4. **Responsive** - Resizes automatically to different screen sizes

## Features to Explore

- Hover to activate the detective torch spotlight
- Watch the dynamic rain storm effect
- Listen to procedurally generated thunder
- Experience the curtain reveal animations
- Note the HUD-style crosshair following your cursor

## License

This project is provided as-is for personal portfolio use.

## Author

**Bharat Singh Rawat** - Dossier #26031992

A creative showcase combining web development expertise with the iconic aesthetics of Batman: The Animated Series.

---

**Built with:** HTML5, CSS3, JavaScript (ES6+), Web Audio API

**Inspired by:** Batman: The Animated Series, Gotham City, Arkham Asylum
