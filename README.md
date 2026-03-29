<div align="center">

![PortFlow Banner](https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object/generated-banners/8bbfa57e-b061-46b8-af8c-7056836d2b06/final-banner.gif)

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
| [🎗️ Maintainers](#-maintainers) | Project maintainers |
| [💖 Support](#-support) | How to support the project |
| [📄 License](#-license) | Licensing information |

## 💡 Why this exists

> [!TIP]
> An AI-powered customs clearance and trade automation platform designed to streamline global import/export operations by automating document management and reducing delays.

**Background:** Traditional customs clearance is plagued by manual paperwork, reliance on brokers, and unpredictable delays. PortFlow provides a direct, digital, and AI-driven alternative to modernize trade compliance and logistical workflows.

## ✨ Features

- **AI-Powered Document Management**: Automates the collection, verification, and compliance checks of complex trade documents to heavily reduce processing errors.
- **Real-Time Shipment Tracking**: Implements live tracking of global shipments natively integrated with real-time customs clearance stage monitoring.
- **AI-Driven Tax & Duty Calculator**: Automates the calculation of import/export duties leveraging standardized HSN codes and international trade agreements.
- **Custom Interactive UI**: Incorporates bespoke frontend capabilities including a custom cursor architecture, magnetic DOM elements, and Framer Motion-powered scroll sequences.
- **Dual-Viewport Optimization**: Executes strictly separated logic paths and asset delivery for desktop and mobile clients to ensure optimal rendering performance across devices.

## 📸 Product Showcase

<div align="center">
  <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-8bbfa57e-b061-46b8-af8c-7056836d2b06/showcase1.png" alt="Main Showcase" width="100%">

  <details>
    <summary><b>View Gallery</b></summary>
    <table width="100%">
      <tr>
        <td width="50%" align="center" style="vertical-align: top;">
          <b>feature 1</b><br>
          <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-8bbfa57e-b061-46b8-af8c-7056836d2b06/showcase2.gif" alt="feature 1" width="100%">
        </td>
        <td width="50%" align="center" style="vertical-align: top;">
          <b>feature 2</b><br>
          <img src="https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object//generated-banners/showcase-8bbfa57e-b061-46b8-af8c-7056836d2b06/showcase3.gif" alt="feature 2" width="100%">
        </td>
      </tr>
    </table>
  </details>
</div>

## 🏗️ Architecture

Built on the Next.js App Router paradigm, enforcing strict client/server boundaries while maintaining modularized viewport routing mechanisms.

```text
porflow-final/
├── app/                   # Core routing, global layouts, and error boundaries
├── components/            # Reusable UI components and desktop sections
│   ├── mobile/            # Optimized views for mobile viewport detection
│   ├── ui/                # Fundamental UI primitives (buttons, toasts)
│   └── magicui/           # Specialized animation components
├── hooks/                 # Media queries and device detection logic
├── public/                # Static assets and media resources
├── lib/                   # Utility functions (cn, etc.)
└── config/                # Framework and styling configurations
```

## 🚀 Quick Start

> [!IMPORTANT]
> A modern Node.js environment is strictly required for local development to support Next.js 15 routing parameters.

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| Node.js | >= 18.17.0 | Required for App Router functionality |
| npm | >= 9.x | Dependency resolution |

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
> The application will instantiate an interactive development server typically exposed at `http://localhost:3000`.

**Uninstall**
```bash
npm uninstall <package_name>
```

## 📖 Usage

PortFlow acts as the central intelligence hub for trade logistics. Verified participants interface via an encrypted dashboard to orchestrate compliance documents, visualize active shipments via geospatial maps, and initiate rapid customs interventions via standardized QR infrastructure.

### Technical Implementation Examples

**Global Context Architecture**
Implementation of the custom `CursorProvider` layer instantiated inside the root application layout to distribute dynamic magnetic calculations.
```tsx
<ThemeProvider ...>
  <CursorProvider>
    {children}
  </CursorProvider>
</ThemeProvider>
```

**Automated Deployment CI/CD**
The repository integrates automated GitHub Action workflows targeting production optimization.
```yaml
uses: JamesIves/github-pages-deploy-action@v4
with:
  folder: out
  branch: gh-pages
```

## 🎗️ Maintainers

<div align="left">
  <a href="https://github.com/D4rk-Pho3nix">
    <img src="https://github.com/D4rk-Pho3nix.png?size=100" width="100px;" alt="D4rk-Pho3nix"/>
  </a>
</div>

## 💖 Support

If this infrastructure helped streamline your logistical deployment, consider supporting the core maintenance via the link below.

<a href="https://buymeacoffee.com/d4rkpho3nix">
  <img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExem14OW1tanN3eHlyYmR4NW1sYmJkOTZmbmJxejdjZXB6MXY5cW12MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/TDQOtnWgsBx99cNoyH/giphy.gif" width="80" alt="Support GIF">
</a>

## 📄 License

```text
Strong Copyleft: Permissions are conditioned on making available complete source code of licensed works and modifications.
```

<div align="center">

[![Star History Chart](https://api.star-history.com/svg?repos=D4rk-Pho3nix/porflow-final&type=Date)](https://star-history.com/#D4rk-Pho3nix/porflow-final&Date)

</div>

<div align="center">

⬆ [Back to Top](#table-of-contents)

</div>