import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
var gFilterBy = { txt: '', price: 0 }
_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getNextBookId,
    getDefaultFilter,
    getEmptyReview,
    addReview,
    removeReview,
    addGoogleBook,
    getGoogleBooks,
}

const gBooks = [{
    id: 'OXeMG8wNskc',
    title: 'metus hendrerit',
    subtitle: 'mi est eros convallis auctor arcu dapibus himenaeos',
    authors: ['Barbara Cartland'],
    publishedDate: 1999,
    description:
        'placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse',
    pageCount: 713,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
    language: 'en',
    listPrice: {
        amount: 109,
        currencyCode: 'EUR',
        isOnSale: false,
    },
},
{
    id: 'JYOJa2NpSCq',
    title: 'morbi',
    subtitle: 'lorem euismod dictumst inceptos mi',
    authors: ['Barbara Cartland'],
    publishedDate: 1978,
    description: 'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
    pageCount: 129,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
    language: 'sp',
    listPrice: {
        amount: 44,
        currencyCode: 'EUR',
        isOnSale: true,
    },
},
{
    id: '1y0Oqts35DQ',
    title: 'at viverra venenatis',
    subtitle: 'gravida libero facilisis rhoncus urna etiam',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
        'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
    pageCount: 972,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
    language: 'he',
    listPrice: {
        amount: 108,
        currencyCode: 'ILS',
        isOnSale: false,
    },
},
{
    id: 'kSnfIJyikTP',
    title: 'dictum',
    subtitle: 'augue eu consectetur class curabitur conubia ligula in ullamcorper',
    authors: ['Danielle Steel'],
    publishedDate: 1978,
    description:
        'interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam',
    pageCount: 303,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
    language: 'en',
    listPrice: {
        amount: 30,
        currencyCode: 'EUR',
        isOnSale: true,
    },
},
{
    id: 'f4iuVmbuKCC',
    title: 'sem himenaeos aptent',
    subtitle: 'interdum per habitasse luctus purus est',
    authors: ['Dr. Seuss'],
    publishedDate: 2011,
    description:
        'et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed',
    pageCount: 337,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
    language: 'sp',
    listPrice: {
        amount: 19,
        currencyCode: 'USD',
        isOnSale: false,
    },
},
{
    id: 'U2rfZO6oBZf',
    title: 'mi ante posuere',
    subtitle: 'sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus',
    authors: ['Leo Tolstoy'],
    publishedDate: 1978,
    description: 'senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in',
    pageCount: 748,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/1.jpg',
    language: 'en',
    listPrice: {
        amount: 91,
        currencyCode: 'USD',
        isOnSale: true,
    },
},
{
    id: 'xI0wrXaaAcq',
    title: 'non',
    subtitle: 'leo tortor per dapibus mattis ut conubia porttitor ligula viverra',
    authors: ['Leo Tolstoy'],
    publishedDate: 2011,
    description:
        'nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque',
    pageCount: 65,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
    language: 'he',
    listPrice: {
        amount: 90,
        currencyCode: 'USD',
        isOnSale: false,
    },
},
{
    id: '9laHCEdSpFy',
    title: 'tristique',
    subtitle: 'consectetur a eu tincidunt condimentum amet nisi',
    authors: ['Dr. Seuss'],
    publishedDate: 1999,
    description:
        'magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem',
    pageCount: 299,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/11.jpg',
    language: 'he',
    listPrice: {
        amount: 176,
        currencyCode: 'EUR',
        isOnSale: false,
    },
},
{
    id: 'nGhVwZvGCGp',
    title: 'urna ornare gravida',
    subtitle: 'sem vestibulum semper convallis pharetra tempor himenaeos ut',
    authors: ['Jin Yong'],
    publishedDate: 2011,
    description: 'porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla',
    pageCount: 803,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/10.jpg',
    language: 'sp',
    listPrice: {
        amount: 116,
        currencyCode: 'USD',
        isOnSale: true,
    },
},
{
    id: 'Q8Q9Lsd03BD',
    title: 'consequat neque volutpat',
    subtitle: 'vel quis taciti fermentum feugiat ullamcorper curae praesent',
    authors: ['Dr. Seuss'],
    publishedDate: 1978,
    description:
        'curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare',
    pageCount: 891,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/5.jpg',
    language: 'en',
    listPrice: {
        amount: 145,
        currencyCode: 'EUR',
        isOnSale: false,
    },
},
{
    id: 'bd7a76kARao',
    title: 'risus',
    subtitle: 'pretium bibendum pharetra curabitur quisque dictumst',
    authors: ['Danielle Steel'],
    publishedDate: 2018,
    description:
        'auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus',
    pageCount: 86,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
    language: 'sp',
    listPrice: {
        amount: 157,
        currencyCode: 'ILS',
        isOnSale: true,
    },
},
{
    id: 'qKyG0vqeO3e',
    title: 'interdum etiam vulputate',
    subtitle: 'velit sapien eget tincidunt nunc tortor',
    authors: ['Danielle Steel'],
    publishedDate: 2018,
    description:
        'aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad',
    pageCount: 882,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/17.jpg',
    language: 'sp',
    listPrice: {
        amount: 57,
        currencyCode: 'USD',
        isOnSale: true,
    },
},
{
    id: '2RvT48ZNInj',
    title: 'sagittis justo',
    subtitle: 'etiam primis proin praesent placerat nisi fermentum nisi',
    authors: ['Agatha Christie'],
    publishedDate: 2011,
    description:
        'nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus',
    pageCount: 598,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/8.jpg',
    language: 'en',
    listPrice: {
        amount: 167,
        currencyCode: 'ILS',
        isOnSale: false,
    },
},
{
    id: '5z2s9pDXAYj',
    title: 'quam ullamcorper himenaeos',
    subtitle: 'ut placerat eu dapibus sapien sodales laoreet',
    authors: ['Danielle Steel'],
    publishedDate: 1999,
    description:
        'etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam',
    pageCount: 608,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/3.jpg',
    language: 'he',
    listPrice: {
        amount: 150,
        currencyCode: 'USD',
        isOnSale: true,
    },
},
{
    id: 'zBZu5cDEWha',
    title: 'quis',
    subtitle: 'suscipit turpis etiam turpis libero lobortis',
    authors: ['Jin Yong'],
    publishedDate: 2011,
    description:
        'etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor',
    pageCount: 583,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/6.jpg',
    language: 'en',
    listPrice: {
        amount: 58,
        currencyCode: 'ILS',
        isOnSale: true,
    },
},
{
    id: 'aOI7tQuPZ2f',
    title: 'aliquam aliquet dapibus',
    subtitle: 'neque eu purus euismod placerat adipiscing odio egestas consequat',
    authors: ['Leo Tolstoy'],
    publishedDate: 2011,
    description: 'dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt',
    pageCount: 497,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/7.jpg',
    language: 'en',
    listPrice: {
        amount: 78,
        currencyCode: 'USD',
        isOnSale: false,
    },
},
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
},
{
    id: 'xm1z5bbZjlS',
    title: 'vitae',
    subtitle: 'class habitant at commodo semper ligula a bibendum',
    authors: ['Leo Tolstoy'],
    publishedDate: 1999,
    description:
        'himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus',
    pageCount: 231,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
    language: 'he',
    listPrice: {
        amount: 60,
        currencyCode: 'EUR',
        isOnSale: false,
    },
},
{
    id: 'u3j6QIKLlJb',
    title: 'rhoncus vivamus',
    subtitle: 'nullam class risus amet senectus scelerisque etiam curabitur',
    authors: ['Agatha Christie'],
    publishedDate: 1978,
    description:
        'torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis',
    pageCount: 652,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
    language: 'he',
    listPrice: {
        amount: 110,
        currencyCode: 'USD',
        isOnSale: true,
    },
},
{
    id: 'vxYYYdVlEH3',
    title: 'donec mi ullamcorper',
    subtitle: 'varius malesuada augue molestie sollicitudin faucibus mi eu tempus',
    authors: ['William Shakespeare'],
    publishedDate: 2011,
    description: 'aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed',
    pageCount: 904,
    categories: ['Computers', 'Hack'],
    thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
    language: 'sp',
    listPrice: {
        amount: 186,
        currencyCode: 'ILS',
        isOnSale: true,
    },
},
]



