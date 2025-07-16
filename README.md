# Academic Portfolio Website - Development Plan

## Key Requirements

- **Modular Architecture**: Code must be organized in a modular structure (features and sections and pages in differents files) to facilitate maintenance and future enhancements
- **Maintainability Focus**: Clean code practices, comprehensive documentation, and consistent coding patterns
- **Multilingual Support**: Full support for English and Portuguese-Brazil, with extensibility for other languages
- **Primary Goals**:
  - Showcase portfolio for academic and professional purposes based on information from aboutme.md and related documents
  - Provide easy communication channels and highlight research areas and specializations
  - Present academic achievements, publications, and projects with appropriate context
- **User Experience**: Intuitive navigation with minimal steps to access key information and contact details
- **Security**: Protection against common web vulnerabilities and secure data handling
- **Performance**: Fast loading times and optimized resource delivery
- **Accessibility**: Ensuring the website is usable by people with various abilities and complies with WCAG guidelines
- **Responsive Design**: Works seamlessly on all devices from mobile to desktop

## Technology Stack

### Frontend

- **Next.js**: React framework for production with server-side rendering and static site generation
  - Better SEO performance than client-side rendered React
  - Built-in image optimization and internationalization
  - API routes eliminate need for separate backend service
- **React.js**: JavaScript library for building user interfaces (utilized within Next.js)
- **TypeScript**: Static type checking for improved code quality and developer experience
- **Chakra UI**: Accessible component library with built-in responsive design features
- **next-i18next**: Internationalization framework for Next.js applications
  - Support for English and Portuguese
  - Easy language switching with persistent preferences
  - Translation files organized by namespaces
- **HTML5 & CSS3**: Modern web standards for structure and styling
- **Responsive Design**: Mobile-first approach with flexbox and grid layouts
  - Functions properly on all device sizes (mobile, tablet, desktop)
  - Navigation remains accessible at all times, even while scrolling
  - Text, images, and UI elements scale appropriately for each screen size
  - Touch-friendly interface elements for mobile users

## Implemented Features

- **Multi-language Support**:
  - Complete internationalization with English and Portuguese support
  - Language switcher in the header and mobile menu
  - Translation files in JSON format organized by namespaces
  - Server-side rendering of translated content for SEO benefits

- **Responsive Navigation**:
  - Mobile-friendly navigation with hamburger menu for smaller screens
  - Sticky header that changes background on scroll
  - Color mode switcher (light/dark)

- **Core Pages**:
  - Home/Landing Page
  - About Me
  - Research
  - Projects
  - Portfolio
  - Publications
  - Contact

## Recommendations Before Development

### 1. Content Organization & Structure

- **Home/Landing Page**: Brief introduction with specialization in autonomous vehicles and data science
- **About Me**: Expanded bio with personal interests (music, languages, etc.)
- **Research**: Dedicated section for autonomous vehicles research work
- **Projects**: Portfolio of key projects with descriptions and links
- **Publications/Presentations**: Scientific presentations at conferences
- **Education & Certifications**: Academic background and specialized courses
- **Contact**: Clear communication channels
- **Portfolio**: Showcase of web development projects with screenshots and demos

### 2. Design Considerations

- **Academic Aesthetic**: Clean, minimalist design reflecting scholarly professionalism
- **Color Scheme**: Colors conveying trust and expertise with selective accent colors
- **Typography**: Clear, readable fonts appropriate for academic content
- **Visual Hierarchy**: Emphasis on research areas and key achievements

## Implementation Progress

### 1. Project Setup

- [x] GitHub Pages deployment configuration using GitHub Actions
- [x] Next.js with TypeScript and Chakra UI setup
- [x] Project structure with components, pages, and styles organization
- [x] Responsive layout components (Header, Footer, Layout)
- [x] Home page implementation with key sections
- [x] Portfolio page for web development projects
- [ ] About Me page
- [ ] Research page
- [ ] Projects page
- [ ] Publications/Presentations page
- [ ] Education & Certifications page
- [ ] Contact page
- [ ] Multilingual support implementation

### 2. Build and Deployment

To build and deploy the site:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Export static site:

   ```bash
   npm run export
   ```

5. Deployment is handled automatically by GitHub Actions when changes are pushed to the master branch.

## Key Documents to Include

- CV_DanielTerraGomes-15-07-2025.pdf
- relatorio_estagio_2025_1_danielTerraGomes.pdf
- TCC.pdf
- aboutme.md
- githubProjects.md
- Links to LinkedIn, GitHub, and Lattes profiles

## Project Documentation

This README will be maintained throughout development to document design decisions, implementation details, and progress updates.
