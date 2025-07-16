import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Icon,
  Stack,
  useColorModeValue,
  Button,
  VStack,
  HStack,
  Link as ChakraLink,
  Divider,
} from '@chakra-ui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaUniversity, FaCar, FaMicrochip, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface ResearchProjectProps {
  title: string;
  description: string;
  link: string;
  pdfLink?: string;
  isExternal?: boolean;
  index: number;
}

const ResearchProject = ({ title, description, link, pdfLink, isExternal = false, index }: ResearchProjectProps) => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  
  return (
    <MotionBox
      p={6}
      shadow="md"
      borderWidth="1px"
      borderRadius="lg"
      bg={bgColor}
      borderColor={borderColor}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: 'lg' }}
    >
      <Heading fontSize="xl" mb={3}>{title}</Heading>
      <Text noOfLines={3} mb={4}>{description}</Text>
      <HStack spacing={4} mt="auto">
        <Button
          as={isExternal ? ChakraLink : Link}
          href={link}
          size="sm"
          leftIcon={<Icon as={isExternal ? FaExternalLinkAlt : FaExternalLinkAlt} />}
          variant="outline"
          colorScheme="brand"
          isExternal={isExternal}
        >
          View Details
        </Button>
        {pdfLink && (
          <Button
            as={ChakraLink}
            href={pdfLink}
            size="sm"
            leftIcon={<Icon as={FaDownload} />}
            colorScheme="academic"
            variant="solid"
            isExternal
          >
            Download PDF
          </Button>
        )}
      </HStack>
    </MotionBox>
  );
};

interface ResearchAreaProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  index: number;
}

const ResearchArea = ({ icon, title, description, index }: ResearchAreaProps) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Flex align="center" mb={3}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          rounded="md"
          p={2}
          bg={useColorModeValue('brand.50', 'brand.900')}
          color="brand.500"
          mr={3}
        >
          {icon}
        </Box>
        <Heading fontSize="lg">{title}</Heading>
      </Flex>
      <Text color={useColorModeValue('gray.600', 'gray.400')} pl={10}>
        {description}
      </Text>
    </MotionBox>
  );
};

interface ResearchSectionProps {
  t: (key: string) => string;
}

const ResearchSection = ({ t }: ResearchSectionProps) => {
  const bgColor = useColorModeValue('white', 'gray.900');
  const headingColor = useColorModeValue('gray.800', 'white');
  
  return (
    <Box as="section" py={{ base: 12, md: 20 }} bg={bgColor}>
      <Container maxW="container.xl">
        {/* Section header */}
        <Box textAlign="center" mb={12}>
          <Heading
            as="h2"
            size="xl"
            color={headingColor}
            mb={4}
          >
            {t('research.title')}
          </Heading>
          <Text
            fontSize="lg"
            maxW="3xl"
            mx="auto"
            color={useColorModeValue('gray.600', 'gray.400')}
          >
            {t('research.subtitle')}
          </Text>
        </Box>
        
        {/* Research areas */}
        <VStack spacing={8} mb={16} align="stretch">
          <ResearchArea
            icon={<Icon as={FaCar} w={6} h={6} />}
            title={t('research.areas.autonomousVehicles.title')}
            description={t('research.areas.autonomousVehicles.description')}
            index={0}
          />
          <Divider />
          <ResearchArea
            icon={<Icon as={FaMicrochip} w={6} h={6} />}
            title={t('research.areas.machineLearning.title')}
            description={t('research.areas.machineLearning.description')}
            index={1}
          />
          <Divider />
          <ResearchArea
            icon={<Icon as={FaUniversity} w={6} h={6} />}
            title={t('research.areas.computerVision.title')}
            description={t('research.areas.computerVision.description')}
            index={2}
          />
        </VStack>
        
        {/* Featured research projects */}
        <Box mb={10}>
          <Heading
            as="h3"
            size="lg"
            mb={8}
          >
            {t('research.featuredProjects')}
          </Heading>
          
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <ResearchProject
              title={t('research.projects.thesis.title')}
              description={t('research.projects.thesis.description')}
              link="/research/thesis"
              pdfLink="/TCC.pdf"
              index={0}
            />
            <ResearchProject
              title={t('research.projects.internship.title')}
              description={t('research.projects.internship.description')}
              link="/research/internship"
              pdfLink="/relatorio_estagio_2025_1_danielTerraGomes.pdf"
              index={1}
            />
            <ResearchProject
              title={t('research.projects.project3.title')}
              description={t('research.projects.project3.description')}
              link="/research/project3"
              index={2}
            />
          </SimpleGrid>
        </Box>
        
        {/* View all research CTA */}
        <Box textAlign="center" mt={12}>
          <Button
            as={Link}
            href="/research"
            size="lg"
            colorScheme="brand"
            rightIcon={<Icon as={FaExternalLinkAlt} />}
          >
            {t('research.viewAllButton')}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ResearchSection;
