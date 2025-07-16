import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  List,
  ListItem,
  ListIcon,
  Icon,
  Button,
  useColorModeValue,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge
} from '@chakra-ui/react';
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaLanguage,
  FaMusic,
  FaGamepad,
  FaDumbbell,
  FaUtensils,
  FaCheckCircle,
  FaFilePdf,
  FaGithub,
  FaLinkedin
} from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

const AboutPage: NextPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  // Content extracted from aboutme.md
  const skillCategories = [
    {
      category: "Tools and Technologies",
      items: ["Git", "LaTeX", "Markdown", "CARLA Simulator", "SQL", "Sheets", "Tableau", "VS Code", "Anaconda"]
    },
    {
      category: "Programming Languages",
      items: ["Python", "R", "SQL", "C", "C++", "MATLAB", "Java", "Ruby"]
    },
    {
      category: "Libraries & Frameworks",
      items: ["OpenCV", "YOLO", "spaCy", "matplotlib", "NLTK", "Pandas", "NumPy", "PyTorch", "tidyverse", "React.js"]
    }
  ];

  const languages = [
    { name: 'Portuguese', level: 'Native or Bilingual' },
    { name: 'English', level: 'Professional Working' },
    { name: 'German', level: 'Limited Working' },
    { name: 'Chinese', level: 'Beginning to Learn' }
  ];

  const education = [
    {
      degree: "M.Sc. in Computer Science",
      institution: "UFMG - Universidade Federal de Minas Gerais – PPGCC",
      period: "August 2025 - August 2027",
      description: "Master's program focusing on autonomous vehicles and machine learning applications."
    },
    {
      degree: "Bachelor's degree in Computer Science",
      institution: "UENF - Universidade Estadual do Norte Fluminense",
      period: "March 2019 - July 2025",
      description: "Undergraduate studies with emphasis on artificial intelligence, data science, and autonomous systems."
    },
    {
      degree: "High School Diploma",
      institution: "Colégio Estadual Luiz Ried",
      period: "2015 - 2018",
      description: ""
    }
  ];

  const workExperience = [
    {
      position: "Undergraduate Researcher / Autonomous Vehicles",
      company: "CNPq - UENF",
      location: "Campos dos Goytacazes, Rio de Janeiro, Brazil",
      period: "June 2022 - July 2025",
      description: "Explored the Autonomous Vehicles field to understand necessary components for their application in society, their core technologies, and components. Implemented and evaluated control algorithms like PID and Pure Pursuit in the CARLA Simulator, and integrated YOLO-based computer vision models for real-time object detection.",
      projects: [
        "Project Title: Project-driven Data Science: Learning and Mapping",
        "Work Plan Title (2024): Exploration and Application of Fundamental Concepts of Autonomous Vehicles: A Study on Vehicle State Estimation, Visual Perception, and Motion Planning",
        "Work Plan Title (2023): Driving into the future: Advanced software and algorithms powering Autonomous Vehicles",
        "Work Plan Title (2022): Autonomous Vehicles in Brazil and their technologies"
      ],
      skills: ["Research", "Writing", "Presentation", "Algorithms", "Simulation", "Controllers", "Vehicle Modeling", "Python", "Machine Learning"]
    },
    {
      position: "Internship / The Hoeft Technology and Management Virtual Program",
      company: "Campus b",
      location: "Remote",
      period: "March 2022 - May 2022",
      description: "Worked in a multicultural team from the University of Illinois, developing solutions for a Brazilian tech company. The program concluded with a presentation to stakeholders and a report detailing proposed solutions.",
      skills: ["Research", "Writing", "Multicultural Teamwork", "Problem-solving", "English-speaking and presentation", "Report and Presentation development", "Intercultural Communication"]
    },
    {
      position: "Information Technology Help Desk Support",
      company: "Intersea",
      location: "Macaé",
      period: "November 2018 - February 2019",
      description: "Provided IT support services including hardware and software maintenance, system access reviews, equipment support and handover, and workstation setup.",
      skills: ["HelpDesk", "Hardware and Software Maintenance", "System Access Reviews", "Equipment Support", "Workstation Setup"]
    },
    {
      position: "Young Apprentice",
      company: "Infraero Brasil",
      location: "Macaé",
      period: "October 2013 - February 2017",
      description: "Provided support as an assistant to the Administrative, Financial, and Storehouse departments. Tasks included updating financial data in Excel, updating stock products data, documentation hand-over for signature, support during courses application for staff, printing and documents organization, and team support.",
      skills: ["Administrative Support", "Data Entry", "Documentation Management", "Team Support"]
    }
  ];

  const certifications = [
    "Self-Driving Cars Specialization",
    "Google Data Analytics Specialization",
    "Desafios da Lei Geral de Proteção de Dados Pessoais na Administração Pública",
    "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    "Direitos humanos e Inteligência Artificial"
  ];

  const honors = [
    "OBMEP - Olimpíada Brasileira de Matemática das Escolas Públicas (Brazilian Public School Mathematics Olympiad), Honorable mention certificate, 2018"
  ];

  const interests = [
    {
      icon: FaLanguage,
      title: "Languages",
      description: "Fluent in English and Portuguese, currently mastering German, and starting Chinese."
    },
    {
      icon: FaMusic,
      title: "Music",
      description: "Enjoying artists like Lane 8 and Ludovico Einaudi."
    },
    {
      icon: FaGamepad,
      title: "Gaming",
      description: "Online gaming to stay connected with distant family members."
    },
    {
      icon: FaDumbbell,
      title: "Fitness",
      description: "Regular gym sessions with partner."
    },
    {
      icon: FaUtensils,
      title: "Dining Out",
      description: "Enjoying dinner nights out and culinary experiences."
    }
  ];

  return (
    <Layout>
      <Head>
        <title>About Me | Daniel Terra Gomes</title>
        <meta name="description" content="Learn more about Daniel Terra Gomes, a Computer Scientist specializing in Autonomous Vehicles and Data Science." />
      </Head>

      {/* Hero Section */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg" mb={8}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack spacing={6} align="flex-start">
              <Heading as="h1" size="2xl">
                About Me
              </Heading>
              <Text fontSize="xl">
                Computer Scientist specializing in Autonomous Vehicles, with a strong interest in Data Science and Machine Learning applied to self-driving technologies.
              </Text>
              <Text>
                I have hands-on experience implementing and evaluating control algorithms like PID and Pure Pursuit in the CARLA Simulator. I also integrated YOLO-based computer vision models for real-time object detection, supporting safer autonomous navigation through real-time driver-assistance feedback.
              </Text>
              <Text>
                Outside academia, I enjoy exploring new languages—I'm fluent in English and Portuguese, am currently mastering German, and starting Chinese. In my spare time, you'll find me immersing myself in music—Lane 8 and Ludovico are among my favorites—or engaging in online gaming to stay connected with distant family members. Beyond the digital realm, I prioritize moments spent at the gym with my partner, enjoying dinner nights out, and cherishing quality time with loved ones.
              </Text>
              <HStack spacing={4}>
                <Button
                  leftIcon={<FaFilePdf />}
                  as="a"
                  href="/docs/CV_DanielTerraGomes-15-07-2025.pdf"
                  target="_blank"
                  colorScheme="brand"
                >
                  Download CV
                </Button>
                <Button
                  leftIcon={<FaGithub />}
                  as="a"
                  href="https://github.com/ARRETdaniel"
                  target="_blank"
                  variant="outline"
                >
                  GitHub
                </Button>
                <Button
                  leftIcon={<FaLinkedin />}
                  as="a"
                  href="https://www.linkedin.com/in/arretdaniel"
                  target="_blank"
                  variant="outline"
                >
                  LinkedIn
                </Button>
              </HStack>
            </VStack>
            <Flex justifyContent="center">
              <Box
                width="320px"
                height="320px"
                borderRadius="full"
                overflow="hidden"
                position="relative"
                boxShadow="xl"
                bg="gray.200"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                {/* Replace with your profile image */}
                <Text fontWeight="bold">Profile Photo</Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Main Content Tabs */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <Tabs variant="enclosed" colorScheme="brand">
            <TabList>
              <Tab>Professional</Tab>
              <Tab>Skills</Tab>
              <Tab>Education</Tab>
              <Tab>Personal</Tab>
            </TabList>

            <TabPanels>
              {/* Professional Tab */}
              <TabPanel>
                <VStack spacing={8} align="stretch">
                  <Heading as="h2" size="xl">
                    Work Experience
                  </Heading>

                  {workExperience.map((job, index) => (
                    <Box
                      key={index}
                      p={6}
                      bg={cardBg}
                      borderRadius="md"
                      boxShadow="md"
                    >
                      <VStack align="flex-start" spacing={3}>
                        <Flex w="100%" justifyContent="space-between" flexDir={["column", "row"]}>
                          <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" size="md">
                              {job.position}
                            </Heading>
                            <Text fontWeight="bold" color="brand.500">
                              {job.company} • {job.location}
                            </Text>
                          </VStack>
                          <Text fontWeight="medium">
                            {job.period}
                          </Text>
                        </Flex>

                        <Text>
                          {job.description}
                        </Text>

                        {job.projects && job.projects.length > 0 && (
                          <VStack align="flex-start" spacing={1} mt={2}>
                            <Text fontWeight="semibold">Projects:</Text>
                            <List spacing={1}>
                              {job.projects.map((project, projIndex) => (
                                <ListItem key={projIndex}>
                                  <ListIcon as={FaCheckCircle} color="green.500" />
                                  {project}
                                </ListItem>
                              ))}
                            </List>
                          </VStack>
                        )}

                        {job.skills && job.skills.length > 0 && (
                          <HStack mt={2} flexWrap="wrap">
                            {job.skills.map((skill, skillIndex) => (
                              <Badge key={skillIndex} colorScheme="blue" mb={2}>
                                {skill}
                              </Badge>
                            ))}
                          </HStack>
                        )}
                      </VStack>
                    </Box>
                  ))}

                  <Divider my={8} />

                  <VStack spacing={6} align="stretch">
                    <Heading as="h2" size="xl">
                      Certifications
                    </Heading>

                    <List spacing={3}>
                      {certifications.map((cert, index) => (
                        <ListItem key={index}>
                          <ListIcon as={FaAward} color="brand.500" />
                          {cert}
                        </ListItem>
                      ))}
                    </List>
                  </VStack>

                  <Divider my={8} />

                  <VStack spacing={6} align="stretch">
                    <Heading as="h2" size="xl">
                      Honors & Awards
                    </Heading>

                    <List spacing={3}>
                      {honors.map((honor, index) => (
                        <ListItem key={index}>
                          <ListIcon as={FaAward} color="yellow.500" />
                          {honor}
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </VStack>
              </TabPanel>

              {/* Skills Tab */}
              <TabPanel>
                <VStack spacing={8} align="stretch">
                  <Heading as="h2" size="xl">
                    Skills & Expertise
                  </Heading>

                  {skillCategories.map((skillGroup, index) => (
                    <Box
                      key={index}
                      p={6}
                      bg={cardBg}
                      borderRadius="md"
                      boxShadow="md"
                    >
                      <VStack align="flex-start" spacing={4}>
                        <Heading as="h3" size="md">
                          {skillGroup.category}
                        </Heading>

                        <Flex flexWrap="wrap" gap={2}>
                          {skillGroup.items.map((skill, skillIndex) => (
                            <Badge
                              key={skillIndex}
                              colorScheme={
                                index === 0 ? "purple" :
                                index === 1 ? "blue" :
                                index === 2 ? "green" :
                                "orange"
                              }
                              p={2}
                              borderRadius="md"
                              fontSize="sm"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </Flex>
                      </VStack>
                    </Box>
                  ))}
                </VStack>
              </TabPanel>

              {/* Education Tab */}
              <TabPanel>
                <VStack spacing={8} align="stretch">
                  <Heading as="h2" size="xl">
                    Educational Background
                  </Heading>

                  {education.map((edu, index) => (
                    <Box
                      key={index}
                      p={6}
                      bg={cardBg}
                      borderRadius="md"
                      boxShadow="md"
                    >
                      <VStack align="flex-start" spacing={3}>
                        <Flex w="100%" justifyContent="space-between" flexDir={["column", "row"]}>
                          <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" size="md">
                              {edu.degree}
                            </Heading>
                            <Text fontWeight="bold" color="brand.500">
                              {edu.institution}
                            </Text>
                          </VStack>
                          <Text fontWeight="medium">
                            {edu.period}
                          </Text>
                        </Flex>

                        {edu.description && (
                          <Text>
                            {edu.description}
                          </Text>
                        )}
                      </VStack>
                    </Box>
                  ))}
                </VStack>
              </TabPanel>

              {/* Personal Tab */}
              <TabPanel>
                <VStack spacing={8} align="stretch">
                  <Heading as="h2" size="xl">
                    Personal Interests
                  </Heading>

                  <Text fontSize="lg">
                    Outside academia, I enjoy exploring new languages, music, gaming, and spending quality time with loved ones.
                  </Text>

                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {interests.map((interest, index) => (
                      <Box
                        key={index}
                        p={6}
                        bg={cardBg}
                        borderRadius="md"
                        boxShadow="md"
                      >
                        <VStack align="flex-start" spacing={4}>
                          <Flex
                            w={12}
                            h={12}
                            align="center"
                            justify="center"
                            color="white"
                            rounded="full"
                            bg="brand.500"
                          >
                            <Icon as={interest.icon} w={6} h={6} />
                          </Flex>

                          <VStack align="flex-start" spacing={1}>
                            <Heading as="h3" size="md">
                              {interest.title}
                            </Heading>
                            <Text>
                              {interest.description}
                            </Text>
                          </VStack>
                        </VStack>
                      </Box>
                    ))}
                  </SimpleGrid>

                  <Box p={6} bg={cardBg} borderRadius="md" boxShadow="md">
                    <VStack align="flex-start" spacing={4}>
                      <Heading as="h3" size="md">
                        Personal Philosophy
                      </Heading>
                      <Text>
                        I believe in the power of technology to enhance human life and solve complex problems.
                        My approach combines rigorous academic research with practical applications,
                        always keeping in mind the ethical implications of technological advancement.
                      </Text>
                      <Text>
                        I value continuous learning, cross-cultural collaboration, and maintaining a
                        healthy work-life balance through diverse interests and activities.
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg">
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={4} mb={{ base: 6, md: 0 }}>
              <Heading as="h2" size="xl">
                Let's Connect
              </Heading>
              <Text>
                I'm always open to discussing research opportunities, collaborations, or just having a conversation about autonomous vehicles and technology.
              </Text>
            </VStack>

            <Button as={Link} href="/contact" size="lg" colorScheme="brand">
              Contact Me
            </Button>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
};

export default AboutPage;
