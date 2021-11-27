import Layout from '../components/layout';
import '../styles/globals.css';

export default ({ Component, pageProps }) => (
    <Layout>
        <Component {...pageProps} />
    </Layout>
);
