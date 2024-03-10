
export function BooksList({ books }) {
    console.log('Books List: ', books)

    return <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                {book.title}
            </li>)
        }
    </ul>
}