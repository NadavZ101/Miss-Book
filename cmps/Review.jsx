export function Review({ review, onRemoveReview }) {

    if (!review) return <div>No reviews for the book</div>
    return <article className="review-preview">
        <h5>Name: {review.fullname}</h5>
        <h5>Rating: {review.rating}</h5>
        <h5>Read Date: {review.readAt}</h5>

        <div className="review-actions">
            <button className="remove-btn" onClick={() => onRemoveReview(review.id)}>X</button>
        </div>
    </article>
}