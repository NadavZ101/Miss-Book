const { useState, useEffect } = React

import { ReviewList } from './ReviewList.jsx'

import { bookService } from "../services/book.service.js"
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export function AddReview({ book, onLoadReview, onRemoveReview }) {
    console.log('Add review ', book)

    const [review, setReview] = useState(bookService.getEmptyReview())
    // console.log(review)


    function handleChange(ev, target) {
        const { name: field, value } = ev.target

        console.log('name ', field)
        console.log('value ', value)

        console.log(review)


        setReview((prevReviews) => ({ ...prevReviews, [field]: value, }))
        console.log(prevReviews)

    }

    function onSaveReview(ev) {
        ev.preventDefault()
        onLoadReview(review)
    }


    const { fullname, rating, readAt } = review
    return (
        <section className="review">
            <h4>Add Review</h4>
            <form onSubmit={onSaveReview}>
                <label htmlFor="fullname">Full Name:</label>
                <input
                    type="text"
                    id="fullname"
                    placeholder="Enter your full name"

                    name="fullname"
                    onChange={handleChange}
                    value={fullname}
                />

                <label htmlFor="rating">Rating:</label>
                <select
                    id="rating"
                    name="rating"
                    onChange={handleChange}
                    value={rating}>
                    <option name="5">5</option>
                    <option name="4">4</option>
                    <option name="3">3</option>
                    <option name="2">2</option>
                    <option name="1">1</option>
                </select>

                <label htmlFor="readAt">Date Read:</label>
                <input
                    type="date"
                    id="readAt"
                    name="readAt"
                    onChange={handleChange}
                    value={readAt}
                />


                <button type="submit">Submit</button>
            </form>


        </section>
    )
}