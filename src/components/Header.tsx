import { useState } from 'react';
import { Box, Flex, HStack, IconButton, useDisclosure, useColorModeValue, Button, Container, Stack, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import LanguageSwitcher from './LanguageSwitcher';

// Navigation links data with translation keys
const Links = [
  { name: 'nav.home', path: '/' },
  { name: 'nav.about', path: '/about' },
  { name: 'nav.research', path: '/research' },
  { name: 'nav.projects', path: '/projects' },
  { name: 'nav.portfolio', path: '/portfolio' },
  { name: 'nav.publications', path: '/publications' },
  { name: 'nav.contact', path: '/contact' },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const [scrolled, setScrolled] = useState(false);
  const { t } = useTranslation('common');

  // Change header background on scroll
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }

  const bgColor = useColorModeValue(
    scrolled ? 'white' : 'transparent',
    scrolled ? 'gray.800' : 'transparent'
  );
  const boxShadow = scrolled ? 'sm' : 'none';

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg={bgColor}
      boxShadow={boxShadow}
      transition="all 0.3s ease"
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link href="/" passHref>
            <Box cursor="pointer" fontWeight="bold" fontSize="xl">
              Daniel Terra Gomes
            </Box>
          </Link>

          <HStack spacing={8} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <Link key={link.name} href={link.path} passHref>
                  <Button variant="ghost">{t(link.name)}</Button>
                </Link>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'} gap={2}>
            <LanguageSwitcher />

            <Button onClick={toggleColorMode} size="md" variant="ghost">
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile menu drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="start">
              {Links.map((link) => (
                <Link key={link.name} href={link.path} passHref>
                  <Button variant="ghost" w="full" justifyContent="flex-start" onClick={onClose}>
                    {t(link.name)}
                  </Button>
                </Link>
              ))}
              <LanguageSwitcher />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
