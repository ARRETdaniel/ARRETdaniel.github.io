import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Button,
  Container,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
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
  const router = useRouter();

  // Change header background on scroll with useEffect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const bgColor = useColorModeValue(
    scrolled ? 'white' : 'transparent',
    scrolled ? 'gray.800' : 'transparent'
  );
  const boxShadow = scrolled ? 'lg' : 'none';
  const textColor = useColorModeValue('brand.700', 'white');
  const activeColor = useColorModeValue('brand.500', 'brand.300');
  const logoColor = useColorModeValue('brand.700', 'white');

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={100}
      bg={bgColor}
      boxShadow={boxShadow}
      transition="all 0.3s ease"
      backdropFilter={scrolled ? "blur(10px)" : "none"}
    >
      <Container maxW="container.xl">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box as={Link} href="/" _hover={{ textDecoration: 'none' }}>
            <Flex
              cursor="pointer"
              alignItems="center"
              gap={2}
            >
              <Box
                position="relative"
                width="40px"
                height="40px"
                borderRadius="full"
                overflow="hidden"
                border="2px solid"
                borderColor="brand.500"
              >
                {/* Replace with your logo or profile image */}
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  textAlign="center"
                  lineHeight="36px"
                  color={logoColor}
                >
                  DT
                </Text>
              </Box>
              <Text
                fontWeight="bold"
                fontSize="xl"
                color={textColor}
                letterSpacing="tight"
              >
                Daniel Terra Gomes
              </Text>
            </Flex>
          </Box>

          <HStack spacing={6} alignItems={'center'}>
            <HStack
              as={'nav'}
              spacing={1}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => {
                const isActive = router.pathname === link.path;
                return (
                  <Button
                    key={link.name}
                    as={Link}
                    href={link.path}
                    variant="ghost"
                    position="relative"
                    color={isActive ? activeColor : textColor}
                    fontWeight={isActive ? "bold" : "medium"}
                    _after={{
                      content: isActive ? '""' : 'none',
                      position: 'absolute',
                      bottom: '0',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '20px',
                      height: '2px',
                      bg: 'brand.500',
                      borderRadius: 'full',
                    }}
                    _hover={{
                      bg: 'transparent',
                      color: activeColor,
                      transform: 'translateY(-2px)',
                    }}
                  >
                    {t(link.name)}
                  </Button>
                );
              })}
            </HStack>
          </HStack>

          <Flex alignItems={'center'} gap={2}>
            <LanguageSwitcher />

            <Button
              onClick={toggleColorMode}
              size="md"
              variant="ghost"
              borderRadius="full"
              _hover={{
                bg: useColorModeValue('gray.100', 'gray.700'),
              }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>

            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
              variant="outline"
              borderColor="brand.300"
              borderRadius="md"
            />
          </Flex>
        </Flex>
      </Container>

      {/* Mobile menu drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={useColorModeValue('white', 'gray.800')}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px" color={textColor}>Menu</DrawerHeader>

          <DrawerBody>
            <VStack spacing={4} align="start" pt={4}>
              {Links.map((link) => {
                const isActive = router.pathname === link.path;
                return (
                  <Button
                    key={link.name}
                    as={Link}
                    href={link.path}
                    variant="ghost"
                    w="full"
                    justifyContent="flex-start"
                    onClick={onClose}
                    color={isActive ? activeColor : textColor}
                    fontWeight={isActive ? "bold" : "medium"}
                    borderLeft={isActive ? "3px solid" : "none"}
                    borderColor="brand.500"
                    borderRadius="sm"
                    pl={isActive ? 4 : 2}
                    _hover={{
                      bg: colorMode === 'light' ? 'gray.50' : 'gray.700',
                      color: activeColor,
                    }}
                  >
                    {t(link.name)}
                  </Button>
                );
              })}

              <Box pt={6} w="full" borderTop="1px solid" borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}>
                <Text fontSize="sm" fontWeight="medium" mb={4} color={colorMode === 'light' ? 'gray.600' : 'gray.400'}>
                  {t('settings')}
                </Text>
                <Flex justifyContent="space-between" alignItems="center">
                  <Text fontSize="sm">{t('darkMode')}</Text>
                  <Button
                    onClick={toggleColorMode}
                    size="sm"
                    variant="ghost"
                    borderRadius="full"
                  >
                    {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                  </Button>
                </Flex>
                <Box mt={4}>
                  <Text fontSize="sm" mb={2}>{t('language')}</Text>
                  <LanguageSwitcher fullWidth />
                </Box>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
