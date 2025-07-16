import { ReactNode } from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface LayoutProps {
  children: ReactNode;
  maxWidth?: string;
}

const Layout = ({ children, maxWidth = "container.xl" }: LayoutProps) => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
    >
      <Header />
      <Box as="main" flex="1">
        <Container maxW={maxWidth} py={8}>
          {children}
        </Container>
      </Box>
      <Footer />
      <ScrollToTop />
    </Flex>
  );
};

export default Layout;
