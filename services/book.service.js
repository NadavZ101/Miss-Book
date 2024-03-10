import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { txt: '', price: 0 }
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getFilterBy,
    setFilterBy
}

// For Debugging 
window.bs = bookService

function query() {
    return storageService.query(BOOK_KEY)
        .then(book => {
            if (gFilterBy.txt) {
                const regex = new RegExp(gFilterBy.txt, 'i')
                book = book.filter(book => regex.test(book.title))
            }
            if (gFilterBy.price) {
                book = book.filter(book => book.maxPrice >= gFilterBy.minPrice)
            }
            return book
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', listPrice = 0) {
    return { id: '', title, listPrice }
}

/*  MODAL DATA
{
    "id": "OXeMG8wNskc",
    "title": "metus hendrerit",
    "description": "placerat nisi sodales suscipit tellus",
    "thumbnail": “http://coding-academy.org/books-photos/
    20.jpg",
    "listPrice": {
    "amount": 109,
    "currencyCode": "EUR",
    "isOnSale": false
    }
}
*/

function getFilterBy() {
    return { ...gFilterBy }
}

// UPDATE TO BOOK
function setFilterBy(filterBy = {}) {
    if (filterBy.txt !== undefined) gFilterBy.txt = filterBy.txt  // UPDATE TO BOOK
    if (filterBy.minSpeed !== undefined) gFilterBy.minSpeed = filterBy.minSpeed
    return gFilterBy
}

function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(book => {
            var idx = book.findIndex(book => book.id === bookId)
            if (idx === book.length - 1) idx = -1
            return book[idx + 1].id
        })
}

function _createBooks() {
    let book = utilService.loadFromStorage(BOOK_KEY)
    if (!book || !book.length) {
        book = []

        // DEMO DATA
        book.push(_createBook('The Hobbit', 200))
        book.push(_createBook('Don Quixote', 150))
        book.push(_createBook('The Lord Of The Rings', 250))
        book.push(_createBook('1984', 80))
        utilService.saveToStorage(BOOK_KEY, book)
    }
}

function _createBook(title, listPrice = 120) {
    const book = getEmptyBook(title, listPrice)
    book.id = utilService.makeId()
    return book
}

/*
{
    "id": "OXeMG8wNskc",
    "title": "metus hendrerit",
    "description": "placerat nisi sodales suscipit tellus",
    "thumbnail": “http://coding-academy.org/books-photos/
    20.jpg",
    "listPrice": {
    "amount": 109,
    "currencyCode": "EUR",
    "isOnSale": false
    }
}
*/