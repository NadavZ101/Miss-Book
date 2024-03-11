
import { LongTxt } from "./LongTxt.jsx"
import { utilService } from "../services/util.service.js"

export function BookDetails({ book, onGoBack }) {
    console.log('Book Details: ', book)

    function setReadingStats() {
        if (book.pageCount > 500) return 'Serious Reading'
        else if (book.pageCount > 200) return 'Descent Reading'
        else if (book.pageCount < 100) return 'Light Reading'
    }

    function setReadingEra() {
        const year = new Date().getFullYear()
        if (year - book.publishedDate > 10) return 'Vintage'
        else if (year - book.publishedDate < 1) return 'New'
    }

    function setPriceClass() {
        console.log(book.listPrice.amount)
        if (book.listPrice.amount > 150) return 'expensive'
        else if (book.listPrice.amount < 20) return 'cheap'
        else return ''
    }

    function isOnSale() {
        if (book.listPrice.isOnSale) return '📣📣📣'
        else return 'No'
    }

    // function getText() {
    const txt = utilService.makeLorem()
    const length = txt.length

    console.log(txt)
    console.log(length)
    // }

    // getText()

    return <section className="book-details">
        <button onClick={onGoBack}>Go back</button>

        <h1>Title: {book.title}</h1>
        <h5>Id: {book.id}</h5>
        <h5>Authors: {book.authors}</h5>
        <h5>PublishedDate: {book.publishedDate}</h5>
        <h5>{setReadingEra()}</h5>
        <h5>Description: {book.description}</h5>
        <h5>Categories: {book.categories}</h5>
        <h5>Number of Pages: {book.pageCount}</h5>
        <h5 className={setPriceClass()}>Price: {book.listPrice.amount}</h5>
        <h5>{setReadingStats()}</h5>
        <h5>Currency: {book.listPrice.currencyCode}</h5>
        <h5 >Sale: {isOnSale()}</h5>
        <h5>Subtitle: {book.subtitle}</h5>
        <img src={book.thumbnail} />

        <LongTxt txt={txt} length={length} />

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