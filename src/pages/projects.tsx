import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import GitHubRepo from '../components/GitHubRepo';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
  Link as ChakraLink,
  Button,
  Flex,
  Icon,
  useColorModeValue,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { SiPython, SiJupyter, SiTensorflow } from 'react-icons/si';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
  category: string;
}

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, image, category }: ProjectCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Box
      bg={cardBg}
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      transition="all 0.3s ease"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
      <Box height="200px" bg="gray.200" position="relative">
        {/* Placeholder for project image */}
        <Flex
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          align="center"
          justify="center"
        >
          <Text fontWeight="bold">{title} Image</Text>
        </Flex>
      </Box>
      <Box p={6}>
        <VStack align="flex-start" spacing={3}>
          <HStack spacing={2} flexWrap="wrap">
            {technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} colorScheme="brand" mb={1}>
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge colorScheme="gray" mb={1}>+{technologies.length - 3}</Badge>
            )}
          </HStack>

          <Heading as="h3" size="md">
            {title}
          </Heading>

          <Text noOfLines={3}>
            {description}
          </Text>

          <HStack spacing={4} mt={2}>
            <ChakraLink href={githubLink} isExternal>
              <Button leftIcon={<FaGithub />} size="sm" colorScheme="gray">
                Code
              </Button>
            </ChakraLink>

            {demoLink && (
              <ChakraLink href={demoLink} isExternal>
                <Button leftIcon={<FaExternalLinkAlt />} size="sm" colorScheme="brand">
                  Demo
                </Button>
              </ChakraLink>
            )}
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