function query(filterBy = getDefaultFilter()) {
    return storageService.query(BOOK_KEY)
        .then(book => {
            if (filterBy.title) {
                const regex = new RegExp(filterBy.title, 'i')
                book = book.filter(book => regex.test(book.title))
            }
            if (filterBy.minPrice) {
                book = book.filter(book => book.listPrice.amount >= filterBy.minPrice)
            }
            if (filterBy.minPageCount) {
                book = book.filter(book => book.pageCount >= filterBy.minPageCount)
            }
            return book
        })
}

function getDefaultFilter() {
    return { title: '', minPrice: 30, minPageCount: 10 }
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        // book = _createBook(book.title, book.listPrice.amount)
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(id = '', title = '', subtitle = '', authors = [], publishedDate = 1890, description = '', pageCount = 377, categories = [], thumbnail = 'assets/img/5.jpg', language = '', listPrice = { amount: 0, currencyCode: '', isOnSale: true }) {

    console.log('getEmptyBook - service')
    return { id, title, subtitle, authors, publishedDate, description, pageCount, categories, thumbnail, language, listPrice }
}


function getNextBookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(book => {
            var idx = book.findIndex(book => book.id === bookId)
            if (idx === book.length - 1) idx = -1
            return book[idx + 1].id
        })
}

