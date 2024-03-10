export function AppHeader({ setPage }) {

    function onSetPage(ev, page) {
        ev.preventDefault()
        setPage(page)
    }

    return <header className="app-header full">
        <h1>Miss Book Shop</h1>
        <div className="nav-bar">
            <a href="" onClick={(ev) => onSetPage(ev, 'home')}>Home</a> |
            <a href="" onClick={(ev) => onSetPage(ev, 'book')}>Books</a> |
            <a href="" onClick={(ev) => onSetPage(ev, 'about')}>About</a>
        </div>
    </header>
}