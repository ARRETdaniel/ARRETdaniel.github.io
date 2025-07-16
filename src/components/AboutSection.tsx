import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Image,
  Stack,
  Icon,
  useColorModeValue,
  HStack,
  VStack,
  Badge,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCode, FaCar, FaDatabase, FaChartLine, FaUniversity, FaDownload, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface SkillCardProps {
  icon: React.ReactElement;
  title: string;
  children: React.ReactNode;
  delay?: number;
}

const SkillCard = ({ icon, title, children, delay = 0 }: SkillCardProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      p={5}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      flex="1"
      bgColor={bgColor}
      borderColor={borderColor}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1),0 10px 10px -5px rgba(0,0,0,0.04)' }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <Flex direction="column" height="100%">
        <Flex
          alignItems="center"
          mb={4}
        >
          <Box
            bg={useColorModeValue('brand.50', 'brand.900')}
            p={2}
            borderRadius="md"
            color="brand.500"
            mr={3}
          >
            {icon}
          </Box>
          <Heading fontSize="xl">{title}</Heading>
        </Flex>
        <Box mt={2} flexGrow={1}>
          {children}
        </Box>
      </Flex>
    </MotionBox>
  );
};

interface AboutSectionProps {
  t: (key: string) => string;
  isFullPage?: boolean;
}

const AboutSection = ({ t, isFullPage = false }: AboutSectionProps) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <Box as="section" py={{ base: 12, md: isFullPage ? 24 : 20 }} bg={bgColor}>
      <Container maxW="container.xl">
        <Stack spacing={{ base: 8, md: 12 }} direction={{ base: 'column', lg: 'row' }} align="center">
          {/* Image column */}
          <MotionFlex
            flex={1}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Box
              position="relative"
              height={{ base: '300px', md: '400px', lg: '500px' }}
              rounded="2xl"
              width="full"
              overflow="hidden"
              maxW={{ base: "full", lg: "400px" }}
              mx="auto"
            >
              <Image
                alt={t('about.imageAlt')}
                fit="cover"
                align="center"
                w="100%"
                h="100%"
                src="/assets/images/about-banner1.png" // One of your academic/research images
                borderRadius="xl"
                shadow="xl"
              />
            </Box>
          </MotionFlex>

          {/* Text column */}
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h2"
              size="xl"
              mb={6}
              position="relative"
              _after={{
                content: '""',
                display: 'block',
                width: '70px',
                height: '4px',
                background: 'brand.500',
                marginTop: '16px',
              }}
            >
              {t('about.title')}
            </Heading>

            <Text fontSize="lg" color={textColor} mb={6}>
              {t('about.summary')}
            </Text>

            <VStack spacing={4} align="start" mb={8}>
              {/* Education */}
              <HStack spacing={3}>
                <Icon as={FaUniversity} color="brand.500" boxSize={5} />
                <Box>
                  <Text fontWeight="bold">{t('about.education.degree')}</Text>
                  <Text fontSize="sm" color={textColor}>{t('about.education.university')}</Text>
                </Box>
              </HStack>

              {/* Specialization */}
              <HStack spacing={3}>
                <Icon as={FaCar} color="brand.500" boxSize={5} />
                <Box>
                  <Text fontWeight="bold">{t('about.specialization')}</Text>
                </Box>
              </HStack>
            </VStack>

            {/* Research Interests */}
            <Heading fontSize="lg" mb={3}>
              {t('about.interests.title')}
            </Heading>

            <HStack spacing={2} flexWrap="wrap" mb={6}>
              {['autonomous vehicles', 'machine learning', 'computer vision', 'data science', 'robotics'].map((interest) => (
                <Badge
                  key={interest}
                  variant="research"
                  fontSize="sm"
                  textTransform="capitalize"
                  mb={2}
                >
                  {t(`about.interests.${interest}`) || interest}
                </Badge>
              ))}
            </HStack>
          </MotionBox>
        </Stack>

        {/* Skills grid */}
        <Heading fontSize="2xl" mt={16} mb={8} textAlign="center">
          {t('about.skills.title')}
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          <SkillCard
            icon={<Icon as={FaCode} w={6} h={6} />}
            title={t('about.skills.programming.title')}
            delay={0.1}
          >
            <Text mb={4}>{t('about.skills.programming.description')}</Text>
            <HStack spacing={2} flexWrap="wrap">
              {['Python', 'TypeScript', 'JavaScript', 'C++', 'Java'].map((skill) => (
                <Badge key={skill} variant="skill" mb={2}>
                  {skill}
                </Badge>
              ))}
            </HStack>
          </SkillCard>

          <SkillCard
            icon={<Icon as={FaCar} w={6} h={6} />}
            title={t('about.skills.autonomousVehicles.title')}
            delay={0.2}
          >
            <Text mb={4}>{t('about.skills.autonomousVehicles.description')}</Text>
            <HStack spacing={2} flexWrap="wrap">
              {['ROS', 'SLAM', 'Perception', 'Path Planning', 'Sensor Fusion'].map((skill) => (
                <Badge key={skill} variant="skill" mb={2}>
                  {skill}
                </Badge>
              ))}
            </HStack>
          </SkillCard>

          <SkillCard
            icon={<Icon as={FaDatabase} w={6} h={6} />}
            title={t('about.skills.dataScience.title')}
            delay={0.3}
          >
            <Text mb={4}>{t('about.skills.dataScience.description')}</Text>
            <HStack spacing={2} flexWrap="wrap">
              {['Machine Learning', 'TensorFlow', 'PyTorch', 'Data Analysis', 'Computer Vision'].map((skill) => (
                <Badge key={skill} variant="skill" mb={2}>
                  {skill}
                </Badge>
              ))}
            </HStack>
          </SkillCard>
        </SimpleGrid>

        {isFullPage && (
          <Flex justify="center" mt={12}>
            <Button
              as="a"
              href="/CV_DanielTerraGomes-15-07-2025.pdf"
              target="_blank"
              colorScheme="brand"
              size="lg"
              leftIcon={<Icon as={FaDownload} />}
              mr={4}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              {t('about.downloadCV')}
            </Button>
            <Button
              as={Link}
              href="/contact"
              colorScheme="accent"
              size="lg"
              leftIcon={<Icon as={FaEnvelope} />}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              {t('about.contactMe')}
            </Button>
          </Flex>
        )}
      </Container>
    </Box>
  );
};

export default AboutSection;
