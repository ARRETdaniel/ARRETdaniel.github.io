import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link as ChakraLink,
  useColorModeValue,
  Icon,
  Flex,
  Heading,
  Button,
  Input,
  FormControl,
  VStack,
  HStack,
  Divider,
  useColorMode
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaResearchgate, FaGoogle } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguageContext } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { colorMode } = useColorMode();
  const { t, isLoading } = useLanguageContext();

  const textColor = useColorModeValue('gray.600', 'gray.400');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('brand.700', 'brand.300');
  const iconHoverColor = useColorModeValue('brand.500', 'brand.300');

  return (
    <Box
      as="footer"
      bg={bgColor}
      color={textColor}
      mt="auto"
      borderTop="1px solid"
      borderColor={borderColor}
    >
      <Container maxW="container.xl" pt={12} pb={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={10}>
          {/* Column 1 - About */}
          <Box>
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              Daniel Terra Gomes
            </Heading>
            <Text fontSize="sm" mb={4}>
              {t('footer.tagline')}
            </Text>
            <HStack spacing={4} mt={4}>
              <ChakraLink
                href="https://github.com/ARRETdaniel"
                isExternal
                aria-label="GitHub"
                _hover={{ color: iconHoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaGithub} boxSize={5} />
              </ChakraLink>
              <ChakraLink
                href="https://www.linkedin.com/in/arretdaniel"
                isExternal
                aria-label="LinkedIn"
                _hover={{ color: iconHoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaLinkedin} boxSize={5} />
              </ChakraLink>
              <ChakraLink
                href="https://twitter.com/arretdaniel"
                isExternal
                aria-label="Twitter"
                _hover={{ color: iconHoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaTwitter} boxSize={5} />
              </ChakraLink>
              <ChakraLink
                href="https://scholar.google.com/citations?user=yourprofileid"
                isExternal
                aria-label="Google Scholar"
                _hover={{ color: iconHoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaGoogle} boxSize={5} />
              </ChakraLink>
              <ChakraLink
                href="https://www.researchgate.net/profile/Your_Profile"
                isExternal
                aria-label="ResearchGate"
                _hover={{ color: iconHoverColor }}
                transition="color 0.3s ease"
              >
                <Icon as={FaResearchgate} boxSize={5} />
              </ChakraLink>
            </HStack>
          </Box>

          {/* Column 2 - Quick Links */}
          <Box>
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              {t('footer.quickLinks')}
            </Heading>
            <VStack align="flex-start" spacing={2}>
              <ChakraLink as={Link} href="/">
                {!isLoading ? t('nav.home') : 'Home'}
              </ChakraLink>
              <ChakraLink as={Link} href="/about">
                {!isLoading ? t('nav.about') : 'About'}
              </ChakraLink>
              <ChakraLink as={Link} href="/research">
                {!isLoading ? t('nav.research') : 'Research'}
              </ChakraLink>
              <ChakraLink as={Link} href="/projects">
                {!isLoading ? t('nav.projects') : 'Projects'}
              </ChakraLink>
              <ChakraLink as={Link} href="/publications">
                {!isLoading ? t('nav.publications') : 'Publications'}
              </ChakraLink>
            </VStack>
          </Box>

          {/* Column 3 - Research Areas */}
          <Box>
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              {!isLoading ? t('footer.researchAreas') : 'Research Areas'}
            </Heading>
            <VStack align="flex-start" spacing={2}>
              <ChakraLink href="#">{!isLoading ? t('footer.autonomousVehicles') : 'Autonomous Vehicles'}</ChakraLink>
              <ChakraLink href="#">{!isLoading ? t('footer.artificialIntelligence') : 'Artificial Intelligence'}</ChakraLink>
              <ChakraLink href="#">{!isLoading ? t('footer.cyberSecurity') : 'Cyber Security'}</ChakraLink>
              <ChakraLink href="#">{!isLoading ? t('footer.machineLearning') : 'Machine Learning'}</ChakraLink>
              <ChakraLink href="#">{!isLoading ? t('footer.computerVision') : 'Computer Vision'}</ChakraLink>
            </VStack>
          </Box>

          {/* Column 4 - Contact */}
          <Box>
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              {!isLoading ? t('footer.contactMe') : "Contact Me"}
            </Heading>
            <VStack align="flex-start" spacing={3}>
              <Text fontSize="sm">
                <Icon as={FaEnvelope} mr={2} />
                danielterra244@gmail.com
              </Text>
              <Button
                as={ChakraLink}
                href="https://www.linkedin.com/in/arretdaniel"
                isExternal
                leftIcon={<FaLinkedin />}
                colorScheme="brand"
                size="sm"
                mt={2}
              >
                {!isLoading ? t('footer.connectLinkedIn') : "Connect on LinkedIn"}
              </Button>
            </VStack>
          </Box>
        </SimpleGrid>

        <Divider borderColor={borderColor} my={6} />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'center' }}
          gap={4}
        >
          <Text fontSize="sm">
            © {currentYear} Daniel Terra Gomes. {t('footer.allRightsReserved')}
          </Text>
          <HStack spacing={4} fontSize="sm">
            <ChakraLink as={Link} href="/privacy">{t('footer.privacy')}</ChakraLink>
            <ChakraLink as={Link} href="/terms">{t('footer.terms')}</ChakraLink>
            <ChakraLink as={Link} href="/cookies">{t('footer.cookies')}</ChakraLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
