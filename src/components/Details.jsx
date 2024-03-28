import React from 'react'

function Details({ serialNo, partyName, gatePass, vehicleNo, matrial }) {
    return (
        <section className="flex flex-row px-4 justify-between w-full ">
            <ul className="flex flex-col justify-center">

                <li>Sr. No &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl">{serialNo}</span></li>
                <li>Party Name&nbsp;&nbsp;&nbsp;&nbsp;: <span>{partyName}</span></li>
                <li>GATE PASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span>{gatePass}</span></li>
            </ul>

            <ul>

                <li>VEHICLE NO &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl">{vehicleNo}</span></li>
                <li>MATRIAL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span>{matrial}</span></li>
            </ul>

        </section>
    )
}

export default Details