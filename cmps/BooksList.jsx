
import { BookPreview } from './BookPreview.jsx'
import { BookActions } from './BookActions.jsx'

export function BooksList({ books, onSelectBook }) {

    return <ul className="book-list clean-list">
        {
            books.map((book, idx) => <li key={book.id}>
                <BookPreview book={book} idx={idx} />
                <button className="btn" onClick={() => { onSelectBook(book) }}>Details</button>



                {/* <BookActions books={books}
                    onSelectBook={onSelectBook}
                    book={book} /> */}
            </li>)
        }
    </ul>
}