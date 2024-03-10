
export function BookActions({ books, onSelectBook, book }) {
    console.log('BookActions: ', books)

    return <React.Fragment>
        <button className="btn" onClick={() => { onSelectBook(book) }}>Details</button>
        {/* <button className="btn" onClick="">Edit</button> */}
        <hr></hr>
    </React.Fragment>
}