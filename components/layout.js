import Link from 'next/link';
import icon from '../public/vercel.svg';

export default ({ children }) => (
    <>
        <header>
            <div className="header-container">
                <div>
                    <a href="#">
                        <img
                            src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Codepen-512.png"
                            className="header-logo"
                        />
                    </a>
                    <nav className="header-navbar">
                        <Link href="/">
                            <a className=".hover-highlight">Home</a>
                        </Link>
                        <Link href="/play">
                            <a className=".hover-highlight">Play</a>
                        </Link>
                    </nav>
                </div>
                <div>
                    <nav className="header-navbar">
                        <Link href="/register">
                            <a className=".hover-highlight">Register</a>
                        </Link>
                        <Link href="/login">
                            <a className=".hover-highlight">Login</a>
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
