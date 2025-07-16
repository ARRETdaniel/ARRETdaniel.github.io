// scripts/add-locale.js
const fs = require('fs');
const path = require('path');

// Get the locale from command line arguments
const locale = process.argv[2];

if (!locale) {
  console.error('Please provide a locale code, e.g., "fr" for French');
  process.exit(1);
}

const localesDir = path.join(__dirname, '../public/locales');
const sourceLocale = 'en';
const targetLocaleDir = path.join(localesDir, locale);

// Check if locale already exists
if (fs.existsSync(targetLocaleDir)) {
  console.error(`Locale ${locale} already exists`);
  process.exit(1);
}

// Create directory for the new locale
fs.mkdirSync(targetLocaleDir, { recursive: true });

// Copy all translation files from the source locale to the target locale
const sourceLocaleDir = path.join(localesDir, sourceLocale);
const files = fs.readdirSync(sourceLocaleDir);

files.forEach(file => {
  const sourcePath = path.join(sourceLocaleDir, file);
  const targetPath = path.join(targetLocaleDir, file);
  
  // Read the source file
  const content = fs.readFileSync(sourcePath, 'utf8');
  
  // Write the same content to the target file
  fs.writeFileSync(targetPath, content);
  
  console.log(`Created ${targetPath}`);
});

// Update the next-i18next.config.js file to include the new locale
const configPath = path.join(__dirname, '../next-i18next.config.js');
let configContent = fs.readFileSync(configPath, 'utf8');

// Extract the locales array
const localesMatch = configContent.match(/locales: \[(.*?)\]/s);
if (localesMatch) {
  const localesString = localesMatch[1];
  const locales = localesString.split(',').map(l => l.trim().replace(/['"]/g, ''));
  
  // Add the new locale if it's not already there
  if (!locales.includes(locale)) {
    locales.push(locale);
    const newLocalesString = locales.map(l => `'${l}'`).join(', ');
    configContent = configContent.replace(/locales: \[(.*?)\]/s, `locales: [${newLocalesString}]`);
    
    // Write the updated config back to the file
    fs.writeFileSync(configPath, configContent);
    console.log(`Updated ${configPath} with the new locale`);
  }
}

console.log(`\nLocale ${locale} has been successfully added!`);
console.log(`\nYou can now translate the files in the ${targetLocaleDir} directory.`);
console.log('After translation, restart your development server to see the changes.');
