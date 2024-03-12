
const { useState, useEffect } = React

import { bookService } from '../services/book.service.js'

export function BookAdd() {

    const [googleResults, setGoogleResults] = useState([])
    const [searchBook, setSearchBook] = useState('')

    useEffect(() => {

    }, [searchBook])

    function handleChange({ target }) {
        // ev.preventDefault()
        const { value } = target
        console.log('value from form = ', value)

        setSearchBook(value)
        console.log('searchBook ', searchBook)

        // Clear the results when the search input is empty
        if (value.trim() === '') {
            setGoogleResults([])
            return
        }

        setGoogleResults([])
        bookService.getGoogleBooks(value)
            .then(result => setGoogleResults([...result]))
            .catch(err => {
                console.log('googleResults ', googleResults)
                console.error('No matching books from google', err)
                setGoogleResults([])
            })
    }

    // console.log('BookAdd - searchBook ', searchBook)
    // console.log('BookAdd - google Results ', googleResults)

    function onAddGoogleBook(ev) {
        console.log(ev)
        const googleBook = ev
        bookService.addGoogleBook(googleBook)
        // .then(newBook => console.log(newBook))
    }
    console.log('searchBook ', searchBook)



    return <div className="search-bar">
        <form >
            <label htmlFor="title">Search Book Title:</label>
            <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
                value={searchBook}
                placeholder="Search By Title"

            />
            <button>submit</button>
        </form>

        {googleResults.length > 0 && (
            <ul>
                {
                    googleResults.map(googleResult =>
                        <li key={googleResults.id}>
                            {googleResult.volumeInfo.title}
                            <button className="add-book-btn"
                                onClick={() => onAddGoogleBook(googleResult)}>+</button>
                        </li>)
                }
            </ul>
        )}

    </div>


}








/*

items: [
    {
      kind: "books#volume",
      id: "nBuA0hmspdMC",
      etag: "PU1fOs3TeKQ",
      selfLink: "https://www.googleapis.com/books/v1/volumes/nBuA0hmspdMC",
      volumeInfo: {
        title: "Effective JavaScript",
        authors: [
          "David Herman"
        ],
        publisher: "Addison-Wesley",
        publishedDate: "2012-11-26",
        description: "“It’s uncommon to have a programming language wonk who can speak in such comfortable and friendly language as David does. His walk through the syntax and semantics of JavaScript is both charming and hugely insightful; reminders of gotchas complement realistic use cases, paced at a comfortable curve. You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won experience distilled into a guided tour. It’s one of the few books on JS that I’ll recommend without hesitation.” —Alex Russell, TC39 member, software engineer, Google In order to truly master JavaScript, you need to learn how to work effectively with the language’s flexible, expressive features and how to avoid its pitfalls. No matter how long you’ve been writing JavaScript code, Effective JavaScript will help deepen your understanding of this powerful language, so you can build more predictable, reliable, and maintainable programs. Author David Herman, with his years of experience on Ecma’s JavaScript standardization committee, illuminates the language’s inner workings as never before—helping you take full advantage of JavaScript’s expressiveness. Reflecting the latest versions of the JavaScript standard, the book offers well-proven techniques and best practices you’ll rely on for years to come. Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency. Key features include Better ways to use prototype-based object-oriented programming Subtleties and solutions for working with arrays and dictionary objects Precise and practical explanations of JavaScript’s functions and variable scoping semantics Useful JavaScript programming patterns and idioms, such as options objects and method chaining In-depth guidance on using JavaScript’s unique “run-to-completion” approach to concurrency",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780132902250"
          },
          {
            type: "ISBN_10",
            identifier: "0132902257"
          }
        ],
        readingModes: {
          text: true,
          image: true
        },
        pageCount: 231,
        printType: "BOOK",
        categories: [
          "Computers"
        ],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "2.13.10.0.preview.3",
        panelizationSummary: {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        imageLinks: {
          "smallThumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=nBuA0hmspdMC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        language: "en",
        previewLink: "http://books.google.com/books?id=nBuA0hmspdMC&printsec=frontcover&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=1&source=gbs_api",
        infoLink: "http://books.google.com/books?id=nBuA0hmspdMC&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
        canonicalVolumeLink: "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=nBuA0hmspdMC"
      },
      saleInfo: {
        country: "IL",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "IL",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED_FOR_ACCESSIBILITY",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink: "http://play.google.com/books/reader?id=nBuA0hmspdMC&hl=&as_pt=BOOKS&source=gbs_api",
        "accessViewStatus": "SAMPLE",
        "quoteSharingAllowed": false
      },
      searchInfo: {
        textSnippet: "You’ll find when you finish the book that you’ve gained a strong and comprehensive sense of mastery.” —Paul Irish, developer advocate, Google Chrome “This is not a book for those looking for shortcuts; rather it is hard-won ..."
      }
    },
    {
      kind: "books#volume",
      id: "qBiEjwEACAAJ",
      etag: "nd1MYZQCodw",
      selfLink: "https://www.googleapis.com/books/v1/volumes/qBiEjwEACAAJ",
      volumeInfo: {
        title: "Effective JavaScript",
        subtitle: "68 Specific Ways to Harness the Power of JavaScript",
        publishedDate: "2013",
        description: "Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0132902281"
          },
          {
            type: "ISBN_13",
            identifier: "9780132902281"
          }
        ],
        readingModes: {
          text: false,
          image: false
        },
        pageCount: 206,
        printType: "BOOK",
        categories: [
          "JavaScript (Computer program language)"
        ],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        language: "en",
        previewLink: "http://books.google.com/books?id=qBiEjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&cd=2&source=gbs_api",
        infoLink: "http://books.google.com/books?id=qBiEjwEACAAJ&dq=effective%2520javascript&hl=&as_pt=BOOKS&source=gbs_api",
        canonicalVolumeLink: "https://books.google.com/books/about/Effective_JavaScript.html?hl=&id=qBiEjwEACAAJ"
      },
      saleInfo: {
        country: "IL",
        saleability: "NOT_FOR_SALE",
        isEbook: false
      },
      accessInfo: {
        country: "IL",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false
        },
        pdf: {
          isAvailable: false
        },
        webReaderLink: "http://play.google.com/books/reader?id=qBiEjwEACAAJ&hl=&as_pt=BOOKS&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false
      },
      searchInfo: {
        textSnippet: "Provides information on how to write better JavaScript programs, covering such topics as functions, arrays, library and API design, and concurrency."
      }
    },

*/