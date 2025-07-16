import React, { Suspense } from 'react';
import { Button } from '@chakra-ui/react';

// Define the props interface
interface LanguageSwitcherProps {
  fullWidth?: boolean;
}

// Placeholder component shown during loading
const LanguagePlaceholder = ({ fullWidth = false }: LanguageSwitcherProps) => (
  <Button
    variant="ghost"
    size="sm"
    width={fullWidth ? "full" : "auto"}
    justifyContent={fullWidth ? "space-between" : "center"}
    borderRadius="md"
    fontWeight="medium"
  >
    Lang
  </Button>
);

// Using NoSSR pattern with a simple component
const LanguageSwitcherWrapper: React.FC<LanguageSwitcherProps> = (props) => {
  // For server-side rendering, just return the placeholder
  if (typeof window === 'undefined') {
    return <LanguagePlaceholder {...props} />;
  }

  // For client-side, we can safely require the component
  // This approach avoids the dynamic import issues
  const LanguageSwitcher = require('./LanguageSwitcher').default;
  return <LanguageSwitcher {...props} />;
};

export default LanguageSwitcherWrapper;
