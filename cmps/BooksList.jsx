
const { Link } = ReactRouterDOM

import { BookPreview } from './BookPreview.jsx'

export function BooksList({ books, onRemoveBook }) {

    return <ul className="book-list clean-list">
        {
            books.map((book, idx) => <li key={book.id}>
                <Link to={`/book/${book.id}`}>
                    <BookPreview book={book} idx={idx} />
                </Link>

                <div className="book-actions">
                    <button className="remove-btn" onClick={() => onRemoveBook(book.id)}>X</button>

                    <Link to={`/book/edit/${book.id}`}><button>Edit</button></Link>
                </div>

            </li>)
        }
    </ul>
}