function _createBooks() {
    let book = utilService.loadFromStorage(BOOK_KEY)

    if (!book || !book.length) {
        book = [{
            id: 'OXeMG8wNskc',
            title: 'metus hendrerit',
            subtitle: 'mi est eros convallis auctor arcu dapibus himenaeos',
            authors: ['Barbara Cartland'],
            publishedDate: 1999,
            description:
                'placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse',
            pageCount: 713,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
            language: 'en',
            listPrice: {
                amount: 109,
                currencyCode: 'EUR',
                isOnSale: false,
            },
        },
        {
            id: 'JYOJa2NpSCq',
            title: 'morbi',
            subtitle: 'lorem euismod dictumst inceptos mi',
            authors: ['Barbara Cartland'],
            publishedDate: 1978,
            description: 'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
            pageCount: 129,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
            language: 'sp',
            listPrice: {
                amount: 44,
                currencyCode: 'EUR',
                isOnSale: true,
            },
        },
        {
            id: '1y0Oqts35DQ',
            title: 'at viverra venenatis',
            subtitle: 'gravida libero facilisis rhoncus urna etiam',
            authors: ['Dr. Seuss'],
            publishedDate: 1999,
            description:
                'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
            pageCount: 972,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
            language: 'he',
            listPrice: {
                amount: 108,
                currencyCode: 'ILS',
                isOnSale: false,
            },
        },
        {
            id: 'kSnfIJyikTP',
            title: 'dictum',
            subtitle: 'augue eu consectetur class curabitur conubia ligula in ullamcorper',
            authors: ['Danielle Steel'],
            publishedDate: 1978,
            description:
                'interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam',
            pageCount: 303,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
            language: 'en',
            listPrice: {
                amount: 30,
                currencyCode: 'EUR',
                isOnSale: true,
            },
        },
        {
            id: 'f4iuVmbuKCC',
            title: 'sem himenaeos aptent',
            subtitle: 'interdum per habitasse luctus purus est',
            authors: ['Dr. Seuss'],
            publishedDate: 2011,
            description:
                'et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed',
            pageCount: 337,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
            language: 'sp',
            listPrice: {
                amount: 19,
                currencyCode: 'USD',
                isOnSale: false,
            },
        },
        {
            id: 'U2rfZO6oBZf',
            title: 'mi ante posuere',
            subtitle: 'sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus',
            authors: ['Leo Tolstoy'],
            publishedDate: 1978,
            description: 'senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in',
            pageCount: 748,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/1.jpg',
            language: 'en',
            listPrice: {
                amount: 91,
                currencyCode: 'USD',
                isOnSale: true,
            },
        },
        {
            id: 'xI0wrXaaAcq',
            title: 'non',
            subtitle: 'leo tortor per dapibus mattis ut conubia porttitor ligula viverra',
            authors: ['Leo Tolstoy'],
            publishedDate: 2011,
            description:
                'nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque',
            pageCount: 65,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/14.jpg',
            language: 'he',
            listPrice: {
                amount: 90,
                currencyCode: 'USD',
                isOnSale: false,
            },
        },
        {
            id: '9laHCEdSpFy',
            title: 'tristique',
            subtitle: 'consectetur a eu tincidunt condimentum amet nisi',
            authors: ['Dr. Seuss'],
            publishedDate: 1999,
            description:
                'magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem',
            pageCount: 299,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/11.jpg',
            language: 'he',
            listPrice: {
                amount: 176,
                currencyCode: 'EUR',
                isOnSale: false,
            },
        },
        {
            id: 'nGhVwZvGCGp',
            title: 'urna ornare gravida',
            subtitle: 'sem vestibulum semper convallis pharetra tempor himenaeos ut',
            authors: ['Jin Yong'],
            publishedDate: 2011,
            description: 'porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla',
            pageCount: 803,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/10.jpg',
            language: 'sp',
            listPrice: {
                amount: 116,
                currencyCode: 'USD',
                isOnSale: true,
            },
        },
        {
            id: 'Q8Q9Lsd03BD',
            title: 'consequat neque volutpat',
            subtitle: 'vel quis taciti fermentum feugiat ullamcorper curae praesent',
            authors: ['Dr. Seuss'],
            publishedDate: 1978,
            description:
                'curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare',
            pageCount: 891,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/5.jpg',
            language: 'en',
            listPrice: {
                amount: 145,
                currencyCode: 'EUR',
                isOnSale: false,
            },
        },
        {
            id: 'bd7a76kARao',
            title: 'risus',
            subtitle: 'pretium bibendum pharetra curabitur quisque dictumst',
            authors: ['Danielle Steel'],
            publishedDate: 2018,
            description:
                'auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus',
            pageCount: 86,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/16.jpg',
            language: 'sp',
            listPrice: {
                amount: 157,
                currencyCode: 'ILS',
                isOnSale: true,
            },
        },
        {
            id: 'qKyG0vqeO3e',
            title: 'interdum etiam vulputate',
            subtitle: 'velit sapien eget tincidunt nunc tortor',
            authors: ['Danielle Steel'],
            publishedDate: 2018,
            description:
                'aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad',
            pageCount: 882,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/17.jpg',
            language: 'sp',
            listPrice: {
                amount: 57,
                currencyCode: 'USD',
                isOnSale: true,
            },
        },
        {
            id: '2RvT48ZNInj',
            title: 'sagittis justo',
            subtitle: 'etiam primis proin praesent placerat nisi fermentum nisi',
            authors: ['Agatha Christie'],
            publishedDate: 2011,
            description:
                'nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus',
            pageCount: 598,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/8.jpg',
            language: 'en',
            listPrice: {
                amount: 167,
                currencyCode: 'ILS',
                isOnSale: false,
            },
        },
        {
            id: '5z2s9pDXAYj',
            title: 'quam ullamcorper himenaeos',
            subtitle: 'ut placerat eu dapibus sapien sodales laoreet',
            authors: ['Danielle Steel'],
            publishedDate: 1999,
            description:
                'etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam',
            pageCount: 608,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/3.jpg',
            language: 'he',
            listPrice: {
                amount: 150,
                currencyCode: 'USD',
                isOnSale: true,
            },
        },
        {
            id: 'zBZu5cDEWha',
            title: 'quis',
            subtitle: 'suscipit turpis etiam turpis libero lobortis',
            authors: ['Jin Yong'],
            publishedDate: 2011,
            description:
                'etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor',
            pageCount: 583,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/6.jpg',
            language: 'en',
            listPrice: {
                amount: 58,
                currencyCode: 'ILS',
                isOnSale: true,
            },
        },
        {
            id: 'aOI7tQuPZ2f',
            title: 'aliquam aliquet dapibus',
            subtitle: 'neque eu purus euismod placerat adipiscing odio egestas consequat',
            authors: ['Leo Tolstoy'],
            publishedDate: 2011,
            description: 'dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt',
            pageCount: 497,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/7.jpg',
            language: 'en',
            listPrice: {
                amount: 78,
                currencyCode: 'USD',
                isOnSale: false,
            },
        },
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
        },
        {
            id: 'xm1z5bbZjlS',
            title: 'vitae',
            subtitle: 'class habitant at commodo semper ligula a bibendum',
            authors: ['Leo Tolstoy'],
            publishedDate: 1999,
            description:
                'himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus',
            pageCount: 231,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/12.jpg',
            language: 'he',
            listPrice: {
                amount: 60,
                currencyCode: 'EUR',
                isOnSale: false,
            },
        },
        {
            id: 'u3j6QIKLlJb',
            title: 'rhoncus vivamus',
            subtitle: 'nullam class risus amet senectus scelerisque etiam curabitur',
            authors: ['Agatha Christie'],
            publishedDate: 1978,
            description:
                'torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis',
            pageCount: 652,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/20.jpg',
            language: 'he',
            listPrice: {
                amount: 110,
                currencyCode: 'USD',
                isOnSale: true,
            },
        },
        {
            id: 'vxYYYdVlEH3',
            title: 'donec mi ullamcorper',
            subtitle: 'varius malesuada augue molestie sollicitudin faucibus mi eu tempus',
            authors: ['William Shakespeare'],
            publishedDate: 2011,
            description: 'aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed',
            pageCount: 904,
            categories: ['Computers', 'Hack'],
            thumbnail: 'http://coding-academy.org/books-photos/2.jpg',
            language: 'sp',
            listPrice: {
                amount: 186,
                currencyCode: 'ILS',
                isOnSale: true,
            },
        },
        ]
        console.log(book)

        // DEMO DATA
        // book.push(_createBook('The Hobbit', 200))
        // book.push(_createBook('Don Quixote', 150))
        // book.push(_createBook('The Lord Of The Rings', 250))
        // book.push(_createBook('1984', 80))
        utilService.saveToStorage(BOOK_KEY, book)
    }
}

