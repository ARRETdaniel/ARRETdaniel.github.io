import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Tag,
  HStack,
  VStack,
  useColorModeValue,
  Button,
  LinkBox,
  LinkOverlay,
  Image,
  Container
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Link from 'next/link';

// Motion components
const MotionBox = motion(Box);
const MotionLinkBox = motion(LinkBox);

interface GithubProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  index: number;
}

const GithubProject = ({ title, description, image, tags, githubUrl, demoUrl, index }: GithubProjectProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  // Define concrete color values for hover animation
  const hoverBorderColor = useColorModeValue('#658B61', '#9DB49A'); // brand.500 and brand.300

  return (
    <MotionLinkBox
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg={bgColor}
      borderColor={borderColor}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: 'lg',
        borderColor: hoverBorderColor
      }}
      display="flex"
      flexDirection="column"
      height="100%"
    >
      <Box position="relative" height="200px" overflow="hidden">
        <Image
          src={image}
          alt={title}
          objectFit="cover"
          width="100%"
          height="100%"
          transition="transform 0.3s ease"
          _groupHover={{ transform: 'scale(1.05)' }}
        />
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0,0,0,0.3)"
          opacity="0"
          transition="opacity 0.3s ease"
          _groupHover={{ opacity: 1 }}
        />
      </Box>

      <VStack p={5} align="start" spacing={4} flex="1" justifyContent="space-between">
        <Box>
          <LinkOverlay href={githubUrl} isExternal>
            <Heading size="md" mb={2}>{title}</Heading>
          </LinkOverlay>
          <Text noOfLines={3} color={useColorModeValue('gray.600', 'gray.400')}>
            {description}
          </Text>
        </Box>

        <Box width="100%">
          <HStack spacing={2} mb={4} flexWrap="wrap">
            {tags.map((tag, idx) => (
              <Tag
                key={idx}
                size="sm"
                colorScheme={
                  idx % 5 === 0 ? 'brand' :
                  idx % 5 === 1 ? 'academic' :
                  idx % 5 === 2 ? 'accent' :
                  idx % 5 === 3 ? 'green' :
                  'blue'
                }
                mt={idx > 4 ? 2 : 0}
              >
                {tag}
              </Tag>
            ))}
          </HStack>

          <HStack spacing={3}>
            <Button
              as="a"
              href={githubUrl}
              target="_blank"
              size="sm"
              leftIcon={<Icon as={FaGithub} />}
              variant="outline"
              colorScheme="brand"
            >
              Code
            </Button>
            {demoUrl && (
              <Button
                as="a"
                href={demoUrl}
                target="_blank"
                size="sm"
                leftIcon={<Icon as={FaExternalLinkAlt} />}
                colorScheme="brand"
              >
                Demo
              </Button>
            )}
          </HStack>
        </Box>
      </VStack>
    </MotionLinkBox>
  );
};

interface GithubProjectsSectionProps {
  t: (key: string) => string;
}

const GithubProjectsSection = ({ t }: GithubProjectsSectionProps) => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'white');

  const projects = [
    {
      title: t('github.projects.project1.title'),
      description: t('github.projects.project1.description'),
      image: '/assets/images/project-1.png',
      tags: ['React', 'TypeScript', 'Next.js', 'Chakra UI'],
      githubUrl: 'https://github.com/ARRETdaniel/portfolio',
      demoUrl: 'https://arretdaniel.github.io/',
      index: 0
    },
    {
      title: t('github.projects.project2.title'),
      description: t('github.projects.project2.description'),
      image: '/assets/images/project-2.png',
      tags: ['Python', 'Computer Vision', 'PyTorch', 'Machine Learning'],
      githubUrl: 'https://github.com/ARRETdaniel/autonomousVehicles',
      index: 1
    },
    {
      title: t('github.projects.project3.title'),
      description: t('github.projects.project3.description'),
      image: '/assets/images/project-3.png',
      tags: ['JavaScript', 'React', 'Redux', 'Firebase'],
      githubUrl: 'https://github.com/ARRETdaniel/webDev',
      demoUrl: 'https://arretdaniel.github.io/webDev/',
      index: 2
    },
    {
      title: t('github.projects.project4.title'),
      description: t('github.projects.project4.description'),
      image: '/assets/images/project-4.png',
      tags: ['C++', 'Embedded Systems', 'IoT', 'Arduino'],
      githubUrl: 'https://github.com/ARRETdaniel/embeddedSystems',
      index: 3
    },
    {
      title: t('github.projects.project5.title'),
      description: t('github.projects.project5.description'),
      image: '/assets/images/project-5.png',
      tags: ['Node.js', 'Express', 'MongoDB', 'REST API'],
      githubUrl: 'https://github.com/ARRETdaniel/backendAPI',
      index: 4
    },
    {
      title: t('github.projects.project6.title'),
      description: t('github.projects.project6.description'),
      image: '/assets/images/project-6.png',
      tags: ['Python', 'Data Science', 'NumPy', 'Pandas', 'Matplotlib'],
      githubUrl: 'https://github.com/ARRETdaniel/dataScience',
      index: 5
    }
  ];

  return (
    <Box
      as="section"
      py={{ base: 20, md: 32 }}
      bg={bgColor}
      position="relative"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        bgGradient: 'linear(to-r, transparent, gray.200, transparent)',
      }}
    >
      <Container maxW="container.xl">
        {/* Section header */}
        <MotionBox
          textAlign="center"
          mb={{ base: 16, md: 20 }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          position="relative"
          zIndex={1}
        >
          <Text
            color="accent.500"
            fontWeight="bold"
            fontSize="sm"
            textTransform="uppercase"
            letterSpacing="wide"
            mb={3}
          >
            {t('github.caption')}
          </Text>
          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            color={headingColor}
            mb={6}
            position="relative"
            display="inline-block"
          >
            {t('github.title')}
          </Heading>
          <Text
            fontSize={{ base: "lg", md: "xl" }}
            maxW="3xl"
            mx="auto"
            color={useColorModeValue('gray.600', 'gray.400')}
            lineHeight="tall"
          >
            {t('github.subtitle')}
          </Text>
        </MotionBox>

        {/* Projects Grid */}
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 8, md: 10 }}
          mb={{ base: 16, md: 20 }}
        >
          {projects.map((project, index) => (
            <GithubProject key={index} {...project} />
          ))}
        </SimpleGrid>

        {/* View all projects CTA */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          textAlign="center"
        >
          <Button
            as="a"
            href="https://github.com/ARRETdaniel"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            px={10}
            py={7}
            fontSize="lg"
            height="auto"
            fontWeight="bold"
            leftIcon={<Icon as={FaGithub} boxSize={5} />}
            colorScheme="brand"
            borderRadius="md"
            boxShadow="md"
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "xl"
            }}
            _active={{
              transform: "scale(0.98)"
            }}
            transition="all 0.3s"
          >
            {t('github.viewAllButton')}
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default GithubProjectsSection;
