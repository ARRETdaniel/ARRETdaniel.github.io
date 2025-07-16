import { NextPage } from 'next';
import Head from 'next/head';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link as ChakraLink,
  useColorModeValue,
  Badge,
  Flex,
  Divider
} from '@chakra-ui/react';
import Layout from '../../components/Layout';
import { FaExternalLinkAlt, FaFilePdf } from 'react-icons/fa';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

interface Publication {
  title: string;
  authors: string;
  conference: string;
  year: number;
  abstract: string;
  keywords: string[];
  pdfLink: string;
  doiLink?: string;
}

const publications: Publication[] = [
  {
    title: "Enhancing Autonomous Vehicles with Machine Learning: A Comprehensive Review",
    authors: "Daniel Terra Gomes, et al.",
    conference: "IEEE International Conference on Autonomous Systems",
    year: 2023,
    abstract: "This paper presents a comprehensive review of machine learning techniques applied to autonomous vehicles, highlighting recent advances and challenges in the field.",
    keywords: ["autonomous vehicles", "machine learning", "computer vision", "deep learning"],
    pdfLink: "/TCC.pdf",
    doiLink: "https://doi.org/10.1109/example12345.2023"
  },
  {
    title: "Real-time Object Detection for Autonomous Navigation in Urban Environments",
    authors: "Daniel Terra Gomes, et al.",
    conference: "International Conference on Computer Vision Applications",
    year: 2022,
    abstract: "We propose a novel real-time object detection algorithm specifically designed for autonomous vehicles operating in complex urban environments.",
    keywords: ["object detection", "autonomous navigation", "urban environments", "real-time processing"],
    pdfLink: "/relatorio_estagio_2025_1_danielTerraGomes.pdf"
  }
];

const PublicationsPage: NextPage = () => {
  const { t } = useTranslation('common');
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Layout>
      <Head>
        <title>Publications | Daniel Terra Gomes</title>
        <meta name="description" content="Academic publications by Daniel Terra Gomes on autonomous vehicles and machine learning research." />
      </Head>

      <Container maxW="container.xl" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          {t('publications.title')}
        </Heading>

        <Text fontSize="xl" mb={10}>
          {t('publications.intro')}
        </Text>

        <VStack spacing={8} align="stretch">
          {publications.map((pub, index) => (
            <Box
              key={index}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              bg={bgColor}
              borderColor={borderColor}
              shadow="md"
              _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
              transition="all 0.3s"
            >
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="lg">
                  {pub.title}
                </Heading>

                <Text fontSize="md" color="gray.500">
                  {pub.authors}
                </Text>

                <HStack>
                  <Badge colorScheme="blue">{pub.conference}</Badge>
                  <Badge colorScheme="green">{pub.year}</Badge>
                </HStack>

                <Divider />

                <Box>
                  <Heading as="h3" size="sm" mb={2}>
                    {t('publications.abstract')}
                  </Heading>
                  <Text>{pub.abstract}</Text>
                </Box>

                <Box>
                  <Heading as="h3" size="sm" mb={2}>
                    {t('publications.keywords')}
                  </Heading>
                  <Flex gap={2} flexWrap="wrap">
                    {pub.keywords.map((keyword, kidx) => (
                      <Badge key={kidx} colorScheme="purple">
                        {keyword}
                      </Badge>
                    ))}
                  </Flex>
                </Box>

                <HStack spacing={4}>
                  <ChakraLink href={pub.pdfLink} isExternal color="blue.500">
                    <HStack>
                      <FaFilePdf />
                      <Text>{t('publications.viewPdf')}</Text>
                    </HStack>
                  </ChakraLink>

                  {pub.doiLink && (
                    <ChakraLink href={pub.doiLink} isExternal color="blue.500">
                      <HStack>
                        <FaExternalLinkAlt />
                        <Text>{t('publications.viewDoi')}</Text>
                      </HStack>
                    </ChakraLink>
                  )}
                </HStack>
              </VStack>
            </Box>
          ))}
        </VStack>
      </Container>
    </Layout>
  );
};

export const getStaticProps = async ({ locale = 'en' }: { locale?: string }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
};

export default PublicationsPage;
