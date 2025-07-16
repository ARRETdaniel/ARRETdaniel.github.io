# Installation Guide

To install all required dependencies for this project, follow these steps:

## Prerequisites

- Node.js (version 14.x or newer)
- npm or yarn package manager

## Steps

1. Open your terminal

2. Navigate to the project directory:
   ```bash
   cd path/to/ARRETdaniel.github.io
   ```

3. Install all dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

## List of Key Dependencies

This project uses the following main dependencies:

### Core Dependencies
- **Next.js**: React framework for server-side rendering and static site generation
- **React**: JavaScript library for building user interfaces
- **TypeScript**: Typed superset of JavaScript
- **Chakra UI**: Component library with built-in accessibility features

### Internationalization
- **next-i18next**: Internationalization framework for Next.js

### UI and Styling
- **@chakra-ui/react**: Component library
- **@chakra-ui/icons**: Icon library for Chakra UI
- **@emotion/react** & **@emotion/styled**: CSS-in-JS libraries
- **framer-motion**: Animation library
- **react-icons**: Icon library

### Utilities
- **react-slick** & **slick-carousel**: Carousel/slider component

## Development Dependencies
- **ESLint**: JavaScript linter
- **TypeScript Types**: Type definitions for various libraries

## Troubleshooting

If you encounter any issues during installation:

1. Make sure your Node.js version is up to date
2. Try clearing npm cache: `npm cache clean --force`
3. Delete the `node_modules` folder and `package-lock.json` file, then run `npm install` again
4. Check for any error messages and search for solutions online

If problems persist, please open an issue on GitHub.

## Next Steps

After successfully installing dependencies:

1. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

Happy coding!
