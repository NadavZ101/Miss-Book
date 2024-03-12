const { useState } = React
const Router = ReactRouterDOM.HashRouter
const { Route, Routes } = ReactRouterDOM

import { Home } from './pages/Home.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { BookIndex } from './pages/BookIndex.jsx'
import { BookEdit } from './pages/BookEdit.jsx'

import { AppHeader } from './cmps/AppHeader.jsx'
import { BookAdd } from './cmps/BookAdd.jsx'
import { BookDetails } from './cmps/BookDetails.jsx'
import { UserMsg } from './cmps/UserMsg.jsx'


export function App() {

    return <Router>
        <section className="app main-layout">
            <AppHeader />

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/book" element={<BookIndex />} />
                    <Route path="/add" element={<BookAdd />} />
                    <Route path="/book/:bookId" element={<BookDetails />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/book/edit" element={<BookEdit />} />
                    <Route path="/book/edit/:bookId" element={<BookEdit />} />
                </Routes>
            </main>

            <UserMsg />

        </section>
    </Router>
}