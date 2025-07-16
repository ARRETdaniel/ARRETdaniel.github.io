import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../../components/Layout';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  Flex, 
  Icon, 
  SimpleGrid, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Image,
  useColorModeValue,
  Button,
  Link as ChakraLink,
  HStack,
  Badge
} from '@chakra-ui/react';
import { FaCar, FaRobot, FaChartLine, FaCode } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiOpenai } from 'react-icons/si';

const ResearchPage: NextPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  
  return (
    <Layout>
      <Head>
        <title>Autonomous Vehicles Research | Daniel Terra Gomes</title>
        <meta 
          name="description" 
          content="Explore Daniel Terra Gomes' research on autonomous vehicles, computer vision, and machine learning for self-driving technologies." 
        />
      </Head>

      {/* Hero Section */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg" mb={8}>
        <Container maxW="container.xl">
          <VStack spacing={6} align="stretch">
            <Heading 
              as="h1" 
              size="2xl" 
              textAlign="center"
              bgGradient="linear(to-r, brand.600, blue.500)"
              bgClip="text"
            >
              Autonomous Vehicles Research
            </Heading>
            <Text fontSize="xl" textAlign="center" maxW="container.md" mx="auto">
              Exploring the intersection of computer vision, control systems, and machine learning 
              to enable safer and more efficient autonomous driving technologies.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Research Overview */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading as="h2" size="xl" mb={6}>
                Research Focus
              </Heading>
              <VStack align="start" spacing={4}>
                <Text>
                  My research focuses on the development and validation of autonomous vehicle systems, 
                  with particular emphasis on real-time object detection, control algorithms, and driver assistance systems.
                </Text>
                <Text>
                  I specialize in implementing and evaluating control algorithms like PID and Pure Pursuit 
                  in the CARLA Simulator, as well as integrating computer vision models such as YOLO for real-time 
                  object detection to improve driver assistance capabilities.
                </Text>
                <Text>
                  The goal of my work is to bridge the gap between theoretical autonomous driving concepts and 
                  practical implementations that can enhance road safety and transportation efficiency.
                </Text>
              </VStack>
            </Box>
            <Flex justifyContent="center" alignItems="center">
              <Box 
                width="100%" 
                height="300px" 
                bg="gray.200" 
                borderRadius="md" 
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                {/* Placeholder for research image/diagram */}
                <Text fontWeight="bold">Autonomous Vehicle Research Diagram</Text>
              </Box>
            </Flex>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Research Areas */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg" mb={16}>
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Heading as="h2" size="xl" textAlign="center">
              Key Research Areas
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
              {/* Area 1 */}
              <VStack 
                bg={cardBg} 
                p={6} 
                borderRadius="lg" 
                boxShadow="md" 
                spacing={4}
                align="flex-start"
                height="100%"
              >
                <Flex
                  w={12}
                  h={12}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="blue.500"
                  mb={2}
                >
                  <Icon as={FaCar} w={6} h={6} />
                </Flex>
                <Heading as="h3" size="md">Vehicle Control Systems</Heading>
                <Text>
                  Implementation and evaluation of control algorithms like PID and Pure Pursuit
                  for autonomous navigation in simulated environments. Focus on path planning,
                  trajectory optimization, and vehicle dynamics.
                </Text>
              </VStack>
              
              {/* Area 2 */}
              <VStack 
                bg={cardBg} 
                p={6} 
                borderRadius="lg" 
                boxShadow="md" 
                spacing={4}
                align="flex-start"
                height="100%"
              >
                <Flex
                  w={12}
                  h={12}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="green.500"
                  mb={2}
                >
                  <Icon as={FaRobot} w={6} h={6} />
                </Flex>
                <Heading as="h3" size="md">Computer Vision for Autonomous Driving</Heading>
                <Text>
                  Integration of YOLO-based object detection systems for real-time perception.
                  Development of techniques for detecting, tracking, and classifying objects in
                  dynamic driving scenarios.
                </Text>
              </VStack>
              
              {/* Area 3 */}
              <VStack 
                bg={cardBg} 
                p={6} 
                borderRadius="lg" 
                boxShadow="md" 
                spacing={4}
                align="flex-start"
                height="100%"
              >
                <Flex
                  w={12}
                  h={12}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="purple.500"
                  mb={2}
                >
                  <Icon as={SiTensorflow} w={6} h={6} />
                </Flex>
                <Heading as="h3" size="md">Machine Learning for Self-Driving</Heading>
                <Text>
                  Application of machine learning techniques to improve decision-making capabilities
                  of autonomous systems. Research on reinforcement learning for complex driving scenarios
                  and neural networks for environment understanding.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Current Research Project */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center" mb={4}>
              Featured Research Project
            </Heading>
            
            <Box 
              bg={cardBg} 
              p={8} 
              borderRadius="xl" 
              boxShadow="lg"
            >
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                <VStack align="flex-start" spacing={4}>
                  <Heading as="h3" size="lg">
                    Driver Assistance System Based on YOLO Object Detection
                  </Heading>
                  <HStack spacing={2} mb={2}>
                    <Badge colorScheme="blue">CARLA Simulator</Badge>
                    <Badge colorScheme="green">YOLO</Badge>
                    <Badge colorScheme="purple">Computer Vision</Badge>
                  </HStack>
                  <Text>
                    This research focuses on developing and validating a driver assistance system 
                    based on YOLO object detection, implemented and tested in the CARLA simulator. 
                    The system provides real-time feedback to drivers by detecting and classifying 
                    objects in the driving environment.
                  </Text>
                  <Text>
                    Key components of this research include:
                  </Text>
                  <VStack align="flex-start" pl={4} spacing={2}>
                    <Text>• Implementation of YOLOv5 for real-time object detection</Text>
                    <Text>• Integration with CARLA simulator for realistic testing environments</Text>
                    <Text>• Development of feedback mechanisms for driver alerts</Text>
                    <Text>• Performance evaluation metrics for system validation</Text>
                    <Text>• Comparative analysis with other detection methodologies</Text>
                  </VStack>
                  <Button colorScheme="brand" size="md" mt={2}>
                    View Research Paper
                  </Button>
                </VStack>
                <Flex justifyContent="center" alignItems="center">
                  <Box 
                    width="100%" 
                    height="300px" 
                    bg="gray.200" 
                    borderRadius="md" 
                    display="flex" 
                    alignItems="center" 
                    justifyContent="center"
                  >
                    {/* Placeholder for project image */}
                    <Text fontWeight="bold">YOLO Detection in CARLA</Text>
                  </Box>
                </Flex>
              </SimpleGrid>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Publications & Presentations */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg" mb={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Publications & Presentations
            </Heading>
            
            <Accordion allowToggle>
              <AccordionItem>
                <h3>
                  <AccordionButton py={4}>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Autonomous Vehicles in Brazil and their Technologies (2022)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4} bg={cardBg}>
                  <VStack align="flex-start" spacing={3}>
                    <Text><strong>Event:</strong> Congresso Fluminense de Iniciação Científica e Tecnológica (UENF - CNPq)</Text>
                    <Text><strong>Type:</strong> Scientific Poster Presentation</Text>
                    <Text><strong>Abstract:</strong> This presentation explored the current state of autonomous vehicle technologies in Brazil, analyzing the technical requirements, regulatory landscape, and potential implementation challenges in the Brazilian context.</Text>
                    <Button size="sm" colorScheme="brand" variant="outline">
                      View Poster
                    </Button>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h3>
                  <AccordionButton py={4}>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Driving into the Future: Advanced Software and Algorithms Powering Autonomous Vehicles (2023)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4} bg={cardBg}>
                  <VStack align="flex-start" spacing={3}>
                    <Text><strong>Event:</strong> Congresso Fluminense de Iniciação Científica e Tecnológica (UENF - CNPq)</Text>
                    <Text><strong>Type:</strong> Scientific Poster Presentation</Text>
                    <Text><strong>Abstract:</strong> This research presented an analysis of cutting-edge algorithms and software frameworks that enable autonomous driving capabilities, with a focus on perception systems, decision-making processes, and control mechanisms.</Text>
                    <Button size="sm" colorScheme="brand" variant="outline">
                      View Poster
                    </Button>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h3>
                  <AccordionButton py={4}>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Exploration and Application of Fundamental Concepts of Autonomous Vehicles (2024)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4} bg={cardBg}>
                  <VStack align="flex-start" spacing={3}>
                    <Text><strong>Event:</strong> Congresso Fluminense de Iniciação Científica e Tecnológica (UENF - CNPq)</Text>
                    <Text><strong>Type:</strong> Scientific Oral Presentation</Text>
                    <Text><strong>Abstract:</strong> A comprehensive study on vehicle state estimation, visual perception, and motion planning for autonomous vehicles. This work included practical implementations in the CARLA simulator and comparative analysis of different approaches.</Text>
                    <Button size="sm" colorScheme="brand" variant="outline">
                      View Presentation
                    </Button>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
              
              <AccordionItem>
                <h3>
                  <AccordionButton py={4}>
                    <Box flex="1" textAlign="left" fontWeight="bold">
                      Driver Assistance System Based on YOLO Object Detection (2025)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4} bg={cardBg}>
                  <VStack align="flex-start" spacing={3}>
                    <Text><strong>Event:</strong> Computer Science Undergraduate Thesis</Text>
                    <Text><strong>Type:</strong> Bachelor's Thesis</Text>
                    <Text><strong>Abstract:</strong> This thesis presents the development and validation of a driver assistance system that utilizes YOLO object detection algorithms to enhance vehicle safety through real-time perception of the driving environment. The system was implemented and thoroughly tested in the CARLA simulator to evaluate its performance under various driving conditions.</Text>
                    <HStack spacing={4}>
                      <Button size="sm" colorScheme="brand">
                        Read Full Thesis
                      </Button>
                      <Button size="sm" colorScheme="brand" variant="outline">
                        View Code Repository
                      </Button>
                    </HStack>
                  </VStack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </VStack>
        </Container>
      </Box>

      {/* Research Tools & Technologies */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Research Tools & Technologies
            </Heading>
            
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              <VStack>
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="blue.400"
                >
                  <Text fontSize="xl" fontWeight="bold">CARLA</Text>
                </Flex>
                <Text fontWeight="medium" textAlign="center">CARLA Simulator</Text>
              </VStack>
              
              <VStack>
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="green.400"
                >
                  <Text fontSize="xl" fontWeight="bold">YOLO</Text>
                </Flex>
                <Text fontWeight="medium" textAlign="center">YOLO Object Detection</Text>
              </VStack>
              
              <VStack>
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="purple.400"
                >
                  <Icon as={SiPytorch} w={8} h={8} />
                </Flex>
                <Text fontWeight="medium" textAlign="center">PyTorch</Text>
              </VStack>
              
              <VStack>
                <Flex
                  w={16}
                  h={16}
                  align="center"
                  justify="center"
                  color="white"
                  rounded="full"
                  bg="orange.400"
                >
                  <Icon as={FaCode} w={8} h={8} />
                </Flex>
                <Text fontWeight="medium" textAlign="center">Python</Text>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg">
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading as="h2" size="xl">
              Interested in Collaboration?
            </Heading>
            <Text fontSize="lg" maxW="container.md">
              I'm always open to research collaborations, academic discussions, or industry partnerships
              in the fields of autonomous vehicles, computer vision, and machine learning.
            </Text>
            <Button 
              as={ChakraLink} 
              href="/contact" 
              size="lg" 
              colorScheme="brand"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Get in Touch
            </Button>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default ResearchPage;
