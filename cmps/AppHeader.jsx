const { Link, NavLink } = ReactRouterDOM
const { useNavigate } = ReactRouter

export function AppHeader() {

    const navigate = useNavigate()

    function onGoHome() {
        navigate("/")
    }

    return <header className="app-header full">
        <h1 onClick={onGoHome}>Miss Book Shop</h1>
        <nav className="nav-bar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/book">Our Books</NavLink>
            <NavLink to="/about">About Us</NavLink>
        </nav>
    </header>
}