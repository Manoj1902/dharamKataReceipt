import React from 'react'

function Charges({ charges }) {
    return (
        <section className="px-4 text-[21px] leading-6">
            <p>Charges(1) &nbsp;&nbsp;: Rs. <span>{charges}</span></p>
        </section>
    )
}

export default Charges