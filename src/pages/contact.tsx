import { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Link as ChakraLink,
  Icon,
  useColorModeValue,
  FormErrorMessage
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

const ContactPage: NextPage = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');
  
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  // Form validation
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false
  });
  
  const validateForm = () => {
    const newErrors = {
      name: !name.trim(),
      email: !email.trim() || !/^\S+@\S+\.\S+$/.test(email),
      message: !message.trim()
    };
    
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, would normally submit to backend
      alert('Thanks for your message! This form is currently for demonstration purposes only.');
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    }
  };
  
  return (
    <Layout>
      <Head>
        <title>Contact | Daniel Terra Gomes</title>
        <meta name="description" content="Get in touch with Daniel Terra Gomes for research collaborations, speaking engagements, or other inquiries." />
      </Head>

      {/* Hero Section */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg" mb={8}>
        <Container maxW="container.xl">
          <VStack spacing={4} align="center" textAlign="center">
            <Heading as="h1" size="2xl">
              Get in Touch
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              I'm always open to discussing research opportunities, academic collaborations, or answering questions about my work.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form and Info */}
      <Box as="section" mb={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {/* Contact Form */}
            <Box 
              bg={cardBg} 
              p={8} 
              borderRadius="lg" 
              boxShadow="md"
            >
              <VStack as="form" spacing={6} align="stretch" onSubmit={handleSubmit}>
                <Heading as="h2" size="lg">
                  Send a Message
                </Heading>
                
                <FormControl isRequired isInvalid={errors.name}>
                  <FormLabel>Name</FormLabel>
                  <Input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                  />
                  {errors.name && <FormErrorMessage>Name is required</FormErrorMessage>}
                </FormControl>
                
                <FormControl isRequired isInvalid={errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <FormErrorMessage>Valid email is required</FormErrorMessage>}
                </FormControl>
                
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input 
                    type="text" 
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this regarding?"
                  />
                </FormControl>
                
                <FormControl isRequired isInvalid={errors.message}>
                  <FormLabel>Message</FormLabel>
                  <Textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    minH="150px"
                  />
                  {errors.message && <FormErrorMessage>Message is required</FormErrorMessage>}
                </FormControl>
                
                <Button 
                  type="submit" 
                  colorScheme="brand" 
                  size="lg" 
                  alignSelf="flex-start"
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
            
            {/* Contact Information */}
            <Box>
              <VStack align="stretch" spacing={8}>
                <Heading as="h2" size="lg">
                  Contact Information
                </Heading>
                
                <VStack align="start" spacing={6}>
                  <HStack spacing={4}>
                    <Icon as={FaEnvelope} boxSize={6} color="brand.500" />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">Email</Text>
                      <ChakraLink href="mailto:danielterra244@gmail.com" color="brand.500">
                        danielterra244@gmail.com
                      </ChakraLink>
                    </VStack>
                  </HStack>
                  
                  <HStack spacing={4}>
                    <Icon as={FaMapMarkerAlt} boxSize={6} color="brand.500" />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">Location</Text>
                      <Text>Macaé, Rio de Janeiro, Brazil</Text>
                    </VStack>
                  </HStack>
                </VStack>
                
                <Box pt={8}>
                  <Heading as="h3" size="md" mb={4}>
                    Connect on Social Media
                  </Heading>
                  
                  <VStack align="start" spacing={4}>
                    <HStack spacing={4}>
                      <Icon as={FaLinkedin} boxSize={6} color="blue.500" />
                      <ChakraLink href="https://www.linkedin.com/in/arretdaniel" isExternal>
                        linkedin.com/in/arretdaniel
                      </ChakraLink>
                    </HStack>
                    
                    <HStack spacing={4}>
                      <Icon as={FaGithub} boxSize={6} color="gray.700" />
                      <ChakraLink href="https://github.com/ARRETdaniel" isExternal>
                        github.com/ARRETdaniel
                      </ChakraLink>
                    </HStack>
                    
                    <HStack spacing={4}>
                      <Icon as={FaTwitter} boxSize={6} color="blue.400" />
                      <ChakraLink href="https://twitter.com/arretdaniel" isExternal>
                        twitter.com/arretdaniel
                      </ChakraLink>
                    </HStack>
                  </VStack>
                </Box>
                
                <Box 
                  mt={8} 
                  p={6} 
                  bg={bgColor}
                  borderRadius="md"
                  boxShadow="inner"
                >
                  <VStack align="start" spacing={3}>
                    <Heading as="h3" size="md">
                      Academic Inquiries
                    </Heading>
                    <Text>
                      For academic collaborations, research opportunities, or speaking engagements, please include details about your institution and the specific area of interest in your message.
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box as="section" py={12} bg={bgColor} borderRadius="lg">
        <Container maxW="container.xl">
          <VStack spacing={8} align="stretch">
            <Heading as="h2" size="xl" textAlign="center">
              Frequently Asked Questions
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box p={6} bg={cardBg} borderRadius="md" boxShadow="md">
                <VStack align="start" spacing={3}>
                  <Heading as="h3" size="md">
                    Are you available for research collaborations?
                  </Heading>
                  <Text>
                    Yes, I'm open to collaborations in autonomous vehicles, computer vision, and machine learning research. Please provide details about your project in your message.
                  </Text>
                </VStack>
              </Box>
              
              <Box p={6} bg={cardBg} borderRadius="md" boxShadow="md">
                <VStack align="start" spacing={3}>
                  <Heading as="h3" size="md">
                    Can I get access to your research code?
                  </Heading>
                  <Text>
                    Most of my research code is available on my GitHub profile. For specific projects not publicly available, please contact me directly with your request.
                  </Text>
                </VStack>
              </Box>
              
              <Box p={6} bg={cardBg} borderRadius="md" boxShadow="md">
                <VStack align="start" spacing={3}>
                  <Heading as="h3" size="md">
                    How quickly do you respond to messages?
                  </Heading>
                  <Text>
                    I typically respond within 2-3 business days. For urgent matters, please mention the time sensitivity in your subject line.
                  </Text>
                </VStack>
              </Box>
              
              <Box p={6} bg={cardBg} borderRadius="md" boxShadow="md">
                <VStack align="start" spacing={3}>
                  <Heading as="h3" size="md">
                    Are you available for speaking engagements?
                  </Heading>
                  <Text>
                    Yes, I'm available for presentations on autonomous vehicles, computer vision, and data science topics. Please include event details and dates in your inquiry.
                  </Text>
                </VStack>
              </Box>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </Layout>
  );
};

export default ContactPage;
