const { useState, useEffect } = React
const { Link } = ReactRouterDOM

import { BooksList } from "../cmps/BooksList.jsx"
import { BookFilter } from '../cmps/BookFilter.jsx'


import { bookService } from "../services/book.service.js"
import { eventBusService, showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        loadBooks()
    }, [filterBy])

    function onSetFilter(fieldsToUpdate) {
        setFilterBy(prevFilter => ({ ...prevFilter, ...fieldsToUpdate }))
    }

    function loadBooks() {
        bookService.query(filterBy)
            .then(books => {
                console.log('from loadBooks: ', books)
                setBooks(books)
            })
            .catch(err => {
                console.log('Issues With Loading Books ', err)
            })
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId)
            .then(() => {
                setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId))
                showSuccessMsg(`Book removed successfully (${bookId})`)
            })
            .catch(err => {
                console.log('Problem with remove book', err)
                showErrorMsg(`Book didn't remove  (${bookId})`)

            })
    }


    if (!books) return <div>Is Loading...</div> //Change to nice loading animation
    return <section className='book-index'>

        <BookFilter
            onSetFilter={onSetFilter}
            filterBy={filterBy} />

        <Link to={`/book/edit`}><button>Add Book</button></Link>

        <h2>Our Books</h2>
        <BooksList books={books} onRemoveBook={onRemoveBook} />

    </section>
}