function _createBook(title, price = 120) {
    const book = getEmptyBook(title, price)
    book.id = utilService.makeId()
    return book
}

function getEmptyReview(id = utilService.makeId(), fullname = '', rating = 1, readAt = '') {
    return { id, fullname, rating, readAt }
}

function addReview(bookId, review) {
    console.log(bookId)
    console.log(review)

    return get(bookId)
        .then(book => {
            if (!book.reviews) book.reviews = []
            book.reviews.push(review)
            console.log('addReview ', book)
            return book
        })
        .then(save)
}

function removeReview(bookId, reviewId) {
    console.log(bookId)
    console.log(reviewId)

    return get(bookId)
        .then(book => {
            if (!book.reviews) return
            const reviewToRemove = book.reviews.findIndex(review => review.id === reviewId)
            book.reviews.splice(reviewToRemove, 1)
            return book
        })
        .then(save)
}



//adding books to my database - the destruction will be here
// so the books from google will fit to my database 
function addGoogleBook(item) {
    console.log('service', item)
    const items = [
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
        }
    ]
    console.log(items)
    const cleanData = setGoogleBook(items)
    console.log(cleanData)


    // const [id, volumeInfo] = items
    // console.log('id', id)
    // console.log('volumeInfo', volumeInfo)
}

function setGoogleBook(items) {
    const [{ id }] = items
    const [{ volumeInfo }] = items
    const { title } = volumeInfo
    const { authors } = volumeInfo
    const { publishedDate } = volumeInfo
    const { description } = volumeInfo
    const { pageCount } = volumeInfo
    const { categories } = volumeInfo
    const { imageLinks } = volumeInfo
    const { thumbnail } = imageLinks
    const { language } = volumeInfo

    return { id, title, authors, publishedDate, description, pageCount, categories, thumbnail, language }


    console.log(id)
    console.log(title)
    console.log(authors)
    console.log(publishedDate)
    console.log(description)
    console.log(pageCount)
    console.log(categories)
    console.log(thumbnail)
    console.log(language)
    //subtitle = '',, , listPrice = { amount: 0, currencyCode: '', isOnSale: true }
}

//input in form
function getGoogleBooks(bookTitle) {

    const items = [
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
        }
    ]
    console.log('service - bookTitle ', bookTitle)

    const results = items.filter(item =>
        item.volumeInfo.title.toLowerCase().includes(bookTitle))

    console.log(results)
    console.log(results.length)

    if (results.length > 0) {
        console.log(results)
        console.log('service found books')
        return Promise.resolve(results)
    }
    else {
        console.error('service didn\'t books')
        return Promise.reject(new Error('No matching books found'))
    }
}








