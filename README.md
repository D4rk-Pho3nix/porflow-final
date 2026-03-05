<div align="center">

![Banner Placeholder](https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object/generated-banners/29bd6b75-9d96-4986-b948-1af7a29bcb2a/final-banner.gif)

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
| [💖 Support](#-support) | How to support the project |
| [📄 License](#-license) | Licensing information |

## 💡 Why this exists

> [!TIP]
> PortFlow is an AI-powered customs clearance and trade automation platform designed to streamline global import/export operations by eliminating middlemen, reducing delays, and automating document management.

**Background:** Traditional customs clearance is plagued by manual paperwork, reliance on brokers, and unpredictable delays. PortFlow provides a direct, digital, and AI-driven alternative to ensure faster and more cost-effective trade compliance.

## ✨ Features

- **AI-Powered Document Management**: Automates the collection, verification, and compliance checks of trade documents to reduce errors and accelerate approvals.
- **Real-Time Shipment Tracking**: Integration for live tracking of shipments and monitoring their specific stage in the customs clearance pipeline.
- **AI-Driven Tax & Duty Calculator**: Calculates import/export duties automatically using HSN codes and trade agreements to prevent misclassification.
- **QR-Based Customs Inspection**: Enables instant access to shipment documentation for officers and traders via QR code scanning.
- **Responsive Design with Device Detection**: Separate optimized workflows for Desktop and Mobile users with specialized components for each environment.
- **Secure Encrypted Data Storage**: Ensures all trade and sensitive document data is stored with high-level encryption.

## 📸 Product Showcase

<div align="center">
  <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-29bd6b75-9d96-4986-b948-1af7a29bcb2a/showcase1.png" alt="Main Showcase" width="100%">

  <details>
    <summary><b>View Gallery</b></summary>
    <table width="100%">
      <tr>
        <td width="50%" align="center" style="vertical-align: top;">
          <b>Implementation Structure</b><br>
          <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-29bd6b75-9d96-4986-b948-1af7a29bcb2a/showcase2.gif" alt="header" width="100%">
        </td>
        <td width="50%" align="center" style="vertical-align: top;">
          <b>Validation Workflow</b><br>
          <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-29bd6b75-9d96-4986-b948-1af7a29bcb2a/showcase3.gif" alt="footer" width="100%">
        </td>
      </tr>
    </table>
  </details>
</div>

## 🏗️ Architecture

```text
.
├── app/                   # Core routing, global layouts, and error boundaries
├── components/            # Reusable UI components and desktop sections
│   ├── mobile/            # Optimized views for mobile viewport detection
│   └── ui/                # Fundamental UI primitives (buttons, toasts)
├── hooks/                 # Media queries and device detection logic
├── public/                # Static assets and media resources
├── next.config.ts         # Next.js framework configuration
└── tailwind.config.ts     # Styling and theme definitions
```

## 🚀 Quick Start

> [!IMPORTANT]
> Ensure your local environment matches the Node.js requirements for Next.js 15 to avoid build-time compatibility issues.

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | ^18.18.0 \|\| ^20.9.0 \|\| >=21.1.0 | Required for Next.js 15 |
| npm | >=9.x | Package management |

> [!WARNING]
> This project utilizes Framer Motion for complex animations; hardware acceleration should be enabled in your browser for the best experience.

### Clone & Setup

```bash
git clone https://github.com/D4rk-Pho3nix/porflow-final.git
cd porflow-final
```

**Install**
```bash
npm install
```

**Build**
```bash
npm run build
```

**Run**
```bash
npm run dev
```

> [!NOTE] 
> The development server will typically start at `http://localhost:3000`.

**Uninstall**
```bash
npm uninstall <package_name>
```

## 🤖 Usage

PortFlow is a web-based platform. Users can land on the site, view detailed feature demos (including video previews), meet the development team, and sign up for early access via a specialized modal.

### Deployment Example
Deploy to GitHub Pages using the automated workflow:
```yaml
uses: JamesIves/github-pages-deploy-action@v4
with:
  folder: out
  branch: gh-pages
```

### Layout Implementation
Custom cursor implementation in the application layout:
```tsx
<ThemeProvider ...>
  <CursorProvider>
    {children}
  </CursorProvider>
</ThemeProvider>
```

## 🤝 Contributing

Contributions are welcome! Please see `CONTRIBUTING.md` for guidelines.

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
> All PRs must pass CI checks before merging.

## 🎗️ Maintainers

<div align="left"> 
  <a href="https://github.com/D4rk-Pho3nix"> 
    <img src="https://github.com/D4rk-Pho3nix.png?size=100" width="100px;" alt="D4rk-Pho3nix"/> 
  </a> 
</div>

## 💖 Support

If this project helped you, consider buying me a coffee, any donation is appreciated and goes towards my caffeine addiction :p

<a href="https://buymeacoffee.com/manish-kumar-s"> 
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExem14OW1tanN3eHlyYmR4NW1sYmJkOTZmbmJxejdjZXB6MXY5cW12MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TDQOtnWgsBx99cNoyH/giphy.gif" width="80"> 
</a>

## 📄 License

```
Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications.
```

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=D4rk-Pho3nix/porflow-final&type=Date)](https://star-history.com/#D4rk-Pho3nix/porflow-final&Date)

</div>

<div align="center">

⬆ [Back to Top](#table-of-contents)

</div>