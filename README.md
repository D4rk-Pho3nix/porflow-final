<div align="center">

![Banner Placeholder](https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object/generated-banners/e9f157c8-5175-4514-b8b8-e35b74d21785/final-banner.gif)

![Version](https://img.shields.io/github/v/release/D4rk-Pho3nix/porflow-final?style=flat-square&label=version&color=blue)
![Release Date](https://img.shields.io/github/created-at/D4rk-Pho3nix/porflow-final?style=flat-square&label=released&color=green)
![Last Commit](https://img.shields.io/github/last-commit/D4rk-Pho3nix/porflow-final?style=flat-square&label=last%20commit&color=purple)
[![Followers](https://img.shields.io/github/followers/D4rk-Pho3nix?style=flat-square&logo=github&color=yellow)](https://github.com/D4rk-Pho3nix)
![License](https://img.shields.io/github/license/D4rk-Pho3nix/porflow-final?style=flat-square&color=orange)
[![Contact](https://img.shields.io/badge/Contact-Dev-cyan?style=flat-square)](mailto:manish.srmist23@gmail.com)


**made with 🩷 by [D4rk-Pho3nix](https://github.com/D4rk-Pho3nix)**
*(if you like my work, consider ⭐ starring the repo!)*

</div>

<a name="table-of-contents"></a>
## 📑 Table of Contents

| Section | Description |
|---------|-------------|
| [💡 Why this exists](#-why-this-exists) | Purpose and background of the project |
| [✨ Features](#-features) | Key capabilities and highlights |
| [📸 Product Showcase](#-product-showcase) | Visual gallery of features |
| [🏗️ Architecture](#-architecture) | Codebase structure and organization |
| [🚀 Quick Start](#-quick-start) | Get up and running in minutes |
| [📖 Usage](#-usage) | Detailed usage instructions |
| [🤝 Contributing](#-contributing) | Guidelines for contributors |
| [🎗️ Maintainers](#-maintainers) | Project maintainers |
| [🩷 Contributors](#-contributors) | Project contributors |
| [💖 Support](#-support) | How to support the project |
| [📄 License](#-license) | Licensing information |

## 💡 Why this exists

> [!TIP]
> Modernizing customs clearance through AI automation and real-time tracking.

**Background:** The project addresses complexities in global logistics by providing a centralized, AI-driven interface for traders and customs authorities to minimize overhead costs and shipment bottlenecks.

## ✨ Features

- **AI-Powered Document Management**: Automated collection and verification of shipping documents to ensure regulatory compliance.
- **Real-Time Shipment Tracking**: Comprehensive monitoring of logistics milestones.
- **AI-Driven Tax & Duty Calculator**: Financial forecasting using HSN codes and international trade agreements.
- **QR-Based Customs Inspection**: Instant document access for officers via secure QR codes scanned from the mobile app.
- **Adaptive UI (Mobile/Desktop)**: Distinct component paths for Desktop and Mobile users using device detection for optimized UX.
- **Interactive SVG Scroll Animations**: Custom reactive cursor and scroll-linked animations powered by Framer Motion.
- **Early Access Waitlist System**: Integrated lead generation for upcoming platform releases.

## 📸 Product Showcase

<div align="center">
  <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-e9f157c8-5175-4514-b8b8-e35b74d21785/showcase1.png" alt="Platform Header Interface" width="100%">

  <details>
    <summary><b>View Gallery</b></summary>
    <table width="100%">
      <tr>
        <td width="100%" align="center" style="vertical-align: top;">
          <b>Validation and Workflow Visualization</b><br>
          <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-e9f157c8-5175-4514-b8b8-e35b74d21785/showcase2.gif" alt="Workflow Animation" width="100%">
        </td>
      </tr>
    </table>
  </details>
</div>

## 🏗️ Architecture

```bash
src/
├── app/                  # Core routing, global styles, and layout management
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/           # Reusable UI components (Atomic Design)
│   ├── magicui/          # Specialized UI library components
│   ├── mobile/           # Mobile-specific view implementations
│   ├── ui/               # Base UI primitives
│   └── [functional-components].tsx
├── hooks/                # Device detection and responsive logic
│   ├── use-media-query.tsx
│   └── use-mobile-detection.tsx
├── lib/                  # Utility functions and configuration
│   └── utils.ts
└── public/               # Static assets, fonts, and media
    ├── assets/
    └── fonts/
```

## 🚀 Quick Start

> [!IMPORTANT]
> Ensure you are using Node.js v18+ to maintain compatibility with Next.js 15 features.

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | ^18.17.0 | Required for Next.js 15 |
| npm | ^9.0.0 | Recommended package manager |
| Docker | Latest | Optional for containerized deployment |

> [!WARNING]
> Asset validation scripts (`check-video.js`) must be run prior to deployment to ensure all local media references are resolved.

### Clone & Setup

```bash
git clone https://github.com/D4rk-Pho3nix/porflow-final.git
cd porflow-final
```

### Install
```bash
npm install
```

### Build
```bash
npm run build
```

### Run
```bash
npm run dev
```

> [!NOTE]
> The development server will be available at `http://localhost:3000`.

## 🤖 Usage

PortFlow is designed to bridge the gap between traders and customs authorities. Traders utilize the dashboard to upload documents and calculate duties, while officers verify compliance via QR code scanning.

### Customization Examples

**Adjusting Visual Identity**
Modify the CSS variables in `globals.css` to update the neon primary theme:
```css
:root {
  --primary: 110 100% 50%; /* Adjust HSL values for neon green customization */
}
```

**Docker Deployment**
For production-ready environments:
```bash
docker build -t portflow-final .
docker run -p 3000:3000 portflow-final
```

## 🤝 Contributing
Contributions are welcome! Please see CONTRIBUTING.md for guidelines.

Quick contribution flow:

```bash
# Fork the repo
# Create your feature branch
git checkout -b feature/amazing-feature

# Make your changes
# Commit with conventional commits
git commit -m "feat: add amazing feature"

# Push and create PR
git push origin feature/amazing-feature
```

> [!NOTE] 
> All PRs must pass CI linting and custom asset checks before merging.

## 🎗️ Maintainers
<div align="left"> 
  <a href="https://github.com/D4rk-Pho3nix"> 
    <img src="https://github.com/D4rk-Pho3nix.png?size=100" width="100px;" alt="D4rk-Pho3nix"/> 
  </a> 
</div>

## 🩷 Contributors
Thanks goes to these wonderful people <3:

<div align="left"> 
<table> 
  <tbody> 
    <tr> 
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/D4rk-Pho3nix">
          <img src="https://github.com/D4rk-Pho3nix.png?size=100" width="100px;" alt="D4rk-Pho3nix"/><br />
          <sub><b>D4rk-Pho3nix</b></sub>
        </a><br />
        <a href="#" title="Code">💻</a>
      </td> 
    </tr> 
  </tbody> 
</table> 
</div>

This project follows the [all-contributors](https://allcontributors.org/) specification.

## 💖 Support
If this project helped you, consider buying me a coffee, any donation is appreciated and goes towards my caffeine addiction :p

<a href="https://buymeacoffee.com/hf2p"> 
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExem14OW1tanN3eHlyYmR4NW1sYmJkOTZmbmJxejdjZXB6MXY5cW12MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TDQOtnWgsBx99cNoyH/giphy.gif" width="80"> 
</a>

## 📄 License

```text
Usage permissions are currently restricted. Contact D4rk-Pho3nix for licensing details.
```

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=D4rk-Pho3nix/porflow-final&type=Date)](https://star-history.com/#D4rk-Pho3nix/porflow-final&Date)

</div>

<div align="center">

⬆ [Back to Top](#table-of-contents)

</div>