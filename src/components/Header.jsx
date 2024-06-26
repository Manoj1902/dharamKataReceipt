import React from 'react'

function Header({ handlePrint }) {


    return (
        <div>
            <header className="flex flex-col items-center justify-center mb-2">
                <div className="text-center font-medium uppercase tracking-wide text-[38px] leading-[1.3rem]">
                    <h2 className='scale-y-[0.60] scale-x-[1.30]'>JAICO DHARAM KANTA</h2>
                    <h2 className='scale-y-[0.60] scale-x-[1.30]'>FULL COMPUTERISED CAP - 120TON, 24 HRS</h2>
                    <h2 className='scale-y-[0.60] scale-x-[1.30]'>PH - 935806043, 8053855181 </h2>
                </div>

                {/* <div className="w-full">
                    <ul className="flex items-center justify-end gap-2 flex-wrap text-center">
                        <li><button onClick={handlePrint} className="btn btn-print">Print</button></li>
                        <li><button className="btn btn-download">Download</button></li>
                        <li><button className="btn btn-send">Send</button></li>
                    </ul>
                </div> */}
            </header>
        </div>
    )
}

export default Header