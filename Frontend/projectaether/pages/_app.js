// pages/_app.js
import '../styles/globals.css';
import Layout from '../components/PageShell';
import Nav from '../components/Nav';
import { ThemeProvider } from '../context/ThemeContext';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Nav />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
