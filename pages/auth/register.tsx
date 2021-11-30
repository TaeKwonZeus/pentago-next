import { NextPage } from 'next';
import { FormEvent, useState } from 'react';

const Register: NextPage = () => {
    const registerUser = (event: FormEvent) => {
        event.preventDefault();

        const username: string = event.target[0].value;
    };

    return (
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
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
