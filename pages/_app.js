import Layout from '../components/layout';
import '../styles/globals.css';
import '../styles/index.css';

export default ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);
