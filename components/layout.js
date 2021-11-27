import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/icon.svg';

export default ({ children }) => (
    <>
        <header>
            <div className="header-container">
                <div>
                    <Link href="/">
                        <a>
                            <div className="header-logo">
                                <Image
                                    src={logo}
                                    height="40"
                                    width="40"
                                ></Image>
                            </div>
                        </a>
                    </Link>
                    <nav className="header-navbar">
                        <Link href="/">
                            <a className="hover-highlight">Home</a>
                        </Link>
                        <Link href="/play">
                            <a className="hover-highlight">Play</a>
                        </Link>
                    </nav>
                </div>
                <div>
                    <nav className="header-navbar">
                        <Link href="/register">
                            <a className="hover-highlight">Register</a>
                        </Link>
                        <Link href="/login">
                            <a className="hover-highlight">Login</a>
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
        <main>{children}</main>
        <footer>
            <div>&copy; 2021 - Pentago</div>
        </footer>
    </>
);
