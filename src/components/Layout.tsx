import { ReactNode } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
    >
      <Header />
      <Box as="main" flex="1">
        <Container maxW="container.xl" py={8}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Flex>
  );
};

export default Layout;
