const { useState } = React
const { useParams } = ReactRouter

import { bookService } from "../services/book.service.js"

export function BookEdit() {

    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook())
    const { bookId } = useParams()

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

        setBookToEdit(prevBookToEdit => ({ ...prevBookToEdit, listPrice: { amount: value } }))
    }

    function onSaveBook(ev) {
        ev.preventDefault()

        bookService.save(bookToEdit)
            .then(savedBook => {
                console.log('saved Book', savedBook)
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