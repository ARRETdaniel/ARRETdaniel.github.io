import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Color palette inspired by technology and academia
const colors = {
  brand: {
    50: '#e6f7ff',
    100: '#b3e0ff',
    200: '#80caff',
    300: '#4db3ff',
    400: '#1a9dff',
    500: '#0077e6',
    600: '#005cb3',
    700: '#004280',
    800: '#00294d',
    900: '#00121a',
  },
  accent: {
    50: '#fff8e6',
    100: '#ffeab3',
    200: '#ffdc80',
    300: '#ffcd4d',
    400: '#ffbf1a',
    500: '#e6a600',
    600: '#b38200',
    700: '#805d00',
    800: '#4d3800',
    900: '#1a1300',
  },
  neutrals: {
    50: '#f2f2f2',
    100: '#d9d9d9',
    200: '#bfbfbf',
    300: '#a6a6a6',
    400: '#8c8c8c',
    500: '#737373',
    600: '#595959',
    700: '#404040',
    800: '#262626',
    900: '#0d0d0d',
  },
  // Added tertiary color for research and academic sections
  tertiary: {
    50: '#f0e6ff',
    100: '#d1b3ff',
    200: '#b380ff',
    300: '#944dff',
    400: '#751aff',
    500: '#6000e6',
    600: '#4c00b3',
    700: '#380080',
    800: '#24004d',
    900: '#0c001a',
  },
};

// Font configuration
const fonts = {
  heading: 'Poppins, sans-serif',
  body: 'Roboto, system-ui, sans-serif',
  mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
};

// Enhanced styles
const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
      color: props.colorMode === 'dark' ? 'white' : 'gray.800',
    },
    // Add smooth scrolling
    html: {
      scrollBehavior: 'smooth',
    },
  }),
};

// Component style overrides
const components = {
  Button: {
    baseStyle: {
      fontWeight: 'bold',
      borderRadius: 'md',
    },
    variants: {
      solid: {
        bg: 'brand.500',
        color: 'white',
        _hover: {
          bg: 'brand.600',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
        _active: {
          bg: 'brand.700',
        },
      },
      outline: {
        borderColor: 'brand.500',
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
          transform: 'translateY(-2px)',
          boxShadow: 'md',
        },
      },
      ghost: {
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
        },
      },
      // Adding academic-styled variant
      academic: {
        bg: 'tertiary.500',
        color: 'white',
        _hover: {
          bg: 'tertiary.600',
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        },
      },
    },
  },
  Card: {
    baseStyle: {
      container: {
        borderRadius: 'lg',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
        _hover: {
          transform: 'translateY(-5px)',
          boxShadow: 'xl',
        },
      },
    },
  },
  Link: {
    baseStyle: {
      color: 'brand.500',
      _hover: {
        textDecoration: 'none',
        color: 'brand.600',
      },
    },
  },
  // Enhanced heading styles
  Heading: {
    baseStyle: {
      fontWeight: '600',
      lineHeight: '1.2',
    },
    variants: {
      pageTitle: {
        fontSize: ['2xl', '3xl', '4xl'],
        mb: 6,
        position: 'relative',
        _after: {
          content: '""',
          display: 'block',
          width: '80px',
          height: '4px',
          background: 'brand.500',
          marginTop: '16px',
        },
      },
      sectionTitle: {
        fontSize: ['xl', '2xl', '3xl'],
        mb: 4,
        color: 'brand.600',
      },
    },
  },
  // Badge enhancements
  Badge: {
    baseStyle: {
      px: 2,
      py: 1,
      borderRadius: 'md',
      fontWeight: 'medium',
    },
    variants: {
      skill: {
        bg: 'brand.100',
        color: 'brand.700',
      },
      research: {
        bg: 'tertiary.100',
        color: 'tertiary.700',
      },
      project: {
        bg: 'accent.100',
        color: 'accent.700',
      },
    },
  },
};

// Theme configuration
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

// Extended theme
const theme = extendTheme({
  colors,
  fonts,
  components,
  config,
  styles,
});

export default theme;
