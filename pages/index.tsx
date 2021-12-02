import { NextPage } from 'next';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <h1>Welcome to pentago.org!</h1>
    <div className={styles.links}>
      <div>
        <Link href="/play">
          <a>Play</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Test 1</a>
        </Link>
      </div>
      <div>
        <Link href="/">
          <a>Test 2</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
