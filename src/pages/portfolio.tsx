import { Box, Button, Container, Flex, Heading, Icon, SimpleGrid, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import ProjectCard from '../components/portfolio/ProjectCard';
import { FaLaptopCode } from 'react-icons/fa';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

// Project data from the githubProjects.md file
const webProjects = [
  {
    title: "Kalender",
    description: "An online Calendar with sqlite3 database. Created with full documentation using LaTeX. The website was developed using Ruby and runs locally.",
    technologies: ["Ruby", "SQLite3", "LaTeX", "Web Development"],
    githubLink: "https://github.com/ARRETdaniel/22-2_paradigm_O_O",
    demoLink: "",
    imageSrc: "/images/project-1.png"
  },
  {
    title: "Happy",
    description: "A website that localizes shops on a city map, featuring both frontend and backend implementation.",
    technologies: ["TypeScript", "CSS", "HTML", "React"],
    githubLink: "https://github.com/ARRETdaniel/Happy-NextLevelWeek3",
    demoLink: "",
    imageSrc: "/images/project-2.png"
  },
  {
    title: "Full-Stack Web Development with React",
    description: "A complete website built during the Full-Stack Web Development with React Specialization.",
    technologies: ["React", "HTML", "JavaScript", "CSS"],
    githubLink: "https://github.com/ARRETdaniel/Full-Stack-Web-Development-with-React-Specialization",
    demoLink: "",
    imageSrc: "/images/project-3.png"
  },
  {
    title: "Academic Portfolio",
    description: "This very website - an academic and professional portfolio built with Next.js, TypeScript, and Chakra UI.",
    technologies: ["Next.js", "TypeScript", "Chakra UI", "React"],
    githubLink: "https://github.com/ARRETdaniel/ARRETdaniel.github.io",
    demoLink: "https://arretdaniel.github.io",
    imageSrc: "/images/project-4.png"
  }
];

// Carousel settings
const carouselSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Web Portfolio | Daniel Terra Gomes</title>
        <meta name="description" content="Explore Daniel Terra Gomes' web development portfolio including projects built with React, Next.js, TypeScript, and more." />
      </Head>

      {/* Hero Section */}
      <Box
        as="section"
        py={{ base: 12, md: 16 }}
        bg={useColorModeValue('gray.50', 'gray.900')}
        borderRadius="lg"
        mb={8}
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Flex
              w={20}
              h={20}
              align="center"
              justify="center"
              color="white"
              rounded="full"
              bg="brand.500"
              mb={2}
            >
              <Icon as={FaLaptopCode} w={10} h={10} />
            </Flex>
            <Heading as="h1" size="2xl">
              Web Development Portfolio
            </Heading>
            <Text
              fontSize="xl"
              maxW="container.md"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              A collection of my web development projects, showcasing skills in frontend and backend technologies,
              responsive design, and user experience.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Project Carousel Section */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" mb={4}>
              Project Highlights
            </Heading>

            <Box
              maxW="900px"
              mx="auto"
              boxShadow="xl"
              borderRadius="lg"
              overflow="hidden"
              bg={useColorModeValue('white', 'gray.800')}
              p={4}
            >
              <Slider {...carouselSettings}>
                {webProjects.map((project, index) => (
                  <Box key={index} p={2}>
                    <Box
                      height="400px"
                      position="relative"
                      bg="gray.200"
                      borderRadius="md"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {/* Placeholder for project screenshots */}
                      <Text fontSize="lg" fontWeight="bold">
                        {project.title} Screenshot
                      </Text>
                    </Box>
                    <Box mt={4} textAlign="center">
                      <Heading as="h3" size="md" mb={2}>
                        {project.title}
                      </Heading>
                      <Text>{project.description}</Text>
                    </Box>
                  </Box>
                ))}
              </Slider>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Projects Grid Section */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" mb={4}>
              All Web Projects
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {webProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  githubLink={project.githubLink}
                  demoLink={project.demoLink}
                  imageSrc={project.imageSrc}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* GitHub PDF Section */}
      <Box
        as="section"
        py={12}
        bg={useColorModeValue('gray.50', 'gray.900')}
        borderRadius="lg"
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading as="h2" size="xl">
              Project Documentation
            </Heading>
            <Text
              fontSize="lg"
              maxW="container.md"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              For detailed documentation of these projects, including design decisions,
              implementation details, and technical specifications, please refer to the PDF files
              available on GitHub.
            </Text>
            <Button
              as="a"
              href="https://github.com/ARRETdaniel/ARRETdaniel.github.io/tree/master/public/docs"
              target="_blank"
              colorScheme="brand"
              size="lg"
              mt={4}
            >
              View Documentation
            </Button>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default Portfolio;
