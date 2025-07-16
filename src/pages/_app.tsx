import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter, Poppins, Roboto } from 'next/font/google';
import theme from '../styles/theme';
import LoadingFallback from '../components/LoadingFallback';
import dynamic from 'next/dynamic';
import NoSSR from '../components/NoSSR';

// Dynamically import LanguageProvider with no SSR
const DynamicLanguageProvider = dynamic(
  () => import('../contexts/LanguageContext').then(mod => mod.LanguageProvider),
  {
    ssr: false,
    loading: () => <LoadingFallback />
  }
);

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
      <NoSSR fallback={<LoadingFallback />}>
        <DynamicLanguageProvider>
          <main className={`${inter.variable} ${poppins.variable} ${roboto.variable}`}>
            <Component {...pageProps} />
          </main>
        </DynamicLanguageProvider>
      </NoSSR>
    </ChakraProvider>
  );
}

export default MyApp;
