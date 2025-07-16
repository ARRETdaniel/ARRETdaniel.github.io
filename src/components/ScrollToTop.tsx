import { useEffect, useState } from 'react';
import { Box, IconButton, useColorModeValue } from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * ScrollToTop component
 * Appears when the user scrolls down and allows them to
 * quickly return to the top of the page
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonBg = useColorModeValue('brand.500', 'brand.400');
  const buttonHoverBg = useColorModeValue('brand.600', 'brand.300');

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          as={motion.div}
          position="fixed"
          bottom="20px"
          right={["16px", "24px"]}
          zIndex={3}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
        >
          <IconButton
            aria-label="Scroll to top"
            icon={<FaArrowUp />}
            onClick={scrollToTop}
            size="md"
            isRound
            bg={buttonBg}
            color="white"
            _hover={{ bg: buttonHoverBg }}
            boxShadow="md"
            transition="all 0.2s"
          />
        </Box>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
