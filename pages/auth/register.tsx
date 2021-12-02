import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { FormEvent, useState } from 'react';
import config from '../../config';
import styles from '../../styles/Login.module.css';

const Register: NextPage = () => {
  const [existsError, setExistsError] = useState('');
  const router = useRouter();

  const registerUser = async (event: FormEvent) => {
    event.preventDefault();

    const username: string = event.target[0].value;
    const email: string = event.target[1].value;
    const password: string = event.target[1].value;

    const res = await fetch(`${config.apiURL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const errorCode = res.status;

    if (errorCode === 409) {
      setExistsError('Account with this username or email already exists');
      return;
    }

    router.push('/');
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
        <div>{existsError}</div>
      </form>
    </div>
  );
};

export default Register;
