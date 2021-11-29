import { useSession, signIn, signOut } from 'next-auth/client';
import Link from 'next/link';

const LoginPartial = () => {
    const [session, _] = useSession();
    if (session)
        return (
            <nav className="header-navbar">
                <span className="hover-highlight">
                    Hello {session.user.name}!
                </span>
                <span className="hover-highlight" onClick={() => signOut()}>
                    Sign out
                </span>
            </nav>
        );
    return (
        <nav className="header-navbar">
            <span className="hover-highlight" onClick={() => signIn()}>
                Sign in
            </span>
        </nav>
    );
};

export default LoginPartial;
