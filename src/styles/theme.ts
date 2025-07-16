import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Color palette inspired by Daniel's personal style from photos
const colors = {
  brand: {
    50: '#EFF3EE',
    100: '#D5DED3',
    200: '#B9C9B6',
    300: '#9DB49A',
    400: '#81A07D',
    500: '#658B61', // Primary olive green from Daniel's shirts
    600: '#4D5D4A', // Deeper olive for headers
    700: '#3A4438',
    800: '#272D26',
    900: '#131613',
  },
  accent: {
    50: '#FDF3EF',
    100: '#F8DCCE',
    200: '#F3C4AD',
    300: '#EDAC8C',
    400: '#E8946B',
    500: '#D95A2B', // Terracotta orange accent
    600: '#B04B26',
    700: '#873A1D',
    800: '#5E2814',
    900: '#35170B',
  },
  neutrals: {
    50: '#F2F4F6',
    100: '#E5DCC7', // Warm beige
    200: '#D9D9D9',
    300: '#A0AEC0',
    400: '#718096',
    500: '#607D8B', // Slate grey
    600: '#4A5568',
    700: '#2D3748',
    800: '#1D3557', // Navy blue
    900: '#171923',
  },
  // Academic color for research and academic sections
  academic: {
    50: '#EBF4FF',
    100: '#C3DAFE',
    200: '#A3BFFA',
    300: '#7F9CF5',
    400: '#667EEA',
    500: '#5A67D8', // Academic purple-blue
    600: '#4C51BF',
    700: '#434190',
    800: '#3C366B',
    900: '#1A1639',
  },
};

// Font configuration with Next.js font variables
const fonts = {
  heading: 'var(--font-poppins), Poppins, sans-serif',
  body: 'var(--font-inter), Inter, system-ui, sans-serif',
  mono: 'var(--font-roboto), Roboto Mono, SFMono-Regular, Menlo, monospace',
};

// Enhanced styles with natural aesthetics
const styles = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      color: props.colorMode === 'dark' ? 'whiteAlpha.900' : 'gray.800',
      transition: 'background-color 0.2s ease-in-out',
    },
    // Add smooth scrolling and improved typography
    html: {
      scrollBehavior: 'smooth',
      fontSize: '16px',
      lineHeight: 'tall',
    },
    // Add subtle texture to backgrounds on certain elements
    '.texture-bg': {
      position: 'relative',
      _after: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.05,
        backgroundImage: `url('/assets/images/texture.png')`,
        pointerEvents: 'none',
      },
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
        bg: 'academic.500',
        color: 'white',
        _hover: {
          bg: 'academic.600',
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
        bg: 'academic.100',
        color: 'academic.700',
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
