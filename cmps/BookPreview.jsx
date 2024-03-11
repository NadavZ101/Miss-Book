
export function BookPreview({ book, idx }) {

    return <article className="book-preview">
        <h1>Title: {book.title}</h1>
        <img src={`assets/img/${idx + 1}.jpg`} />
        {/* <h4>Price: {book.listPrice.amount}</h4> */}
        {/* <img src={book.thumbnail} /> */}
    </article>

}