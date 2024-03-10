const { useState, useEffect } = React

import { BooksList } from "../cmps/BooksList.jsx"

import { bookService } from "../services/book.service.js"

export function BookIndex() {

    const [books, setBooks] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query()
            .then(books => {
                console.log('from loadBooks: ', books)
                setBooks(books)
            })
            .catch(err => {
                console.log('Issues With Loading Books ', err)
            })
    }



    if (!books) return <div>Is Loading...</div> //Change to nice loading animation
    return <section className='book-index'>
        <h2>Our Books</h2>
        <BooksList books={books} />
        {/* <ul>
            {
                books.map(book => <li key={books.id}>
                    {book.title}
                </li>)
            }
        </ul> */}

    </section>
}