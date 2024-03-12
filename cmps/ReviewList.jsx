const { useState, useEffect } = React

import { Review } from "./Review.jsx"


export function ReviewList({ book, review, onRemoveReview }) {
    console.log('review list - ', book)



    if (!book.reviews || !book.reviews.length) return <div>No Reviews for the book</div>
    return <ul className="review-list flex space-between">
        {
            book.reviews.map((review, i) => <li key={i}>
                <Review review={review} onRemoveReview={onRemoveReview} />
            </li>)
        }
    </ul>




}