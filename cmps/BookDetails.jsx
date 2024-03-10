
export function BookDetails({ book, onGoBack }) {
    console.log('Book Details: ', book)

    return <section className="book-details">
        <button onClick={onGoBack}>Go back</button>

        <h1>Title: {book.title}</h1>
        <p>Authors: {book.authors}</p>
        <p>publishedDate: {book.publishedDate}</p>
        <p>Description: {book.description}</p>
        <p>categories: {book.categories}</p>
        <p>pageCount: {book.pageCount}</p>
        <p>Price : {book.listPrice.amount}</p>
        <p>Currency : {book.listPrice.currencyCode}</p>
        <p>Sale : {book.listPrice.isOnSale}</p>
        <p>subtitle : {book.subtitle}</p>

        <img src={book.thumbnail} />

    </section>
}

/*
{
    id: 'WBooB82Uvwu',
    title: 'class',
    subtitle: 'elit enim ultricies amet imperdiet a molestie class elementum venenatis',
    authors: ['Danielle Steel'],
    publishedDate: 1999,
    description:
        'rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla',
    pageCount: 804,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/10.jpg',
    language: 'en',
    listPrice: {
        amount: 118,
        currencyCode: 'ILS',
        isOnSale: false,
    },
} */