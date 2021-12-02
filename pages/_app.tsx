import { AppProps } from 'next/dist/shared/lib/router/router';
import Layout from '../components/layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
