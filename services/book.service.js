import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { txt: '', minSpeed: 0 }
_createCars()

export const carService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextCarId,
    getFilterBy,
    setFilterBy
}

function query() {
    return storageService.query(BOOK_KEY)
        .then(book => {
            if (gFilterBy.txt) {
                const regex = new RegExp(gFilterBy.txt, 'i') // UPDATE TO BOOK
                book = book.filter(book => regex.test(book.vendor))
            }
            if (gFilterBy.minSpeed) { // UPDATE TO BOOK
                book = book.filter(book => book.maxSpeed >= gFilterBy.minSpeed)
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

// UPDATE TO BOOK
function getEmptyBook(vendor = '', maxSpeed = 0) {
    return { id: '', vendor, maxSpeed }
}

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

        // UPDATE TO BOOK
        book.push(_createBook('audu', 300))
        book.push(_createBook('fiak', 120))
        book.push(_createBook('subali', 100))
        book.push(_createBook('mitsu', 150))
        utilService.saveToStorage(BOOK_KEY, book)
    }
}

function _createBook(vendor, maxSpeed = 250) {
    const book = getEmptyBook(vendor, maxSpeed)
    book.id = utilService.makeId()
    return book
}