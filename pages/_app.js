import '../styles/globals.css';
import Layout from '../components/layout';
import { BookmarkProvider } from '../contexts/bookmarkContext';
import Head from 'next/head'; // Importera Head från next/head

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Lägg till Google Fonts-länken här */}
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
      </Head>
      <BookmarkProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BookmarkProvider>
    </>
  );
}

export default MyApp;
