const { useState } = React

import { Home } from './pages/Home.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'


export function App() {

    const [page, setPage] = useState('book')
    console.log(page)

    return <section className="app main-layout">

        <AppHeader setPage={setPage} />

        <main className="container">
            {page === 'home' && <Home />}
            {page === 'book' && <BookIndex />}
            {page === 'about' && <AboutUs />}
        </main>
    </section>
}