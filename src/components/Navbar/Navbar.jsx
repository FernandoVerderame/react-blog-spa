const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-secondary-subtle">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Blog</a>
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Posts</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;