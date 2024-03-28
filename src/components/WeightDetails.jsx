import React from 'react'

function WeightDetails({ grossWt, tareWt, netWt }) {
    return (
        <section className="flex flex-row justify-between px-4 pr-96">
            <ul>
                <li>GROSS Wt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl"><span>{grossWt}</span> kg</span></li>
                <li>TARE Wt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl"><span>{tareWt}</span> kg</span></li>
                <li>NET Wt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl"><span>{netWt}</span> kg</span></li>
                <p>("M" - Means Wt. By Deiver)</p>
            </ul>

            <div>
                <p>Date &nbsp;&nbsp;: 22/03/2024  Time: 20:53</p>
                <p>Date &nbsp;&nbsp;: 22/03/2024  Time: 20:53M</p>
            </div>
        </section>
    )
}

export default WeightDetails