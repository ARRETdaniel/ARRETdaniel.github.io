import { Box, Spinner, Center, Text } from '@chakra-ui/react';

const LoadingFallback = () => {
  return (
    <Box height="100vh" width="100vw">
      <Center height="100%">
        <Box textAlign="center">
          <Spinner
            size="xl"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="brand.500"
            marginBottom={4}
          />
          <Text>Loading...</Text>
        </Box>
      </Center>
    </Box>
  );
};

export default LoadingFallback;
