import { NextPage } from 'next';
import { FormEvent } from 'react';
import styles from '../../styles/Login.module.css';

const Register: NextPage = () => {
    const registerUser = (event: FormEvent) => {
        event.preventDefault();

        const username: string = event.target[0].value;
    };

    return (
        <div className={styles.container}>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input name="username" type="text" required />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" required />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input name="password" required />
                </div>
                <div className={styles.buttonWrapper}>
                    <button type="submit" className={styles.submitButton}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
