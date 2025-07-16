import React, { useState } from 'react';
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
  useColorModeValue,
  FormErrorMessage,
  Icon,
  HStack,
  Link as ChakraLink,
  useToast,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaTwitter } from 'react-icons/fa';

// Motion components
const MotionBox = motion(Box);

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

interface ContactSectionProps {
  t: (key: string) => string;
}

const ContactSection = ({ t }: ContactSectionProps) => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const cardBgColor = useColorModeValue('gray.50', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const headingColor = useColorModeValue('gray.800', 'white');
  const toast = useToast();
  
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      newErrors.name = t('contact.form.errors.nameRequired');
    }
    
    if (!formValues.email.trim()) {
      newErrors.email = t('contact.form.errors.emailRequired');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      newErrors.email = t('contact.form.errors.emailInvalid');
    }
    
    if (!formValues.subject.trim()) {
      newErrors.subject = t('contact.form.errors.subjectRequired');
    }
    
    if (!formValues.message.trim()) {
      newErrors.message = t('contact.form.errors.messageRequired');
    } else if (formValues.message.trim().length < 20) {
      newErrors.message = t('contact.form.errors.messageTooShort');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // This is a placeholder for actual form submission logic
      // In a real implementation, you would send the form data to a server
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: t('contact.form.success.title'),
        description: t('contact.form.success.description'),
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
      
      // Reset form after successful submission
      setFormValues({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      toast({
        title: t('contact.form.error.title'),
        description: t('contact.form.error.description'),
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:contact@danielterra.com',
      color: 'red.500',
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/daniel-terra-gomes/',
      color: 'linkedin.500',
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/ARRETdaniel',
      color: 'gray.700',
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      href: 'https://twitter.com/danielterrag',
      color: 'twitter.500',
    },
  ];
  
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg={bgColor}>
      <Container maxW="container.xl">
        {/* Section header */}
        <MotionBox
          textAlign="center"
          mb={12}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Heading
            as="h2"
            size="xl"
            color={headingColor}
            mb={4}
          >
            {t('contact.title')}
          </Heading>
          <Text
            fontSize="lg"
            maxW="3xl"
            mx="auto"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {t('contact.subtitle')}
          </Text>
        </MotionBox>
        
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Contact form */}
          <MotionBox
            as="form"
            onSubmit={handleSubmit}
            p={8}
            borderRadius="lg"
            shadow="md"
            bg={cardBgColor}
            borderColor={borderColor}
            borderWidth="1px"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={5}>
              <FormControl isInvalid={!!errors.name} isRequired>
                <FormLabel htmlFor="name">{t('contact.form.name')}</FormLabel>
                <Input
                  id="name"
                  name="name"
                  placeholder={t('contact.form.namePlaceholder')}
                  value={formValues.name}
                  onChange={handleChange}
                  focusBorderColor="brand.500"
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={!!errors.email} isRequired>
                <FormLabel htmlFor="email">{t('contact.form.email')}</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t('contact.form.emailPlaceholder')}
                  value={formValues.email}
                  onChange={handleChange}
                  focusBorderColor="brand.500"
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={!!errors.subject} isRequired>
                <FormLabel htmlFor="subject">{t('contact.form.subject')}</FormLabel>
                <Input
                  id="subject"
                  name="subject"
                  placeholder={t('contact.form.subjectPlaceholder')}
                  value={formValues.subject}
                  onChange={handleChange}
                  focusBorderColor="brand.500"
                />
                <FormErrorMessage>{errors.subject}</FormErrorMessage>
              </FormControl>
              
              <FormControl isInvalid={!!errors.message} isRequired>
                <FormLabel htmlFor="message">{t('contact.form.message')}</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t('contact.form.messagePlaceholder')}
                  value={formValues.message}
                  onChange={handleChange}
                  focusBorderColor="brand.500"
                  minH="150px"
                  resize="vertical"
                />
                <FormErrorMessage>{errors.message}</FormErrorMessage>
              </FormControl>
              
              <Button
                mt={4}
                colorScheme="brand"
                isLoading={isSubmitting}
                type="submit"
                width="full"
                size="lg"
                rightIcon={<Icon as={FaPaperPlane} />}
              >
                {t('contact.form.submitButton')}
              </Button>
            </VStack>
          </MotionBox>
          
          {/* Contact information */}
          <MotionBox
            p={8}
            borderRadius="lg"
            shadow="md"
            bg={cardBgColor}
            borderColor={borderColor}
            borderWidth="1px"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <VStack align="start" spacing={8}>
              <Box>
                <Heading as="h3" size="md" mb={4}>
                  {t('contact.info.title')}
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  {t('contact.info.description')}
                </Text>
              </Box>
              
              <Box width="100%">
                <Heading as="h4" size="sm" mb={4}>
                  {t('contact.info.connectTitle')}
                </Heading>
                <VStack align="start" spacing={4}>
                  {socialLinks.map((link, index) => (
                    <MotionBox
                      key={index}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      width="100%"
                    >
                      <ChakraLink
                        href={link.href}
                        isExternal
                        _hover={{ textDecoration: 'none' }}
                      >
                        <HStack spacing={3}>
                          <Icon as={link.icon} w={5} h={5} color={link.color} />
                          <Text fontWeight="medium">{link.name}</Text>
                        </HStack>
                      </ChakraLink>
                    </MotionBox>
                  ))}
                </VStack>
              </Box>
              
              <Box>
                <Heading as="h4" size="sm" mb={4}>
                  {t('contact.info.responseTitle')}
                </Heading>
                <Text color={useColorModeValue('gray.600', 'gray.400')}>
                  {t('contact.info.responseDescription')}
                </Text>
              </Box>
            </VStack>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default ContactSection;
