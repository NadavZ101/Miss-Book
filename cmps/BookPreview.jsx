
export function BookPreview({ book, idx }) {
    console.log('BookPreview ', book)

    return <article className="book-preview">
        <h1>Title: {book.title}</h1>
        <h4>Price: {book.listPrice}</h4>
        <img src={`assets/img/${idx + 1}.jpg`} />
        <hr></hr>
    </article>

}