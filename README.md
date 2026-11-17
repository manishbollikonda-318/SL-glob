# Nexus — Cinematic AI Agent Dashboard
**Course:** Scripting Languages Lab (SL LAB)  
**Institution:** Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)  
**Project Category:** Micro Project (Advanced HTML5, CSS3 Grid, Flexbox, Glassmorphism & Keyframe Animation)

---

## 🌟 Project Overview
**Nexus** is a visually cinematic, interactive front-end working model of an Autonomous AI Command Center. Built purely using semantic **HTML5**, modern **CSS3** (CSS Grid, Flexbox, CSS Custom Properties, Glassmorphism, and hardware-accelerated Keyframe Animations), and lightweight vanilla **JavaScript**, Nexus demonstrates how complex real-time data systems, neural agent swarms, and hardware telemetry can be visualized intuitively with exceptional aesthetics and zero lag.

---

## 🚀 Key Highlights & Architecture
- **Glassmorphism UI**: Multi-layered backdrop blur (`backdrop-filter: blur(20px)`), frosted dark slate panels, and neon glow accents (`#00f5d4`, `#8a2be2`, `#10b981`, `#f59e0b`).
- **CSS Grid & Flexbox**: Dual-column and multi-column dashboard grid layout with smooth responsive collapse for tablets and mobile devices.
- **Pure CSS Real-Time Data Visualizations**:
  - CSS-animated 12-hour sliding window bar spectrum with dynamic CSS custom properties (`--val`).
  - SVG-based radial progress gauges for H100 GPU VRAM & Tensor Cache.
  - Pure CSS audio-frequency equalizer sound wave simulation with staggered keyframe delays.
  - Real-time pulse beacons and radar radar rings.
- **Cinematic Interactive Terminal**: Command interpreter with simulated stdout responses, error highlighting, and real-time streaming telemetry.
- **Interactive Controls & Modal**: Node elevation override protocol modal with slider and radio inputs, search filter, and instant toast notifications.

---

## 📂 Project Structure
```text
SL GLOB/
├── index.html           # Main semantic HTML5 markup & dashboard architecture
├── styles.css           # Advanced CSS3 stylesheets (variables, grid, glassmorphism, animations)
├── script.js           # Minimal vanilla JS for clock, terminal interpreter, and tab toggles
├── DOCUMENTATION.md     # Full 15-part college spiral-bind project report
├── PRESENTATION.md      # Full 10-slide PowerPoint presentation text and script
└── README.md            # Quick-start guide and project overview
```

---

## 💻 Quick Start Instructions
1. Open the directory `/Users/manishbollikonda/Downloads/SL GLOB` in any modern browser (Google Chrome, Microsoft Edge, Brave, Safari, or Firefox).
2. Simply double-click `index.html` or run a local development server:
   ```bash
   # Using Python 3 built-in HTTP server:
   python3 -m http.server 8080
   ```
3. Navigate to `http://localhost:8080` in your web browser.
4. Interact with the dashboard:
   - Try commands in the terminal: `help`, `status`, `scan`, `purge`, `optimize`, `topology`, `clear`.
   - Click the timeframe pills (`1H`, `6H`, `12H`, `24H`) to watch the CSS bar chart re-index dynamically.
   - Click **Override Protocol** in the top header to launch the glassmorphic modal dialog.
   - Use `Cmd + K` or type into the search bar to filter agent swarm cards.
   - Click **Deploy Sub-Swarm** or **Simulate Load Spike** to observe live state changes and toast notifications.
