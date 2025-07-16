import { Box, Container, Stack, Text, Link as ChakraLink, useColorModeValue, Icon, Flex } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as="footer"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
      mt="auto"
      py={6}
    >
      <Container maxW="container.xl">
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© {currentYear} Daniel Terra Gomes. All rights reserved.</Text>

          <Flex gap={4}>
            <ChakraLink href="https://github.com/ARRETdaniel" isExternal>
              <Icon as={FaGithub} boxSize={5} />
            </ChakraLink>
            <ChakraLink href="https://www.linkedin.com/in/arretdaniel" isExternal>
              <Icon as={FaLinkedin} boxSize={5} />
            </ChakraLink>
            <ChakraLink href="https://twitter.com/arretdaniel" isExternal>
              <Icon as={FaTwitter} boxSize={5} />
            </ChakraLink>
          </Flex>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