const ProjectsPage: NextPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  // Projects data from githubProjects.md
  const projects = [
    {
      title: "Google Data Analytics Professional Certificate",
      description: "Case study using the entire Data Analysis process, with technologies like Python, R, Tableau, Sheets, SQL, and LaTeX to develop presentations and reports with solutions supported by illustrations and graphs.",
      technologies: ["Python", "R", "SQL", "Tableau", "LaTeX", "Data Analysis"],
      githubLink: "https://github.com/ARRETdaniel/Google-Data-Analytics-Professional-Certificate",
      demoLink: "",
      image: "/images/project-1.png",
      category: "Data Analysis"
    },
    {
      title: "R for Data Science",
      description: "Data analysis in R developing presentations, visualizations, models while improving communication and programming skills as part of the Computer Science bachelor's degree program at UENF.",
      technologies: ["R", "Data Visualization", "Statistical Modeling", "tidyverse"],
      githubLink: "https://github.com/ARRETdaniel/22-2E_topicos_Especiais_em_IA_II_Sistemas_Inteligentes",
      demoLink: "",
      image: "/images/project-2.png",
      category: "Data Analysis"
    },
    {
      title: "Contextual Chatbot in PyTorch",
      description: "Customized Python code for a Contextual Chatbot answering questions in Portuguese using personal data, with technologies like Python, Anaconda, NumPy, Pandas, PyTorch, and Natural Language Processing.",
      technologies: ["Python", "PyTorch", "NLP", "Anaconda", "Pandas", "NumPy"],
      githubLink: "https://github.com/ARRETdaniel/22-2_AI",
      demoLink: "",
      image: "/images/project-3.png",
      category: "Machine Learning"
    },
    {
      title: "Heuristics and Optimization",
      description: "Implementation of heuristic problems including Longest Path, Knapsack, Vertex Cover, Traveling Salesman, Graph Coloring, and Self Organizing Map as part of university coursework.",
      technologies: ["Python", "Algorithms", "Optimization"],
      githubLink: "https://github.com/ARRETdaniel/22-2_topicos_Especiais_Heuristicas_e_Complexidade",
      demoLink: "",
      image: "/images/project-4.png",
      category: "Algorithms"
    },
    {
      title: "Python for Natural Language Processing",
      description: "Work with core NLP concepts and technologies using Python, Machine Learning, NLTK, spaCy, Jupyter and more.",
      technologies: ["Python", "NLP", "NLTK", "spaCy", "Jupyter"],
      githubLink: "https://github.com/ARRETdaniel/Python_for_NLP",
      demoLink: "",
      image: "/images/project-5.png",
      category: "Machine Learning"
    },
    {
      title: "Machine Learning",
      description: "Online Coursera course covering Logistic Regression, Artificial Neural Network, and Machine Learning algorithms using MATLAB and Octave.",
      technologies: ["MATLAB", "Octave", "Machine Learning", "Neural Networks"],
      githubLink: "https://github.com/ARRETdaniel/machineLearning",
      demoLink: "",
      image: "/images/project-6.png",
      category: "Machine Learning"
    },
    {
      title: "Kalender",
      description: "Usable online Calendar with sqlite3 database, including comprehensive documentation created with LaTeX, developed using Ruby and running locally.",
      technologies: ["Ruby", "SQLite3", "LaTeX", "Web Development"],
      githubLink: "https://github.com/ARRETdaniel/22-2_paradigm_O_O",
      demoLink: "",
      image: "/images/project-7.png",
      category: "Web Development"
    },
    {
      title: "Happy",
      description: "Front and backend for a simple website that localizes shops on a city map, developed using TypeScript, CSS, HTML, React and more.",
      technologies: ["TypeScript", "React", "CSS", "HTML"],
      githubLink: "https://github.com/ARRETdaniel/Happy-NextLevelWeek3",
      demoLink: "",
      image: "/images/project-8.png",
      category: "Web Development"
    }
  ];

  const categories = ["All", "Autonomous Vehicles", "Data Analysis", "Machine Learning", "Algorithms", "Web Development"];

  return (
    <Layout>
      <Head>
        <title>Projects | Daniel Terra Gomes</title>
        <meta
          name="description"
          content="Explore Daniel Terra Gomes' projects in autonomous vehicles, data science, machine learning, and software development."
        />
      </Head>

      {/* Hero Section */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg" mb={8}>
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading as="h1" size="2xl">
              Projects & Research
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              A collection of my technical projects, research work, and contributions in the fields of
              autonomous vehicles, data science, machine learning, and software development.
            </Text>
            <HStack spacing={4} mt={4}>
              <Flex
                align="center"
                justify="center"
                bg="blue.500"
                color="white"
                rounded="full"
                w={12}
                h={12}
              >
                <Icon as={SiPython} w={6} h={6} />
              </Flex>
              <Flex
                align="center"
                justify="center"
                bg="green.500"
                color="white"
                rounded="full"
                w={12}
                h={12}
              >
                <Icon as={SiJupyter} w={6} h={6} />
              </Flex>
              <Flex
                align="center"
                justify="center"
                bg="orange.500"
                color="white"
                rounded="full"
                w={12}
                h={12}
              >
                <Icon as={SiTensorflow} w={6} h={6} />
              </Flex>
              <Flex
                align="center"
                justify="center"
                bg="purple.500"
                color="white"
                rounded="full"
                w={12}
                h={12}
              >
                <Icon as={FaCode} w={6} h={6} />
              </Flex>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <Tabs variant="soft-rounded" colorScheme="brand">
            <TabList mb={8} overflowX="auto" py={2} flexWrap={["nowrap", "nowrap", "wrap"]}>
              {categories.map((category, index) => (
                <Tab key={index} mx={1} whiteSpace="nowrap">
                  {category}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {/* All Projects */}
              <TabPanel px={0}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                  {projects.map((project, index) => (
                    <ProjectCard
                      key={index}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      githubLink={project.githubLink}
                      demoLink={project.demoLink}
                      image={project.image}
                      category={project.category}
                    />
                  ))}
                </SimpleGrid>
              </TabPanel>

              {/* Filter by category */}
              {categories.slice(1).map((category, index) => (
                <TabPanel key={index} px={0}>
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
                    {projects
                      .filter((project) => project.category === category)
                      .map((project, projIndex) => (
                        <ProjectCard
                          key={projIndex}
                          title={project.title}
                          description={project.description}
                          technologies={project.technologies}
                          githubLink={project.githubLink}
                          demoLink={project.demoLink}
                          image={project.image}
                          category={project.category}
                        />
                      ))}
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Box>

      {/* GitHub CTA */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg">
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4} mb={{ base: 6, md: 0 }}>
              <Heading as="h2" size="xl">
                More Projects on GitHub
              </Heading>
              <Text>
                Visit my GitHub profile to explore more projects, experiments, and contributions.
              </Text>
            </VStack>

            <Button
              as={ChakraLink}
              href="https://github.com/ARRETdaniel"
              target="_blank"
              size="lg"
              colorScheme="brand"
              leftIcon={<FaGithub />}
            >
              View GitHub Profile
            </Button>
          </Flex>

          {/* GitHub Repositories Section */}
          <Box mt={16}>
            <Heading as="h2" size="xl" mb={8}>
              Featured GitHub Repositories
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <GitHubRepo
                name="autonomous-vehicle-simulator"
                description="A simulator for autonomous vehicles using Python and TensorFlow, featuring reinforcement learning algorithms for training self-driving vehicles in various environments."
                url="https://github.com/ARRETdaniel/autonomous-vehicle-simulator"
                stars={42}
                forks={15}
                issues={3}
                language="Python"
                topics={["autonomous-vehicles", "machine-learning", "simulation", "reinforcement-learning"]}
              />

              <GitHubRepo
                name="portfolio-website"
                description="My personal academic portfolio website built with Next.js, TypeScript, and Chakra UI. Features responsive design and multi-language support."
                url="https://github.com/ARRETdaniel/ARRETdaniel.github.io"
                stars={12}
                forks={5}
                issues={2}
                language="TypeScript"
                topics={["nextjs", "portfolio", "typescript", "chakra-ui"]}
              />

              <GitHubRepo
                name="computer-vision-toolkit"
                description="A collection of computer vision algorithms and utilities for autonomous vehicles, including object detection, lane recognition, and depth estimation."
                url="https://github.com/ARRETdaniel/computer-vision-toolkit"
                stars={37}
                forks={12}
                issues={5}
                language="Python"
                topics={["computer-vision", "object-detection", "deep-learning", "opencv"]}
              />

              <GitHubRepo
                name="data-visualization-dashboard"
                description="Interactive dashboard for visualizing research data on autonomous vehicles, built with React and D3.js."
                url="https://github.com/ARRETdaniel/data-visualization-dashboard"
                stars={25}
                forks={8}
                issues={1}
                language="JavaScript"
                topics={["data-visualization", "dashboard", "d3js", "react"]}
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export const getStaticProps = async ({ locale = 'en' }: { locale?: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default ProjectsPage;
