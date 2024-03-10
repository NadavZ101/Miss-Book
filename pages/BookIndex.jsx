const { useState, useEffect } = React

import { BooksList } from "../cmps/BooksList.jsx"
import { BookActions } from '../cmps/BookActions.jsx'
import { BookDetails } from '../cmps/BookDetails.jsx'
import { BookFilter } from '../cmps/BookFilter.jsx'


import { bookService } from "../services/book.service.js"

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [selectedBook, setSelectBook] = useState(null)
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

    function onSelectBook(book) {
        setSelectBook(book)
    }

    if (!books) return <div>Is Loading...</div> //Change to nice loading animation
    return <section className='book-index'>
        {
            !selectedBook && <React.Fragment>
                <BookFilter
                    onSetFilter={onSetFilter}
                    filterBy={filterBy}
                />

                <h2>Our Books</h2>
                <BooksList books={books}
                    onSelectBook={onSelectBook} />
            </React.Fragment>
        }

        {
            selectedBook && <BookDetails
                book={selectedBook}
                onGoBack={() => onSelectBook(null)}
            />
        }
    </section>
}