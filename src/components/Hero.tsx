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
      p={8}
      shadow="lg"
      borderWidth="1px"
      borderRadius="xl"
      flex="1"
      borderColor={borderColor}
      bg={bgColor}
      whileHover={{
        y: -8,
        boxShadow: "2xl"
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut"
      }}
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top="0"
        right="0"
        width="150px"
        height="150px"
        bg={useColorModeValue('brand.50', 'brand.900')}
        borderRadius="full"
        transform="translate(30%, -30%)"
        opacity="0.2"
        zIndex="0"
      />
      <Box
        display="inline-flex"
        p={4}
        bg={useColorModeValue('brand.50', 'brand.900')}
        borderRadius="lg"
        color="brand.500"
        mb={4}
        alignItems="center"
        justifyContent="center"
        boxShadow="md"
        zIndex="1"
        position="relative"
      >
        {icon}
      </Box>
      <Heading fontSize="xl" mb={3} position="relative" zIndex="1">
        {title}
      </Heading>
      <Text
        color={useColorModeValue('gray.600', 'gray.300')}
        position="relative"
        zIndex="1"
        fontSize="md"
      >
        {text}
      </Text>
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
          spacing={{ base: 12, md: 16 }}
          py={{ base: 16, md: 24 }}
          px={{ base: 6, md: 12 }}
          bgGradient={bgGradient}
          borderRadius="xl"
          boxShadow="lg"
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url("/assets/images/subtle-pattern.png")',
            backgroundRepeat: 'repeat',
            opacity: 0.05,
            zIndex: 0
          }}
          className="texture-bg"
        >
          {/* Left content column */}
          <Stack flex={1} spacing={{ base: 6, md: 10 }} position="relative" zIndex={1}>
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <Text
                color="accent.500"
                fontWeight="bold"
                fontSize="md"
                textTransform="uppercase"
                letterSpacing="wide"
                mb={2}
              >
                {t('hero.greeting')}
              </Text>
            </MotionBox>

            <MotionHeading
              lineHeight={1.1}
              fontWeight={700}
              fontSize={{ base: '4xl', sm: '5xl', lg: '6xl' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Text
                as="span"
                position="relative"
                color={useColorModeValue('gray.800', 'white')}
                bgGradient={useColorModeValue(
                  'linear(to-r, brand.600, accent.600)',
                  'linear(to-r, brand.300, accent.400)'
                )}
                bgClip="text"
              >
                Daniel Terra Gomes
              </Text>
            </MotionHeading>

            <MotionText
              color={useColorModeValue('gray.600', 'gray.300')}
              fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }}
              fontWeight="medium"
              maxW="700px"
              lineHeight="1.6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t('hero.tagline')}
            </MotionText>

            <MotionBox
              display="flex"
              mt={8}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <HStack spacing={6} flexWrap="wrap">
                <Button
                  size="lg"
                  fontWeight="bold"
                  colorScheme="brand"
                  bg="brand.500"
                  px={8}
                  py={7}
                  borderRadius="md"
                  _hover={{
                    bg: 'brand.600',
                    transform: 'translateY(-2px)',
                    boxShadow: 'xl',
                  }}
                  _active={{
                    transform: 'scale(0.98)',
                  }}
                  as={Link}
                  href="/about"
                  rightIcon={<Icon as={FaGraduationCap} />}
                >
                  {t('hero.aboutButton')}
                </Button>
                <Button
                  size="lg"
                  fontWeight="bold"
                  variant="outline"
                  colorScheme="brand"
                  px={8}
                  py={7}
                  borderRadius="md"
                  borderWidth="2px"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    bg: useColorModeValue('gray.50', 'gray.700'),
                  }}
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
            zIndex={1}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <Box
              position="relative"
              height={{ base: '300px', md: '400px', lg: '500px' }}
              rounded="2xl"
              width="full"
              overflow="hidden"
              boxShadow="2xl"
            >
              <Box
                position="absolute"
                top="-10px"
                right="-10px"
                bottom="-10px"
                left="-10px"
                bg={useColorModeValue('brand.50', 'brand.900')}
                opacity="0.2"
                filter="blur(30px)"
              />
              <Image
                alt={t('hero.imageAlt')}
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="/assets/images/hero-banner1.png"
                borderRadius="xl"
                shadow="2xl"
                zIndex={1}
                position="relative"
              />
              <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                borderRadius="xl"
                boxShadow="inset 0 0 20px rgba(0,0,0,0.2)"
                zIndex={2}
              />
            </Box>
          </MotionFlex>
        </Stack>

        {/* Features section */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 8, md: 8 }}
          mt={{ base: 16, md: 20 }}
          px={{ base: 4, md: 0 }}
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
