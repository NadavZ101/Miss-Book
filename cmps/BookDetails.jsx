
export function BookDetails({ book, onGoBack }) {
    console.log('Book Details: ', book)

    return <section className="book-details">
        <button onClick={onGoBack}>Go back</button>
        <h1>Title : {book.title}</h1>
        <img src={`assets/img/${1}.jpg`} />

        {/* <img src={`assets/img/${book.thumbnail}.jpg`} /> */}
        {/* <p>{book.description}</p> */}

    </section>
}