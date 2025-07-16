import { useRouter } from 'next/router';
import { Button, Menu, MenuButton, MenuList, MenuItem, HStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

interface LanguageSwitcherProps {
  fullWidth?: boolean;
}

const LanguageSwitcher = ({ fullWidth = false }: LanguageSwitcherProps) => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        rightIcon={<ChevronDownIcon />}
        variant="ghost"
        size="sm"
        width={fullWidth ? "full" : "auto"}
        justifyContent={fullWidth ? "space-between" : "center"}
        borderRadius="md"
        fontWeight="medium"
      >
        {locale === 'en' ? 'EN' : 'PT'}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('pt')}>Português</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default LanguageSwitcher;
