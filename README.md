# PortFlow

![License](https://img.shields.io/github/license/D4rk-Pho3nix/porflow-final) ![Version](https://img.shields.io/github/package-json/v/D4rk-Pho3nix/porflow-final) ![Contributors](https://img.shields.io/github/contributors/D4rk-Pho3nix/porflow-final)

PortFlow is an AI-powered customs clearance platform designed to streamline the import/export process for traders by eliminating middlemen and reducing delays.

---

## Table of Contents
- [🚀 Overview](#-overview)
- [⚙️ Installation](#️-installation)
- [❓ FAQ](#-faq)

---

## 🚀 Overview

Welcome to **PortFlow**! We are on a mission to simplify international trade. Traditionally, customs clearance is a complex web of paperwork, middlemen, and unpredictable delays. PortFlow leverages modern AI and a sleek, high-performance interface to put the power back into the hands of traders.

Our platform serves as a digital bridge between traders and customs authorities, offering:
- **Automated Document Management:** No more manual filing. Our system automates the collection and verification of essential trade documents.
- **AI-Driven Tax & Duty Calculator:** Get instant, accurate estimates based on HSN codes and current trade agreements.
- **Real-Time Tracking:** Stay informed with integrated tracking that monitors your goods through every stage of the customs process.
- **QR-Based Inspection:** Empowers customs officers to instantly scan and review shipment data, significantly reducing manual inspection times.

Built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**, PortFlow isn't just functional—it's built for speed and a premium user experience, featuring interactive SVG animations and a responsive design optimized for both desktop and mobile viewports.

---

## ⚙️ Installation

Getting the PortFlow development environment running on your local machine is straightforward. Please follow these steps:

### Prerequisites
- **Node.js:** Ensure you have the latest LTS version installed.
- **npm:** Typically comes bundled with Node.js.

### Step-by-Step Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/D4rk-Pho3nix/porflow-final.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd porflow-final
   ```

3. **Install dependencies**
   We recommend using the `--legacy-peer-deps` flag to ensure compatibility with all animation libraries:
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Verify Media Assets**
   PortFlow uses high-quality video and image assets for its interactive landing page. Run our utility scripts to ensure your `public` folder is correctly populated:
   ```bash
   node check-video.js && node check-images.js
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result!

> **Note:** Several components (like the Hero section) rely on specific video paths. If you encounter missing assets, please refer to the `Asset Requirements` section in our documentation or check the scripts mentioned in step 4.

---

## ❓ FAQ

**Q: Is the platform optimized for mobile devices?**  
**A:** Yes! PortFlow uses a "Responsive Multi-Tree Rendering" approach. We use a custom `useMobileDetection` hook to swap between entirely different component trees specifically optimized for touch-points and smaller viewports, ensuring a seamless experience across all devices.

**Q: How does the AI calculate taxes and duties?**  
**A:** The platform utilizes AI models to parse HSN (Harmonized System of Nomenclature) codes and cross-reference them with real-time trade agreements and local tax regulations to provide the most accurate cost estimates possible.

**Q: I noticed a custom cursor; can I disable it for accessibility?**  
**A:** Our `CustomCursor` component is context-driven and reacts to interactive elements. While it enhances the aesthetic, we are currently working on a toggle to allow users to revert to the system default cursor for better compatibility with certain assistive technologies.

**Q: Why are some data points like team members hardcoded?**  
**A:** This current version of the repository serves as a frontend-focused demonstration of the platform's capabilities. In future iterations, we plan to migrate these sections to a headless CMS or a dedicated backend database.

**Q: What should I do if the animations feel laggy?**  
**A:** PortFlow uses Framer Motion and SVG path animations which are highly performant. However, if you experience lag, ensure your browser is up to date and that hardware acceleration is enabled in your settings.