import React from 'react'

function Details({ serialNo, partyName, gatePass, vehicleNo, matrial }) {
    return (
        <section className="flex flex-row px-4 justify-between w-full text-[21px] leading-6">
            <ul className="flex flex-col justify-center">

                <li>Sr. No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-[30px]">{serialNo}</span></li>
                <li>Party Name&nbsp;&nbsp;&nbsp;&nbsp;: <span className='uppercase'>{partyName}</span></li>
                <li>GATE PASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span>{gatePass}</span></li>
            </ul>

            <ul>

                <li>VEHICLE NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-[30px] uppercase">{vehicleNo}</span></li>
                <li>MATRIAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className='uppercase'>{matrial}</span></li>
            </ul>

        </section>
    )
}

export default Details