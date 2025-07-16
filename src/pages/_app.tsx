import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter, Poppins, Roboto } from 'next/font/google';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config';
import theme from '../styles/theme';

// Font configuration
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}

export default appWithTranslation(MyApp);
