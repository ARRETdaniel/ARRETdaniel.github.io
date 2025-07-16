import dynamic from 'next/dynamic';
import { Button } from '@chakra-ui/react';

// Dynamically import the real LanguageSwitcher with proper handling
const DynamicLanguageSwitcher = dynamic(
  () => import('./LanguageSwitcher').then(mod => mod.default),
  {
    ssr: false,
    loading: () => <Button size="sm" variant="ghost">...</Button>
  }
);

interface SafeLanguageSwitcherProps {
  fullWidth?: boolean;
}

/**
 * This component safely wraps the LanguageSwitcher to prevent SSR issues
 */
const SafeLanguageSwitcher = ({ fullWidth = false }: SafeLanguageSwitcherProps) => {
  return <DynamicLanguageSwitcher fullWidth={fullWidth} />;
};

export default SafeLanguageSwitcher;
