export default ({ children }) => (
    <>
        <header>
            <div>
                <div>
                    <a href="#">
                        <img src="~/icon.png" className=".logo" />
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
