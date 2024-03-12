export function Review({ review }) {
    return <article className="review-preview">
        <h5>Name: {review.fullname}</h5>
        <h5>Rating: {review.rating}</h5>
        <h5>Read Date: {review.readAt}</h5>
    </article>
}