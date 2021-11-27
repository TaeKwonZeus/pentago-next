import styles from '../styles/Home.module.css';

export default () => (
    <div className={styles.container}>
        <h1>Welcome to pentago.org!</h1>
        <div className={styles.links}>
            <div>
                <a href="/play">Play</a>
            </div>
            <div>
                <a href="#">Test 1</a>
            </div>
            <div>
                <a href="#">Test 2</a>
            </div>
        </div>
    </div>
);
