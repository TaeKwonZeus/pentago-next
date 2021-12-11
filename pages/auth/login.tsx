import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { FormEvent, useState } from 'react';
import styles from '../../styles/Login.module.css';
import { LoginRequestBody } from '../api/auth/login';

const Login: NextPage = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const loginUser = async (event: FormEvent) => {
    event.preventDefault();

    const usernameOrEmail = event.target[0].value;
    const password = event.target[1].value;

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        usernameOrEmail: usernameOrEmail,
        password: password,
      } as LoginRequestBody),
    });

    if (res.status === 404) {
      setErrorMessage('Invalid credentials');
      return;
    }

    await router.push('/');
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <div>
          <label htmlFor="usernameOrEmail">Username or Email</label>
          <input name="usernameOrEmail" type="text" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input name="password" type="password" required />
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit" className={styles.submitButton}>
            Log In
          </button>
        </div>
        <div>{errorMessage}</div>
      </form>
    </div>
  );
};

export default Login;
