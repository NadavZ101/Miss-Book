
import { BookPreview } from './BookPreview.jsx'

export function BooksList({ books }) {
    console.log('Books List: ', books)

    return <ul className="book-list clean-list">
        {
            books.map((book, idx) => <li key={book.id}>
                <BookPreview book={book} idx={idx} />
            </li>)
        }
    </ul>
}