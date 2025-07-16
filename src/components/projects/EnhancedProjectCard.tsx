import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Badge,
  Link as ChakraLink,
  Button,
  Flex,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt, FaCodeBranch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { slideInFromBottom } from '../../utils/animations';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink?: string;
  image: string;
  category: string;
  index: number;
}

const MotionBox = motion(Box);

const EnhancedProjectCard = ({
  title,
  description,
  technologies,
  githubLink,
  demoLink,
  image,
  category,
  index
}: ProjectCardProps) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  const badgeColorScheme = getBadgeColorScheme(category);

  // Stagger the animations based on the index
  const animationDelay = index * 0.1;

  return (
    <MotionBox
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={slideInFromBottom}
      transition={{ delay: animationDelay }}
      bg={cardBg}
      borderRadius="lg"
      boxShadow="md"
      overflow="hidden"
      height="100%"
      sx={{
        _hover: { transform: 'translateY(-5px)', boxShadow: 'xl' },
        transition: 'all 0.3s ease'
      }}
    >
      <Box height="200px" position="relative" overflow="hidden">
        {image ? (
          <Image
            src={image}
            alt={`${title} project thumbnail`}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        ) : (
          <Flex
            height="100%"
            align="center"
            justify="center"
            bg={`${badgeColorScheme}.100`}
            color={`${badgeColorScheme}.700`}
          >
            <Heading size="md">{title}</Heading>
          </Flex>
        )}

        {/* Category Badge */}
        <Badge
          position="absolute"
          top="10px"
          right="10px"
          colorScheme={badgeColorScheme}
          px={2}
          py={1}
          borderRadius="full"
          fontWeight="medium"
        >
          {category}
        </Badge>
      </Box>

      <Box p={6} height="calc(100% - 200px)" display="flex" flexDirection="column">
        <VStack align="flex-start" spacing={3} flex="1">
          <HStack spacing={2} flexWrap="wrap">
            {technologies.slice(0, 3).map((tech, idx) => (
              <Badge key={idx} colorScheme={badgeColorScheme} variant="subtle" mb={1}>
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge colorScheme="gray" mb={1} cursor="pointer" title={technologies.slice(3).join(', ')}>
                +{technologies.length - 3}
              </Badge>
            )}
          </HStack>

          <Heading as="h3" size="md">
            {title}
          </Heading>

          <Text color={textColor} noOfLines={3} flex="1">
            {description}
          </Text>
        </VStack>

        <HStack spacing={4} mt={4} justify="flex-start">
          <Button
            as={ChakraLink}
            href={githubLink}
            isExternal
            leftIcon={<FaGithub />}
            size="sm"
            colorScheme="gray"
            variant="outline"
          >
            Code
          </Button>

          {demoLink && (
            <Button
              as={ChakraLink}
              href={demoLink}
              isExternal
              leftIcon={<FaExternalLinkAlt />}
              size="sm"
              colorScheme={badgeColorScheme}
            >
              Demo
            </Button>
          )}
        </HStack>
      </Box>
    </MotionBox>
  );
};

// Helper function to determine badge color based on project category
const getBadgeColorScheme = (category: string): string => {
  const categoryMap: Record<string, string> = {
    'Data Analysis': 'blue',
    'Machine Learning': 'purple',
    'Web Development': 'teal',
    'Algorithms': 'orange',
    'NLP': 'green',
    'Programming': 'red',
    'Research': 'cyan'
  };

  return categoryMap[category] || 'brand';
};

export default EnhancedProjectCard;
