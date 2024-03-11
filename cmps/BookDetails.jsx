
const { useParams, useNavigate } = ReactRouter
const { useState, useEffect } = React

import { LongTxt } from "./LongTxt.jsx"
import { AddReview } from "./AddReview.jsx"

import { bookService } from "../services/book.service.js"

export function BookDetails() {

    const params = useParams()
    const [book, setBook] = useState(null)
    const navigate = useNavigate()

    // console.log('params ', params)
    // console.log('book ', book)

    useEffect(() => {
        loadBook()
    }, [params.bookId])

    function loadBook() {
        bookService.get(params.bookId)
            .then(book => setBook(book))
            .catch(err => {
                console.log('Had issues loading book', err)
            })
    }

    function onGoBack() {
        navigate("/book")
    }

    function setReadingStats() {
        let numOfPages = book.pageCount
        if (book.pageCount > 500) numOfPages += ' - Serious Reading'
        else if (book.pageCount > 200) numOfPages += ' - Descent Reading'
        else if (book.pageCount < 100) numOfPages += ' - Light Reading'
        return numOfPages
    }

    function setReadingEra() {
        const year = new Date().getFullYear()
        let era = book.publishedDate
        if (year - book.publishedDate > 10) era += ' - Vintage'
        else if (year - book.publishedDate < 1) era += ' - New'
        return era
    }

    function setPriceClass() {
        if (book.listPrice.amount > 150) return 'expensive'
        else if (book.listPrice.amount < 20) return 'cheap'
        else return ''
    }

    function getCategories() {
        let categories = book.categories.join(', ')
        return categories
    }

    function isOnSale() {
        if (book.listPrice.isOnSale) return '📣📣📣'
        else return 'No'
    }

    if (!book) return <div>Loading Book Details...</div>
    return <section className="book-details">
        <button onClick={onGoBack}>Go back</button>

        <h1>Title: {book.title}</h1>
        <h5>Id: {book.id}</h5>
        <h5>Authors: {book.authors}</h5>
        <h5>Published Date: {setReadingEra()}</h5>
        <h5>Description: {book.description}</h5>
        <h5>Categories: {getCategories()}</h5>
        <h5>Number of Pages: {setReadingStats()}</h5>
        <h5 className={setPriceClass()}>Price: {book.listPrice.amount}</h5>
        <h5>Currency: {book.listPrice.currencyCode}</h5>
        <h5 >Sale: {isOnSale()}</h5>
        <h5>Subtitle: {book.subtitle}</h5>
        <img src={book.thumbnail} />

        <LongTxt txt={book.description} length={book.description.length} />

        <AddReview book={book} />

    </section>
}

