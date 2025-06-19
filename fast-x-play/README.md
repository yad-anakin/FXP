# Fast X Play - Kurdish Gaming Studio Website

This is the official website for Fast X Play, a Kurdish gaming studio. The website is built with Next.js, Tailwind CSS, and supports multiple languages (English, Kurdish Sorani, and Arabic).

## Features

- **Multi-language Support**: English, Kurdish Sorani, and Arabic
- **Dark/Light Mode**: Default is dark mode, with option to switch to light mode
- **Modern UI/UX**: Responsive design with gaming-themed aesthetics
- **Animations**: Smooth animations using Framer Motion

## Technologies Used

- Next.js 15
- Tailwind CSS
- next-intl for internationalization
- next-themes for dark/light mode
- Framer Motion for animations

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
cd fast-x-play
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
fast-x-play/
├── public/
│   └── images/        # Static images
├── src/
│   ├── app/
│   │   ├── [locale]/  # Dynamic locale routes (handled by middleware)
│   │   ├── en/        # English routes
│   │   ├── ku/        # Kurdish routes
│   │   └── ar/        # Arabic routes
│   ├── components/
│   │   ├── layout/    # Layout components (Navbar, Footer, etc.)
│   │   └── ui/        # UI components
│   ├── messages/      # Translation files
│   │   ├── en.json    # English translations
│   │   ├── ku.json    # Kurdish translations
│   │   └── ar.json    # Arabic translations
│   ├── styles/        # Additional styles
│   └── lib/           # Utility functions
└── next.config.js     # Next.js configuration
```

## Internationalization

The website supports three languages:
- English (en)
- Kurdish Sorani (ku)
- Arabic (ar)

Language switching is handled by the Navbar component, and the UI adapts to language-specific requirements (like RTL for Arabic).

## Theme

The website features a dark mode (default) and light mode:
- Dark mode: Dark background with neon blue accents
- Light mode: White background with orange accents

## License

© 2025 Fast X Play. All Rights Reserved.
