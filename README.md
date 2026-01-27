# PortFlow
![My Project Banner](https://rqecqirwmpmowvpezhki.supabase.co/storage/v1/object/public/generated-banners/session_1769419691572/style-reference.webp)
![License](https://img.shields.io/github/license/D4rk-Pho3nix/porflow-final) ![Version](https://img.shields.io/github/package-json/v/D4rk-Pho3nix/porflow-final) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue) ![Deployment](https://img.shields.io/badge/Deployment-Netlify-00AD9F) ![Stars](https://img.shields.io/github/stars/D4rk-Pho3nix/porflow-final?style=flat) ![Forks](https://img.shields.io/github/forks/D4rk-Pho3nix/porflow-final?style=flat) ![Issues](https://img.shields.io/github/issues/D4rk-Pho3nix/porflow-final?style=flat)

PortFlow is a professional AI-powered customs clearance platform engineered to modernize international trade. By automating document management and compliance verification, the platform eliminates the need for intermediaries, reduces operational delays, and provides traders with high-precision financial forecasting through automated duty calculations.

---

## Table of Contents

| Section | Description |
| :--- | :--- |
| [Overview](#overview) | Project mission and value proposition |
| [Features](#features) | Key platform capabilities and AI integrations |
| [Architecture](#architecture) | Repository structure and file organization |
| [Installation](#installation) | Environment setup and local development |
| [Usage](#usage) | Configuration and deployment instructions |
| [Contributing](#contributing) | Guidelines for project participation |
| [Contributors](#contributors) | Recognition of project developers |
| [Support](#support) | Project funding and community support |
| [License](#license) | Legal usage permissions |

---

## Overview

PortFlow addresses the inherent complexities of global logistics by providing a centralized, AI-driven interface for both traders and customs authorities. The platform optimizes the clearance lifecycle by automating regulatory checks, which significantly minimizes overhead costs and shipment bottlenecks. Users benefit from end-to-end transparency through real-time stage tracking and data-backed tax estimations based on global trade agreements.

---

## Features

*   **AI-Powered Document Management**: Automated verification of shipping documents to ensure regulatory compliance.
*   **Real-Time Shipment Tracking**: Integrated stage-based views providing transparency throughout the clearance lifecycle.
*   **AI-Driven Tax & Duty Calculator**: Accurate financial estimates based on HSN codes and current international trade agreements.
*   **QR-Based Customs Inspection**: Instant document access for customs officers via secure, unique QR codes.
*   **Adaptive UI Architecture**: Dedicated component paths for Desktop and Mobile users to ensure an optimized experience across all devices.
*   **Interactive UX**: Custom reactive cursor and scroll-linked SVG animations powered by Framer Motion.
*   **Early Access System**: Integrated waitlist management with automated email validation.

---

## Architecture

```text
.
├── public/             # Static assets (videos, images, icons)
├── src/
│   ├── app/            # Next.js App Router (layouts and pages)
│   ├── components/     # React components (Atomic design)
│   ├── context/        # Global state providers (Cursor, Theme)
│   ├── hooks/          # Custom React hooks (MobileDetection)
│   ├── lib/            # Utility functions and configurations
│   └── styles/         # Global CSS and Tailwind directives
├── check-images.js     # Asset validation script
├── check-video.js      # Media validation script
├── Dockerfile          # Container configuration
├── next.config.js      # Next.js configuration
├── package.json        # Dependencies and scripts
└── tailwind.config.ts  # Tailwind CSS configuration
```

---

## Installation

Follow these steps to set up the development environment:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/D4rk-Pho3nix/porflow-final.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd porflow-final
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Verify local assets:**
    ```bash
    node check-video.js
    node check-images.js
    ```

5.  **Launch the development server:**
    ```bash
    npm run dev
    ```

---

## Usage

### Local Development
To customize the visual theme of the platform, modify the HSL variables in `globals.css`:
```css
:root {
  --primary: 110 100% 50%; 
}
```

### Docker Deployment
For containerized production testing:
```bash
# Build the image
docker build -t portflow-final .

# Run the container
docker run -p 3000:3000 portflow-final
```

---

## Contributing

We welcome contributions. To maintain code quality, please follow these guidelines:

1.  **Fork the Project**: Create your own fork of the repository.
2.  **Create a Feature Branch**: `git checkout -b feature/AmazingFeature`.
3.  **Code Quality**: Ensure code passes linting (`npm run lint`).
4.  **Commit Changes**: Use descriptive commit messages.
5.  **Open a Pull Request**: Provide a detailed description of changes.

---

## Contributors

[![D4rk-Pho3nix](https://github.com/D4rk-Pho3nix.png?size=50)](https://github.com/D4rk-Pho3nix)

---

## Support

If you find this project helpful, please consider supporting its development:

[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20A%20Coffee-Donate-yellow.svg?style=for-the-badge&logo=buy-me-a-coffee)](https://buymeacoffee.com/d4rkpho3nix)

---

## License

The license for this project has not been specified. Please contact the maintainer for usage permissions or check the `LICENSE` file in the repository.

---

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=D4rk-Pho3nix/porflow-final&type=Date)](https://star-history.com/#D4rk-Pho3nix/porflow-final&Date)
