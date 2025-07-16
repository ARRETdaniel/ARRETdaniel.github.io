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
};

// Font configuration
const fonts = {
  heading: 'Poppins, sans-serif',
  body: 'Roboto, system-ui, sans-serif',
  mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
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
        },
      },
      ghost: {
        color: 'brand.500',
        _hover: {
          bg: 'brand.50',
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
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
});

export default theme;
