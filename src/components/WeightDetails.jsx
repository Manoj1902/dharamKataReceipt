import { format } from 'date-fns';
import React from 'react'

function WeightDetails({ grossWt, tareWt, netWt, dateOne, dateTwo, timeOne, timeTwo }) {

    let dateGross = new Date(`${dateOne}`)
    let dateTare = new Date(`${dateTwo}`)

    var formattedDateGross = format(dateGross, "d/MM/yyyy");
    var formattedDateTare = format(dateTare, "d/MM/yyyy");

    // console.log(formattedDateGross.toString())

    return (
        <section className="flex flex-row justify-between px-4 pr-96">
            <ul>
                <li>GROSS Wt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl"><span>{grossWt}</span> kg</span></li>
                <li>TARE Wt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl"><span>{tareWt}</span> kg</span></li>
                <li>NET Wt &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: <span className="font-bold text-xl"><span>{netWt}</span> kg</span></li>
                <p>("M" - Means Wt. By Deiver)</p>
            </ul>

            <div>
                <p>Date &nbsp;&nbsp;: <span>{formattedDateGross.toString()}</span>  Time: <span>{timeOne}</span></p>
                <p>Date &nbsp;&nbsp;: <span>{formattedDateTare.toString()}</span>  Time: <span>{timeTwo}</span>M</p>
            </div>
        </section>
    )
}

export default WeightDetails