# Multi-Language Support Guide

This website supports multiple languages using next-i18next. Currently, the following languages are supported:

- English (en)
- Portuguese (pt)

## How It Works

The translation system uses JSON files located in the `public/locales` directory. Each language has its own subdirectory with translation files.

### Key Concepts

1. **Namespaces**: Translation files are organized into namespaces. Currently, we use a single namespace called `common`.
2. **Keys**: Each translatable string is identified by a key that is hierarchically organized.
3. **Language Switcher**: The language switcher component in the header allows users to switch between available languages.

## Adding Translations

To translate content:

1. Find the appropriate translation file in `public/locales/[language]/common.json`
2. Add or modify the translation keys and values
3. Restart the development server to see changes

### Example Translation Structure

```json
{
  "nav": {
    "home": "Home",
    "about": "About"
  },
  "home": {
    "title": "Welcome to my portfolio"
  }
}
```

## Adding a New Language

To add a new language:

1. Run the helper script:

```bash
npm run add-locale [language-code]
# Example: npm run add-locale fr
```

2. Translate all strings in the newly created translation files
3. Restart your development server

## Using Translations in Components

To use translations in your React components:

```tsx
import { useTranslation } from 'next-i18next';

const MyComponent = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <h1>{t('page.title')}</h1>
      <p>{t('page.description')}</p>
    </div>
  );
};
```

## Server-Side Translations

For server-side rendering, add the following to your page components:

```tsx
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};
```

## Best Practices

1. **Use Hierarchical Keys**: Organize translation keys in a hierarchical structure (e.g., `nav.home`, `home.title`)
2. **Keep Translations Simple**: Avoid complex formatting or HTML in translation strings
3. **Use Variables**: For dynamic content, use variables like `t('greeting', { name: 'John' })`
4. **Add Context**: Add comments in the translation files to provide context for translators

## Troubleshooting

If translations aren't working as expected:

1. Check that the translation key exists in all language files
2. Ensure the component is using the correct namespace
3. Verify that getStaticProps or getServerSideProps includes the serverSideTranslations function
4. Restart the development server after making changes to translation files
