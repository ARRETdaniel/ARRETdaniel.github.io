import {
  Box,
  Heading,
  Text,
  HStack,
  Badge,
  Link as ChakraLink,
  useColorModeValue,
  VStack,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FaGithub, FaStar, FaCodeBranch, FaExclamationCircle } from 'react-icons/fa';
import { useTranslation } from 'next-i18next';

interface GitHubRepoProps {
  name: string;
  description: string;
  url: string;
  stars: number;
  forks: number;
  issues: number;
  language: string;
  topics: string[];
}

const GitHubRepo = ({
  name,
  description,
  url,
  stars,
  forks,
  issues,
  language,
  topics
}: GitHubRepoProps) => {
  const { t } = useTranslation('common');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  // Map of language names to colors
  const languageColors: Record<string, string> = {
    JavaScript: 'yellow.500',
    TypeScript: 'blue.500',
    Python: 'green.500',
    Java: 'orange.500',
    C: 'purple.500',
    'C++': 'pink.500',
    'C#': 'teal.500',
    HTML: 'red.500',
    CSS: 'cyan.500',
    Ruby: 'red.600',
    Go: 'blue.400',
    Rust: 'orange.600',
    Dart: 'blue.300',
    Swift: 'orange.400',
    Kotlin: 'purple.400',
    PHP: 'purple.300',
    Shell: 'gray.500',
    // Add more languages as needed
  };

  const languageColor = languageColors[language] || 'gray.500';

  return (
    <Box
      p={6}
      borderWidth="1px"
      borderRadius="lg"
      bg={bgColor}
      borderColor={borderColor}
      shadow="md"
      _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
      transition="all 0.3s"
    >
      <VStack align="start" spacing={4}>
        <Flex justify="space-between" w="full" align="center">
          <HStack>
            <Icon as={FaGithub} boxSize={5} />
            <Heading as="h3" size="md">
              <ChakraLink href={url} isExternal color="blue.500">
                {name}
              </ChakraLink>
            </Heading>
          </HStack>

          <Badge colorScheme={languageColor.split('.')[0]}>
            {language}
          </Badge>
        </Flex>

        <Text>{description}</Text>

        <Flex gap={2} flexWrap="wrap">
          {topics.map((topic, index) => (
            <Badge key={index} colorScheme="purple" variant="subtle">
              {topic}
            </Badge>
          ))}
        </Flex>

        <HStack spacing={4}>
          <HStack>
            <Icon as={FaStar} color="yellow.400" />
            <Text fontSize="sm">{stars}</Text>
          </HStack>

          <HStack>
            <Icon as={FaCodeBranch} color="green.400" />
            <Text fontSize="sm">{forks}</Text>
          </HStack>

          <HStack>
            <Icon as={FaExclamationCircle} color="red.400" />
            <Text fontSize="sm">{issues}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default GitHubRepo;
