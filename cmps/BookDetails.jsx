
import { LongTxt } from "./LongTxt.jsx"
import { utilService } from "../services/util.service.js"

export function BookDetails({ book, onGoBack }) {
    console.log('Book Details: ', book)

    function setReadingStats() {
        let numOfPages = book.pageCount
        console.log('numOfPages - ', numOfPages)
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
        console.log(book.listPrice.amount)
        if (book.listPrice.amount > 150) return 'expensive'
        else if (book.listPrice.amount < 20) return 'cheap'
        else return ''
    }

    function getCategories() {
        let categories = book.categories.join(', ')
        return categories
    }
    getCategories()

    function isOnSale() {
        if (book.listPrice.isOnSale) return '📣📣📣'
        else return 'No'
    }

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

    </section>
}

/*
{
    id: 'WBooB82Uvwu',
    title: 'class',
    subtitle: 'elit enim ultricies amet imperdiet a molestie class elementum venenatis',
    authors: ['Danielle Steel'],
    publishedDate: 1999,
    description:
        'rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla',
    pageCount: 804,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/10.jpg',
    language: 'en',
    listPrice: {
        amount: 118,
        currencyCode: 'ILS',
        isOnSale: false,
    },
} */