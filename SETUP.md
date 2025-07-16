# Portfolio Website Setup Guide

This guide will help you set up and run the academic portfolio website locally.

## Prerequisites

- Node.js (version 14.x or newer)
- npm or yarn package manager

## Installation

1. Clone the repository

```bash
git clone https://github.com/ARRETdaniel/ARRETdaniel.github.io.git
cd ARRETdaniel.github.io
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

## Development

To run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Building for Production

To build the website for production:

```bash
npm run build
# or
yarn build
```

## Deployment to GitHub Pages

The website is configured to be deployed to GitHub Pages. The deployment process is controlled by the GitHub Actions workflow in `.github/workflows/deploy.yml`.

To manually trigger a deployment:

1. Go to the Actions tab in your GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

### Automatic Deployment

By default, the deployment workflow is configured to run:

- When changes are pushed to the `main` branch
- When manually triggered via the GitHub Actions interface

## Project Structure

```plaintext
ARRETdaniel.github.io/
├── .github/             # GitHub Actions workflows
├── public/              # Static files
│   ├── locales/         # Translation files
│   │   ├── en/          # English translations
│   │   └── pt/          # Portuguese translations
├── src/                 # Source code
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components and routes
│   ├── styles/          # Global styles
│   └── utils/           # Utility functions
├── .gitignore           # Git ignore file
├── next.config.js       # Next.js configuration
├── next-i18next.config.js # i18n configuration
├── package.json         # Project dependencies
├── README.md            # Project documentation
└── tsconfig.json        # TypeScript configuration
```

## Multi-language Support

The website supports both English and Portuguese languages. To add or modify translations:

1. Edit the translation files in `public/locales/[language]/common.json`
2. Restart the development server to see changes

To add a new language:

1. Create a new folder in `public/locales/` with the language code (e.g., `fr` for French)
2. Copy the structure from an existing language folder
3. Translate all strings in the JSON files
4. Add the new language to the `next-i18next.config.js` file

## Customizing Content

### Personal Information

Edit the content in the page components to reflect your personal information:

- `src/pages/index.tsx` - Home page
- `src/pages/about.tsx` - About page
- `src/pages/research/index.tsx` - Research page
- `src/pages/projects.tsx` - Projects page
- `src/pages/portfolio.tsx` - Portfolio page
- `src/pages/publications/index.tsx` - Publications page
- `src/pages/contact.tsx` - Contact page

### Adding New Pages

To add a new page:

1. Create a new file in the `src/pages` directory
2. Add a link to the page in the `Header.tsx` component
3. Add translations for the page title in the locale files

## Styling Customization

The website uses Chakra UI for styling. To customize the appearance:

1. Edit the theme in `src/pages/_app.tsx`
2. Modify component styles in their respective files

## Contact and Support

If you encounter any issues or need help with customization, please open an issue on GitHub or contact the developer directly.

---

Happy coding!
