import { useRouter } from 'next/router';
import { Button, Menu, MenuButton, MenuList, MenuItem, HStack } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const changeLanguage = (newLocale: string) => {
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="ghost" size="sm">
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
