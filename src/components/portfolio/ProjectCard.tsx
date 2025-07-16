import { Box, Heading, Text, SimpleGrid, VStack, HStack, Badge, Button, Link as ChakraLink, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  imageSrc?: string;
}

const ProjectCard = ({ title, description, technologies, githubLink, demoLink, imageSrc }: ProjectCardProps) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg={useColorModeValue('white', 'gray.800')}
      transition="all 0.3s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
      <Box position="relative" height="200px" bg="gray.200" overflow="hidden">
        {/* Placeholder for project image */}
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
        >
          <Text>{title} Image</Text>
        </Box>
      </Box>

      <Box p={6}>
        <Heading as="h3" size="md" mb={2}>
          {title}
        </Heading>

        <HStack spacing={2} mb={3} flexWrap="wrap">
          {technologies.map((tech) => (
            <Badge key={tech} colorScheme="blue" mb={1}>
              {tech}
            </Badge>
          ))}
        </HStack>

        <Text color={useColorModeValue('gray.600', 'gray.300')} mb={4}>
          {description}
        </Text>

        <HStack spacing={4}>
          <ChakraLink href={githubLink} isExternal>
            <Button leftIcon={<FaGithub />} size="sm" colorScheme="gray">
              GitHub
            </Button>
          </ChakraLink>

          {demoLink && (
            <ChakraLink href={demoLink} isExternal>
              <Button leftIcon={<FaExternalLinkAlt />} size="sm" colorScheme="brand">
                Live Demo
              </Button>
            </ChakraLink>
          )}
        </HStack>
      </Box>
    </Box>
  );
};

export default ProjectCard;
