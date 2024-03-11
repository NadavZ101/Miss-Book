const { useState, useEffect } = React
const { useParams, useNavigate } = ReactRouter

import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"


export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (bookId) loadBook()
    }, [])

    function loadBook() {
        bookService.get(bookId)
            .then(book => setBookToEdit(book))
            .catch(err => {
                console.log('Had issues loading book', err)
                navigate('/book')
            })
    }

    // the target element which the ev in the form was trigger
    function handleChange({ target }) {
        const field = target.name //
        let value = target.value

        switch (target.type) {
            case 'number':
            case 'range':
                value = +value || ''
                break

            case 'checkbox':
                value = target.checked
                break
            default:
                break
        }

        setBookToEdit(prevBookToEdit => ({ ...prevBookToEdit, [field]: value }))
    }

    function handleChangeAmount({ target }) {
        const field = target.name
        console.log(field)
        let value = target.value

        switch (target.type) {
            case 'number':
                value = +value || ''
                break

            default:
                break
        }

        setBookToEdit(prevBookToEdit =>
            ({ ...prevBookToEdit, listPrice: { amount: value } }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()

        bookService.save(bookToEdit)
            .then(savedBook => {
                console.log('saved Book', savedBook)
                showSuccessMsg('Book saved successfully')
                navigate('/book')
            })
            .catch(err => {
                console.log('Had issues saving book', err)
                showErrorMsg('Could not save book')
            })
    }

    console.log('bookToEdit ', bookToEdit)
    const { title, listPrice } = bookToEdit

    return (
        <section className="book-edit">
            <form onSubmit={onSaveBook}>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter Title"

                    name="title"
                    onChange={handleChange}
                    value={title}
                />

                <label htmlFor="listPrice">Price:</label>
                <input
                    type="number"
                    id="listPrice"
                    placeholder="Enter Price"

                    name="listPrice"
                    onChange={handleChangeAmount}
                    value={listPrice.amount}
                />
                <button>Save</button>
            </form>
        </section>
    )
}