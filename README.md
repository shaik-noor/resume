# Personal Resume & Portfolio Website

A modern, high-performance personal portfolio and resume website built with the latest web technologies. This project showcases professional experience, skills, and projects in a sleek, responsive interface.

## 🚀 Tech Stack

This project is built on a cutting-edge stack to ensure performance, type safety, and developer experience:

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components:** [Components (shadcn/ui)](https://ui.shadcn.com/) based on Radix UI
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Forms:** React Hook Form + Zod
- **Email:** [Resend](https://resend.com/)
- **Linting & Formatting:** [Biome](https://biomejs.dev/)
- **Theming:** Next Themes (Dark/Light mode support)

## ✨ key Features

- **Modern UI/UX:** Clean, responsive design with dark mode support.
- **Dynamic Routing:** Next.js App Router for seamless navigation.
- **Interactive Elements:** Smooth animations and transitions using Framer Motion.
- **Contact Form:** Functional contact form integrated with Resend for email delivery.
- **PDF Resume:** Dedicated section for resume viewing/downloading.
- **Optimized Performance:** Built with Next.js optimization features (Fonts, Images).
- **Standalone Output:** Configured for easy Docker deployment (`output: "standalone"`).

## 🛠️ Getting Started

### Prerequisites

- Node.js (Latest LTS recommended) or compatible runtime like Bun/See `package.json` for specifics.
- npm, yarn, pnpm, or bun.

### Installation

1.  **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd resume.noruj.com
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Environment Setup:**

    Create a `.env.local` file in the root directory. You can start by copying the example:

    ```bash
    cp .env.example .env.local
    ```

    Update the `.env.local` file with your credentials:

    ```bash
    # Required: Resend API Key for contact form
    RESEND_API_KEY=re_123456789

    # Sender address (must be a verified domain in Resend)
    CONTACT_FROM_EMAIL="Your Name <contact@yourdomain.com>"

    # Optional: Destination email (defaults to s.noorink@gmail.com if not set)
    CONTACT_TO_EMAIL=your_email@example.com
    ```

### Running Locally

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

### Linting & Formatting

This project uses **Biome** for fast linting and formatting.

```bash
# Lint and check
npm run lint

# Lint and fix auto-fixable issues
npm run lint:fix

# Format code
npm run format
```

## 📂 Project Structure

```
├── app/                  # Next.js App Router pages and API routes
│   ├── about/            # About page
│   ├── api/              # API routes (e.g., /api/contact)
│   ├── certificates/     # Certificates page
│   ├── contact/          # Contact page
│   ├── educations/       # Education history
│   ├── resume/           # Resume viewer
│   ├── skills/           # Skills showcase
│   └── work-experience/  # Work experience timeline
├── components/           # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   └── ...               # Feature-specific components
├── lib/                  # Utility functions
├── public/               # Static assets (images, favicon)
└── ...config files       # Configuration (next, tailwind, biome, etc.)
```

## 📧 Contact Form Setup (Resend)

The contact form uses [Resend](https://resend.com) to send emails.

1.  **Sign up** for Resend and get an API Key.
2.  **Verify your domain** in the Resend dashboard to send emails from `contact@yourdomain.com`.
    -   *Note: For testing without a verified domain, you can only send emails to your own registered Resend email address, and the "From" address must be `onboarding@resend.dev`.*
3.  **Configure Environment Variables** as shown in the "Environment Setup" section above.
