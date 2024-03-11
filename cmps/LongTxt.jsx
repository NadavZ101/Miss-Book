const { useState } = React

export function LongTxt({ txt, length = 100 }) {

    const [isReadMore, setReadMore] = useState(true)

    function toggleIsReadMore() {
        setReadMore(!isReadMore)
    }

    return <section className="read-more">
        <p className="text">
            {isReadMore ? txt.slice(0, 100) : txt}
        </p>

        <button className="btn" onClick={() => toggleIsReadMore()}>{isReadMore ? 'Read More...' : 'Read Less '}</button>
    </section>
}