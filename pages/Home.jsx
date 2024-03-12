import { BookAdd } from "../cmps/BookAdd.jsx"

const { Link } = ReactRouterDOM


export function Home() {
    return (
        <section className="home">
            <h2>Miss Book Shop</h2>
            <p>Welcome to Miss Book shop - start your reading adventure with us</p>

            <Link to="/add"> Add From Google Books</Link>
        </section>
    )
}
