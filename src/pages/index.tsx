import { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { useLanguageContext } from '../contexts/LanguageContext';

// Components
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ResearchSection from '../components/ResearchSection';
import GithubProjectsSection from '../components/GithubProjectsSection';
import ContactSection from '../components/ContactSection';

const Home: NextPage = () => {
  const { t, isLoading } = useLanguageContext();

  if (isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Layout>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta name="keywords" content={t('meta.keywords')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://danielterra.com" />
        <meta property="og:image" content="/assets/images/hero-banner1.png" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Box as="main">
        <Hero t={t} />
        <AboutSection t={t} />
        <ResearchSection t={t} />
        <GithubProjectsSection t={t} />
        <ContactSection t={t} />
      </Box>
    </Layout>
  );
};

export default Home;
