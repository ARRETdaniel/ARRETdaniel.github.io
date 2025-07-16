import { NextPage } from 'next';
import Head from 'next/head';
import { Box, Heading, Text, Button, Stack, Flex, Container, useColorModeValue, SimpleGrid, Icon, VStack, HStack, Badge } from '@chakra-ui/react';
import { FaCode, FaCar, FaDatabase } from 'react-icons/fa';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { GetStaticProps } from 'next';

const Home: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <title>Daniel Terra Gomes | Academic Portfolio</title>
      </Head>

      {/* Hero Section */}
      <Box
        as="section"
        py={{ base: 12, md: 20 }}
        bg={useColorModeValue('gray.50', 'gray.900')}
        borderRadius="lg"
        my={6}
        position="relative"
        overflow="hidden"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: 'linear-gradient(120deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.1) 100%)',
          zIndex: 0
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <Stack
            align="center"
            spacing={{ base: 8, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            justify="space-between"
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
                <Text as="span">{t('home.title')}</Text>
                <br />
                <Text as="span" color="brand.500" position="relative" _after={{
                  content: '""',
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'brand.100',
                  zIndex: -1,
                }}>
                  {t('home.subtitle')}
                </Text>
              </Heading>
              <Text
                color={useColorModeValue('gray.600', 'gray.300')}
                fontSize={{ base: 'md', md: 'lg' }}
                maxW="600px"
              >
                Computer Scientist specializing in Autonomous Vehicles, with a strong interest in Data Science and Machine Learning applied to self-driving technologies.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Link href="/about" passHref>
                  <Button
                    rounded="md"
                    size="lg"
                    fontWeight="bold"
                    px={6}
                    colorScheme="brand"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                    }}
                  >
                    About Me
                  </Button>
                </Link>
                <Link href="/contact" passHref>
                  <Button
                    rounded="md"
                    size="lg"
                    fontWeight="bold"
                    px={6}
                    variant="outline"
                    _hover={{
                      transform: 'translateY(-2px)',
                      boxShadow: 'lg',
                      bg: 'brand.50',
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </Stack>

              {/* Skills badges */}
              <HStack spacing={2} wrap="wrap" mt={6}>
                <Badge colorScheme="blue" p={2} borderRadius="md">Autonomous Vehicles</Badge>
                <Badge colorScheme="green" p={2} borderRadius="md">Data Science</Badge>
                <Badge colorScheme="purple" p={2} borderRadius="md">Machine Learning</Badge>
                <Badge colorScheme="orange" p={2} borderRadius="md">Computer Vision</Badge>
              </HStack>
            </Stack>
            <Flex
              flex={1}
              justify="center"
              align="center"
              position="relative"
              w="full"
            >
              <Box
                position="relative"
                height={{ base: '300px', md: '400px' }}
                width={{ base: '300px', md: '400px' }}
                rounded="2xl"
                boxShadow="2xl"
                overflow="hidden"
                transform="perspective(1000px) rotateY(-5deg)"
                transition="all 0.3s ease"
                _hover={{
                  transform: "perspective(1000px) rotateY(0deg)",
                }}
              >
                {/* Will replace with actual profile image when available */}
                <Box
                  bg="brand.100"
                  height="100%"
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  overflow="hidden"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    opacity={0.4}
                    bgGradient="linear(to-br, brand.200, accent.200)"
                    zIndex={1}
                  />

                  <Box position="relative" zIndex={2} textAlign="center">
                    <Icon as={FaCar} w={24} h={24} color="brand.600" mb={4} />
                    <Text fontWeight="bold" fontSize="xl">Daniel Terra Gomes</Text>
                    <Text>Computer Scientist</Text>
                    <Text>Autonomous Vehicles Specialist</Text>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Box>

      {/* Skills & Expertise */}
      <Box
        as="section"
        py={{ base: 12, md: 16 }}
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="lg"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Skills & Expertise
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {/* Autonomous Vehicles */}
              <VStack
                p={8}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                borderRadius="lg"
                align="flex-start"
                spacing={4}
              >
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="brand.500"
                >
                  <Icon as={FaCar} w={8} h={8} />
                </Flex>
                <Heading as="h3" size="md">Autonomous Vehicles</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>
                  Implementation and evaluation of control algorithms like PID and Pure Pursuit in the CARLA Simulator.
                  Integration of computer vision models for real-time object detection.
                </Text>
              </VStack>

              {/* Data Science */}
              <VStack
                p={8}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                borderRadius="lg"
                align="flex-start"
                spacing={4}
              >
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="brand.500"
                >
                  <Icon as={FaDatabase} w={8} h={8} />
                </Flex>
                <Heading as="h3" size="md">Data Science</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>
                  Experience with the entire Data Analysis process using Python, R, Tableau, SQL, and more.
                  Development of data-driven solutions and insights.
                </Text>
              </VStack>

              {/* Software Development */}
              <VStack
                p={8}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                borderRadius="lg"
                align="flex-start"
                spacing={4}
              >
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="brand.500"
                >
                  <Icon as={FaCode} w={8} h={8} />
                </Flex>
                <Heading as="h3" size="md">Software Development</Heading>
                <Text color={useColorModeValue('gray.600', 'gray.300')}>
                  Proficient in Python, R, SQL, C, C++, MATLAB, Java, Ruby, and more.
                  Experience with web development using React.js, Next.js, and other modern frameworks.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Featured Research Section */}
      <Box
        as="section"
        py={{ base: 12, md: 16 }}
        bg={useColorModeValue('white', 'gray.800')}
        borderRadius="lg"
        my={6}
      >
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Featured Research
            </Heading>
            <Text
              textAlign="center"
              fontSize="lg"
              maxW="800px"
              mx="auto"
              color={useColorModeValue('gray.600', 'gray.300')}
            >
              My research focuses on advancing autonomous vehicle technology through innovative control algorithms,
              computer vision integration, and machine learning approaches.
            </Text>

            <Box
              bg={useColorModeValue('gray.50', 'gray.700')}
              p={8}
              borderRadius="xl"
              boxShadow="xl"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '6px',
                bg: 'brand.500',
              }}
            >
              <Stack direction={{ base: 'column', md: 'row' }} spacing={8} align="center">
                <Flex
                  flex={{ base: 1, md: 2 }}
                  direction="column"
                >
                  <Heading as="h3" size="lg" mb={4}>
                    Autonomous Vehicle Control Systems
                  </Heading>
                  <Text fontSize="md" mb={3}>
                    My thesis work explores the implementation and optimization of control algorithms for autonomous
                    vehicles in urban environments. Using the CARLA simulator as a testbed, I've evaluated the
                    performance of various controllers including PID, Pure Pursuit, and Stanley methods.
                  </Text>
                  <Text fontSize="md" mb={3}>
                    The research demonstrates that properly tuned PID controllers combined with path planning algorithms
                    can achieve robust performance in complex driving scenarios, especially when integrated with
                    computer vision for real-time obstacle detection.
                  </Text>
                  <HStack spacing={2} mt={4}>
                    <Badge colorScheme="blue" p={2} borderRadius="md">CARLA Simulator</Badge>
                    <Badge colorScheme="green" p={2} borderRadius="md">Control Algorithms</Badge>
                    <Badge colorScheme="purple" p={2} borderRadius="md">Path Planning</Badge>
                    <Badge colorScheme="orange" p={2} borderRadius="md">Obstacle Avoidance</Badge>
                  </HStack>
                  <Link href="/research" passHref>
                    <Button
                      mt={6}
                      alignSelf="flex-start"
                      colorScheme="brand"
                      size="md"
                      rightIcon={<Icon as={FaCar} />}
                    >
                      View Research Details
                    </Button>
                  </Link>
                </Flex>
                <Box
                  flex={{ base: 1, md: 1 }}
                  bg="brand.100"
                  height={{ base: '200px', md: '300px' }}
                  width="100%"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="md"
                  position="relative"
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    opacity={0.2}
                    bgGradient="linear(to-br, brand.200, accent.200)"
                  />
                  <Flex
                    height="100%"
                    width="100%"
                    align="center"
                    justify="center"
                    position="relative"
                  >
                    <Icon as={FaCar} w={20} h={20} color="brand.600" />
                  </Flex>
                </Box>
              </Stack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Latest Projects */}
      <Box
        as="section"
        py={{ base: 12, md: 16 }}
        bg={useColorModeValue('gray.50', 'gray.900')}
        borderRadius="lg"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Featured Projects
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {/* Project 1 */}
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl"
                }}
              >
                <Box bg="gray.300" h="200px" position="relative">
                  {/* Project image placeholder */}
                  <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    align="center"
                    justify="center"
                    bgGradient="linear(to-br, brand.200, accent.200)"
                    opacity={0.8}
                  >
                    <Icon as={FaCar} w={12} h={12} color="white" />
                  </Flex>
                </Box>
                <Box p={6}>
                  <HStack spacing={2} mb={2}>
                    <Badge colorScheme="blue">Autonomous Vehicles</Badge>
                    <Badge colorScheme="green">CARLA</Badge>
                  </HStack>
                  <Heading as="h3" size="md" mb={2}>
                    Self-Driving Car Control Systems
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.300')}
                    mb={4}
                  >
                    Implementation of PID and Pure Pursuit control algorithms in the CARLA Simulator.
                  </Text>
                  <Link href="/projects" passHref>
                    <Button size="sm" colorScheme="brand" mt={2}>
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </Box>

              {/* Project 2 */}
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl"
                }}
              >
                <Box bg="gray.300" h="200px" position="relative">
                  {/* Project image placeholder */}
                  <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    align="center"
                    justify="center"
                    bgGradient="linear(to-br, accent.100, accent.300)"
                    opacity={0.8}
                  >
                    <Icon as={FaDatabase} w={12} h={12} color="white" />
                  </Flex>
                </Box>
                <Box p={6}>
                  <HStack spacing={2} mb={2}>
                    <Badge colorScheme="purple">Data Science</Badge>
                    <Badge colorScheme="pink">Google Analytics</Badge>
                  </HStack>
                  <Heading as="h3" size="md" mb={2}>
                    Data Analytics Professional Certificate
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.300')}
                    mb={4}
                  >
                    Comprehensive data analysis project using Python, R, Tableau, and SQL.
                  </Text>
                  <Link href="/projects" passHref>
                    <Button size="sm" colorScheme="brand" mt={2}>
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </Box>

              {/* Project 3 */}
              <Box
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow="lg"
                borderRadius="lg"
                overflow="hidden"
                transition="all 0.3s ease"
                _hover={{
                  transform: "translateY(-5px)",
                  boxShadow: "xl"
                }}
              >
                <Box bg="gray.300" h="200px" position="relative">
                  {/* Project image placeholder */}
                  <Flex
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    align="center"
                    justify="center"
                    bgGradient="linear(to-br, brand.400, brand.600)"
                    opacity={0.8}
                  >
                    <Icon as={FaCode} w={12} h={12} color="white" />
                  </Flex>
                </Box>
                <Box p={6}>
                  <HStack spacing={2} mb={2}>
                    <Badge colorScheme="orange">NLP</Badge>
                    <Badge colorScheme="yellow">PyTorch</Badge>
                  </HStack>
                  <Heading as="h3" size="md" mb={2}>
                    Contextual Chatbot in PyTorch
                  </Heading>
                  <Text
                    color={useColorModeValue('gray.600', 'gray.300')}
                    mb={4}
                  >
                    NLP-based chatbot using PyTorch that answers questions in Portuguese.
                  </Text>
                  <Link href="/projects" passHref>
                    <Button size="sm" colorScheme="brand" mt={2}>
                      Learn More
                    </Button>
                  </Link>
                </Box>
              </Box>
            </SimpleGrid>

            <Box textAlign="center" mt={6}>
              <Link href="/projects" passHref>
                <Button size="lg" variant="outline" colorScheme="brand">
                  View All Projects
                </Button>
              </Link>
            </Box>
          </VStack>
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

export default Home;
