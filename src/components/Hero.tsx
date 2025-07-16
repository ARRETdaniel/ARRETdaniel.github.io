import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Stack,
  Button,
  Flex,
  Image,
  useColorModeValue,
  HStack,
  Icon,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FaGraduationCap, FaLaptopCode, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Motion components for animations
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

interface FeatureProps {
  icon: React.ReactElement;
  title: string;
  text: string;
}

// Feature card component for highlighting key aspects
const Feature = ({ icon, title, text }: FeatureProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  return (
    <MotionBox
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      flex="1"
      borderColor={borderColor}
      bg={bgColor}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        display="inline-block"
        p={2}
        bg={useColorModeValue('brand.50', 'brand.900')}
        borderRadius="md"
        color="brand.500"
        mb={3}
      >
        {icon}
      </Box>
      <Heading fontSize="xl" mb={2}>
        {title}
      </Heading>
      <Text>{text}</Text>
    </MotionBox>
  );
};

interface HeroProps {
  t: (key: string) => string;
}

const Hero = ({ t }: HeroProps) => {
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.50, neutrals.50)',
    'linear(to-r, gray.900, gray.800)'
  );
  
  return (
    <Box as="section" pt={{ base: 16, md: 24 }} pb={{ base: 10, md: 20 }}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 8, md: 12 }}
          px={{ base: 4, md: 8 }}
          bgGradient={bgGradient}
          borderRadius="lg"
          className="texture-bg"
        >
          {/* Left content column */}
          <Stack flex={1} spacing={{ base: 5, md: 8 }}>
            <MotionHeading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '5xl' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Text
                as="span"
                position="relative"
                color="brand.600"
                _after={{
                  content: "''",
                  width: 'full',
                  height: '20%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'brand.200',
                  zIndex: -1,
                }}
              >
                {t('hero.greeting')}
              </Text>
              <br />
              <Text as="span" color={useColorModeValue('gray.800', 'white')}>
                Daniel Terra Gomes
              </Text>
            </MotionHeading>
            
            <MotionText
              color={useColorModeValue('gray.600', 'gray.300')}
              fontSize={{ base: 'lg', sm: 'xl' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('hero.tagline')}
            </MotionText>
            
            <MotionBox
              display="flex"
              mt={4}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  size="lg"
                  fontWeight="bold"
                  colorScheme="brand"
                  bg="brand.500"
                  px={6}
                  _hover={{
                    bg: 'brand.600',
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                  as={Link}
                  href="/about"
                >
                  {t('hero.aboutButton')}
                </Button>
                <Button
                  size="lg"
                  fontWeight="bold"
                  variant="outline"
                  colorScheme="brand"
                  px={6}
                  as={Link}
                  href="/contact"
                >
                  {t('hero.contactButton')}
                </Button>
              </HStack>
            </MotionBox>
          </Stack>

          {/* Right image column */}
          <MotionFlex
            flex={1}
            justify="center"
            align="center"
            position="relative"
            w="full"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box
              position="relative"
              height={{ base: '300px', md: '400px', lg: '500px' }}
              rounded="2xl"
              width="full"
              overflow="hidden"
            >
              <Image
                alt={t('hero.imageAlt')}
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="/assets/images/hero-banner1.png" // Use one of your profile images
                borderRadius="xl"
                shadow="2xl"
              />
            </Box>
          </MotionFlex>
        </Stack>

        {/* Features section */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 6 }}
          mt={{ base: 12, md: 16 }}
        >
          <Feature
            icon={<Icon as={FaGraduationCap} w={6} h={6} />}
            title={t('hero.feature1.title')}
            text={t('hero.feature1.text')}
          />
          <Feature
            icon={<Icon as={FaLaptopCode} w={6} h={6} />}
            title={t('hero.feature2.title')}
            text={t('hero.feature2.text')}
          />
          <Feature
            icon={<Icon as={FaBookOpen} w={6} h={6} />}
            title={t('hero.feature3.title')}
            text={t('hero.feature3.text')}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
