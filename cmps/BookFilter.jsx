const { useState, useEffect } = React


export function BookFilter({ onSetFilter, filterBy }) {

    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    console.log('filterByToEdit', filterByToEdit)

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])


    function handleChange({ target }) {
        let { value, name: field, type } = target


        if (type === 'number') value = +value
        setFilterByToEdit((prevFilterBy) => ({ ...prevFilterBy, [field]: value }))
    }

    // for the onSubmit event
    function onFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="book-filter">
        <h2>Filter Books</h2>

        <form onSubmit={onFilter}>
            <label htmlFor="title">Title</label>
            <input type="text"
                id="title"
                name="title"    // have to be the same key as the key in getDefaultFilter from service 
                value={filterByToEdit.title}
                onChange={handleChange}
                placeholder="By Title" />

            <label htmlFor="minPrice">Min Price</label>
            <input type="number"
                id="minPrice"
                name="minPrice"
                value={filterByToEdit.minPrice}
                onChange={handleChange}
                placeholder="By Min Price" />

            <label htmlFor="minPageCount">Page Count</label>
            <input type="number"
                id="minPageCount"
                name="minPageCount"
                value={filterByToEdit.minPageCount}
                onChange={handleChange}
                placeholder="By Min Page Count" />

            <button>Filter</button>
        </form>

    </section>

}