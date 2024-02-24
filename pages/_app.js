import "@/styles/globals.css";
import Layout from "../components/layout";
import { BookmarkProvider } from "@/contexts/bookmarkContext";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <BookmarkProvider>
          <Component {...pageProps} />
        </BookmarkProvider>
      </Layout>
    </>
  );
}
