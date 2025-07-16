import { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/Layout";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VStack,
  HStack,
  Link as ChakraLink,
  Icon,
  useColorModeValue,
  Card,
  CardBody,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaResearchgate,
  FaGoogle,
} from "react-icons/fa";
import { useLanguageContext } from '../contexts/LanguageContext';
import SEO from "../components/seo/SEO";

const ContactPage: NextPage = () => {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const { t, isLoading } = useLanguageContext();

  return (
    <Layout>
      <SEO
        title={!isLoading ? t('contact.title') : "Contact"}
        description={!isLoading ? t('contact.intro') : "Get in touch with Daniel Terra Gomes for collaboration, questions, or project inquiries."}
        keywords={["contact", "get in touch", "collaboration", "academic contact"]}
      />

      {/* Hero Section */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg" mb={8}>
        <Container maxW="container.xl">
          <VStack spacing={4} align="center" textAlign="center">
            <Heading as="h1" size="2xl">
              {!isLoading ? t('contact.title') : "Get in Touch"}
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              {!isLoading ? t('contact.intro') : "I'm always open to discussing research opportunities, academic collaborations, or answering questions about my work."}
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Options */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            {/* LinkedIn */}
            <Card bg={cardBg} boxShadow="md" height="100%">
              <CardBody>
                <VStack spacing={4} align="start">
                  <Flex w="100%">
                    <Icon as={FaLinkedin} boxSize={8} color="blue.500" />
                    <Spacer />
                    <Icon as={FaExternalLinkAlt} boxSize={4} color="gray.400" />
                  </Flex>
                  <Heading size="md">LinkedIn</Heading>
                  <Text>Connect with me professionally and send direct messages on LinkedIn.</Text>
                  <Spacer />
                  <Button
                    as={ChakraLink}
                    href="https://www.linkedin.com/in/arretdaniel"
                    isExternal
                    colorScheme="blue"
                    rightIcon={<FaExternalLinkAlt />}
                    width="100%"
                  >
                    Connect on LinkedIn
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* Email */}
            <Card bg={cardBg} boxShadow="md" height="100%">
              <CardBody>
                <VStack spacing={4} align="start">
                  <Flex w="100%">
                    <Icon as={FaEnvelope} boxSize={8} color="red.500" />
                    <Spacer />
                    <Icon as={FaExternalLinkAlt} boxSize={4} color="gray.400" />
                  </Flex>
                  <Heading size="md">Email</Heading>
                  <Text>Send me an email directly for academic or professional inquiries.</Text>
                  <Text fontWeight="medium">danielterra244@gmail.com</Text>
                  <Spacer />
                  <Button
                    as={ChakraLink}
                    href="mailto:danielterra244@gmail.com"
                    colorScheme="red"
                    rightIcon={<FaEnvelope />}
                    width="100%"
                  >
                    Send Email
                  </Button>
                </VStack>
              </CardBody>
            </Card>

            {/* GitHub */}
            <Card bg={cardBg} boxShadow="md" height="100%">
              <CardBody>
                <VStack spacing={4} align="start">
                  <Flex w="100%">
                    <Icon as={FaGithub} boxSize={8} color="gray.700" />
                    <Spacer />
                    <Icon as={FaExternalLinkAlt} boxSize={4} color="gray.400" />
                  </Flex>
                  <Heading size="md">GitHub</Heading>
                  <Text>Check out my code repositories and open source contributions.</Text>
                  <Spacer />
                  <Button
                    as={ChakraLink}
                    href="https://github.com/ARRETdaniel"
                    isExternal
                    colorScheme="gray"
                    rightIcon={<FaExternalLinkAlt />}
                    width="100%"
                  >
                    View GitHub Profile
                  </Button>
                </VStack>
              </CardBody>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Additional Contact Info */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <Box bg={cardBg} p={8} borderRadius="lg" boxShadow="md">
            <Heading as="h2" size="lg" mb={6}>
              Academic Profiles
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
              <HStack spacing={4} align="start">
                <Icon as={FaGoogle} boxSize={6} color="blue.500" />
                <Box>
                  <Text fontWeight="bold">Google Scholar</Text>
                  <ChakraLink
                    href="https://scholar.google.com/citations?user=yourprofileid"
                    isExternal
                    color="blue.500"
                  >
                    View Academic Publications
                  </ChakraLink>
                </Box>
              </HStack>

              <HStack spacing={4} align="start">
                <Icon as={FaResearchgate} boxSize={6} color="green.500" />
                <Box>
                  <Text fontWeight="bold">ResearchGate</Text>
                  <ChakraLink
                    href="https://www.researchgate.net/profile/Your_Profile"
                    isExternal
                    color="green.500"
                  >
                    Connect on ResearchGate
                  </ChakraLink>
                </Box>
              </HStack>

              <HStack spacing={4} align="start">
                <Icon as={FaMapMarkerAlt} boxSize={6} color="red.500" />
                <Box>
                  <Text fontWeight="bold">Location</Text>
                  <Text>Macaé, Rio de Janeiro, Brazil</Text>
                </Box>
              </HStack>

              <HStack spacing={4} align="start">
                <Icon as={FaTwitter} boxSize={6} color="twitter.500" />
                <Box>
                  <Text fontWeight="bold">Twitter</Text>
                  <ChakraLink
                    href="https://twitter.com/arretdaniel"
                    isExternal
                    color="twitter.500"
                  >
                    @arretdaniel
                  </ChakraLink>
                </Box>
              </HStack>
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    </Layout>
  );
};

export default ContactPage;
