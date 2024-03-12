const { useState, useEffect } = React

import { Review } from "./Review.jsx"


export function ReviewList({ book }) {
    console.log('review list - ', book)

    if (!book.reviews.length) return <div>No Reviews for the book</div>
    return <ul className="review-list">
        {
            book.reviews.map(review => <li key={book.fullname}>
                <Review review={review} />

                {/* <div className="car-actions">
                    <button className="remove-btn" onClick={() => onRemoveReview(book.id)}>X</button>
                </div> */}
            </li>)
        }
    </ul>




}