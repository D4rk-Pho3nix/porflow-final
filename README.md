# PortFlow

Welcome to the PortFlow repository! This platform is an AI-powered customs clearance solution designed to streamline international trade by automating document management and providing real-time shipment tracking. Our goal is to eliminate middlemen and reduce delays for traders everywhere.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS & Framer Motion
- **Language:** TypeScript
- **Build Tools:** PostCSS, ESLint

## Getting Started
To get the project running locally, follow these simple steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Deployment
This project is optimized for easy deployment on platforms like Netlify and GitHub Pages.

### Docker
If you prefer to use containerization, we've made it easy to get started with Docker. You can build and run the application using the following commands:

**Build the image:**
```bash
docker build -t portflow-final .
```

**Run the container:**
```bash
docker run -p 3000:3000 portflow-final
```

Once the container is running, you can access the platform at `http://localhost:3000`.

## Testing
We use Jest for our testing suite to ensure everything runs smoothly. You can run the tests using:
```bash
npm test
```

We hope you find PortFlow helpful for your customs clearance needs!