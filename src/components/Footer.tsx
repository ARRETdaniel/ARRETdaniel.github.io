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
  Image,
  VStack,
  HStack,
  Divider,
  useColorMode,
  VisuallyHidden,
  chakra
} from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaResearchgate, FaGoogle, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
import { useLanguageContext } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionChakraButton = motion(chakra.button);

interface SocialButtonProps {
  label: string;
  href: string;
  icon: React.ReactElement;
}

const SocialButton = ({ label, href, icon }: SocialButtonProps) => {
  // Different animation properties for each social platform
  let animationProps = {
    scale: 1.2,
    rotate: 3,
    y: -2
  };

  // Customize animation based on social platform
  if (label === "GitHub") {
    animationProps = { scale: 1.2, rotate: 5, y: -2 };
  } else if (label === "LinkedIn") {
    animationProps = { scale: 1.15, rotate: -3, y: -3 };
  } else if (label === "Twitter") {
    animationProps = { scale: 1.25, rotate: 2, y: -2 };
  } else if (label === "Google Scholar") {
    animationProps = { scale: 1.2, rotate: -4, y: -3 };
  } else if (label === "ResearchGate") {
    animationProps = { scale: 1.15, rotate: 4, y: -2 };
  }

  return (
    <MotionChakraButton
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      target="_blank"
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      whileHover={animationProps}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
        duration: 0.2
      }}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        color: useColorModeValue('brand.500', 'brand.300')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {icon}
    </MotionChakraButton>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { colorMode } = useColorMode();
  const { t, isLoading, language } = useLanguageContext();

  const textColor = useColorModeValue('gray.600', 'gray.400');
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('brand.700', 'brand.300');
  const iconHoverColor = useColorModeValue('brand.500', 'brand.300');
  const linkColor = useColorModeValue('gray.600', 'gray.400');
  const linkHoverColor = useColorModeValue('brand.500', 'brand.300');

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              Daniel Terra Gomes
            </Heading>
            <Text fontSize="sm" mb={4}>
              {t('footer.tagline')}
            </Text>
            <HStack spacing={4} mt={4}>
              <SocialButton
                label="GitHub"
                href="https://github.com/ARRETdaniel"
                icon={<Icon as={FaGithub} boxSize={5} />}
              />
              <SocialButton
                label="LinkedIn"
                href="https://www.linkedin.com/in/arretdaniel"
                icon={<Icon as={FaLinkedin} boxSize={5} />}
              />
              <SocialButton
                label="Twitter"
                href="https://twitter.com/arretdaniel"
                icon={<Icon as={FaTwitter} boxSize={5} />}
              />
              <SocialButton
                label="Google Scholar"
                href="https://scholar.google.com/citations?user=yourprofileid"
                icon={<Icon as={FaGoogle} boxSize={5} />}
              />
              <SocialButton
                label="ResearchGate"
                href="https://www.researchgate.net/profile/Your_Profile"
                icon={<Icon as={FaResearchgate} boxSize={5} />}
              />
            </HStack>
          </MotionBox>

          {/* Column 2 - Quick Links */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              {t('footer.quickLinks')}
            </Heading>
            <VStack align="flex-start" spacing={2}>
              <ChakraLink
                as={Link}
                href="/"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('nav.home') : 'Home'}
              </ChakraLink>
              <ChakraLink
                as={Link}
                href="/about"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('nav.about') : 'About'}
              </ChakraLink>
              <ChakraLink
                as={Link}
                href="/research"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('nav.research') : 'Research'}
              </ChakraLink>
              <ChakraLink
                as={Link}
                href="/projects"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('nav.projects') : 'Projects'}
              </ChakraLink>
              <ChakraLink
                as={Link}
                href="/publications"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('nav.publications') : 'Publications'}
              </ChakraLink>
            </VStack>
          </MotionBox>

          {/* Column 3 - Research Areas */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              {!isLoading ? t('footer.researchAreas') : 'Research Areas'}
            </Heading>
            <VStack align="flex-start" spacing={2}>
              <ChakraLink
                href="#"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('footer.autonomousVehicles') : 'Autonomous Vehicles'}
              </ChakraLink>
              <ChakraLink
                href="#"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('footer.artificialIntelligence') : 'Artificial Intelligence'}
              </ChakraLink>
              <ChakraLink
                href="#"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('footer.cyberSecurity') : 'Cyber Security'}
              </ChakraLink>
              <ChakraLink
                href="#"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('footer.machineLearning') : 'Machine Learning'}
              </ChakraLink>
              <ChakraLink
                href="#"
                color={linkColor}
                _hover={{ color: linkHoverColor, transform: 'translateX(5px)' }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('footer.computerVision') : 'Computer Vision'}
              </ChakraLink>
            </VStack>
          </MotionBox>

          {/* Column 4 - Contact */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Heading as="h3" size="md" mb={4} color={headingColor}>
              {!isLoading ? t('footer.contactMe') : "Contact Me"}
            </Heading>
            <VStack align="flex-start" spacing={3}>
              <HStack spacing={2}>
                <Icon as={FaEnvelope} color={headingColor} />
                <Text fontSize="sm">
                  danielterra244@gmail.com
                </Text>
              </HStack>
              <Button
                as={ChakraLink}
                href="https://www.linkedin.com/in/arretdaniel"
                isExternal
                leftIcon={<FaLinkedin />}
                colorScheme="brand"
                size="sm"
                mt={2}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md'
                }}
                transition="all 0.3s ease"
              >
                {!isLoading ? t('footer.connectLinkedIn') : "Connect on LinkedIn"}
              </Button>
            </VStack>
          </MotionBox>
        </SimpleGrid>

        <Divider borderColor={borderColor} my={6} />

        <MotionFlex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'center' }}
          gap={4}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Text fontSize="sm">
            © {currentYear} Daniel Terra Gomes. {t('footer.allRightsReserved')}
          </Text>
          <HStack spacing={4} fontSize="sm">
            <ChakraLink
              as={Link}
              href="/privacy"
              color={linkColor}
              _hover={{ color: linkHoverColor }}
              transition="color 0.3s ease"
            >
              {t('footer.privacy')}
            </ChakraLink>
            <ChakraLink
              as={Link}
              href="/terms"
              color={linkColor}
              _hover={{ color: linkHoverColor }}
              transition="color 0.3s ease"
            >
              {t('footer.terms')}
            </ChakraLink>
            <ChakraLink
              as={Link}
              href="/cookies"
              color={linkColor}
              _hover={{ color: linkHoverColor }}
              transition="color 0.3s ease"
            >
              {t('footer.cookies')}
            </ChakraLink>
            <ChakraLink
              onClick={scrollToTop}
              cursor="pointer"
              display="flex"
              alignItems="center"
              color={linkColor}
              _hover={{ color: linkHoverColor }}
              transition="color 0.3s ease"
            >
              <Text mr={2}>{t('footer.backToTop')}</Text>
              <Icon as={FaArrowUp} />
            </ChakraLink>
          </HStack>
        </MotionFlex>
      </Container>
    </Box>
  );
};

export default Footer;
