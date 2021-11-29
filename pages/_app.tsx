import { AppProps } from 'next/dist/shared/lib/router/router';
import { Provider } from 'next-auth/client';
import Layout from '../components/layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps) => (
    <Provider session={pageProps.session}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </Provider>
);

export default App;
