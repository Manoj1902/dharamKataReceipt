import React, { useState, useRef } from "react"
import ReactToPrint from "react-to-print"

import Footer from "./components/Footer"
import Signature from "./components/Signature"
import Charges from "./components/Charges"
import WeightDetails from "./components/WeightDetails"
import Details from "./components/Details"
import Header from "./components/Header"
function App() {
  const [showInvoice, setShowInvoice] = useState(true)

  const [serialNo, setSerialNo] = useState("")
  const [partyName, setPartyName] = useState("")
  const [gatePass, setGatePass] = useState("")
  const [vehicleNo, setVehicleNo] = useState("")
  const [matrial, setMaterial] = useState("")

  const [grossWt, setGrossWt] = useState("")
  const [tareWt, setTareWt] = useState("")
  const [netWt, setNetWt] = useState("")
  const [netWtInWords, setNetWtInWords] = useState("")

  // Current Date
  const currDate = new Date()
  let date = currDate.getDate()
  let month = currDate.getMonth() + 1
  let year = currDate.getFullYear()
  const todayDate = `${date}/${month}/${year}`
  // Current Date

  // Current Time
  let currHr = currDate.getHours();
  let currMin = currDate.getMinutes();
  let currTime = `${currHr}:${currMin}`
  // Current Time


  const [dateOne, setDateOne] = useState(todayDate)
  const [dateTwo, setDateTwo] = useState(todayDate)
  const [timeOne, setTimeOne] = useState(currTime)
  const [timeTwo, setTimeTwo] = useState(currTime)

  const [charges, setCharges] = useState("")


  const componentRef = useRef()


  const handlePrint = () => {
    window.print()
  }


  return (
    <>
      <main className="m-3 p-3 rounded shadow lg:max-w-6xl lg:mx-auto bg-white ">
        {
          showInvoice ? (
            <>
              <ReactToPrint trigger={() => <button className="bg-blue-500 text-white font-bold text-sm py-2 px-5 rounded shadow border-2 border-blue-500 hover:text-blue-500 hover:bg-transparent transition-all duration-200">Print / Download</button>} content={() => componentRef.current} />
              <div ref={componentRef} className="p-5 pb-0 m-1 border-gray-400 border-dashed border-[1px] rounded">
                <Header handlePrint={handlePrint} />


                <Details
                  serialNo={serialNo}
                  partyName={partyName}
                  gatePass={gatePass}
                  vehicleNo={vehicleNo}
                  matrial={matrial}
                />

                <p className="py-1 mb-1 text-center leading-[0.7rem] border-b-[1px] border-black pb-1 border-dashed"></p>

                <WeightDetails
                  grossWt={grossWt}
                  tareWt={tareWt}
                  netWt={netWt}
                  netWtInWords={netWtInWords}
                  dateOne={dateOne}
                  dateTwo={dateTwo}
                  timeOne={timeOne}
                  timeTwo={timeTwo}
                />


                <p className="py-1 mb-1 text-center leading-[0.7rem] border-b-[1px] border-black pb-1 border-dashed"></p>

                <Charges charges={charges} />

                <p className="py-1 mb-1 text-center leading-[0.7rem] border-b-[1px] border-black pb-1 border-dashed"></p>

                <Signature />

                <p className="py-1 mb-1 text-center leading-[0.7rem] border-b-[1px] border-black pb-1 border-dashed"></p>

                <Footer />
              </div>
              <button onClick={() => setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:text-blue-500 hover:bg-transparent transition-all duration-300">
                Edit Invoice
              </button>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center gap-2 text-[22px]">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col justify-between px-5 ">
                    <label htmlFor="serialno">Enter Serial No:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="number"
                      max="20"
                      name="text"
                      id="serialno"
                      placeholder="Enter Serial No"
                      autoComplete="off"
                      value={serialNo}
                      onChange={(e) => setSerialNo(e.target.value)}
                    />
                  </div>


                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="partyName">Enter Party Name:</label>
                    <input
                      className="uppercase px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="text"
                      name="partyName"
                      id="partyName"
                      placeholder="Enter Party Name"
                      autoComplete="off"
                      value={partyName}
                      onChange={(e) => setPartyName(e.target.value)}
                    />
                  </div>
                </article>


                <article className="md:grid grid-cols-2 gap-10">

                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="gatePass">Enter Gate Pass:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="text"
                      name="gatePass"
                      id="gatePass"
                      placeholder="Enter Gate Pass:"
                      autoComplete="off"
                      value={gatePass}
                      onChange={(e) => setGatePass(e.target.value)}
                    />
                  </div>


                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="vehicleNo">Enter Vehicle No:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="text"
                      name="vehicleNo"
                      id="vehicleNo"
                      placeholder="Enter Vehicle No"
                      autoComplete="off"
                      value={vehicleNo}
                      onChange={(e) => setVehicleNo(e.target.value)}
                    />
                  </div>
                </article>


                <article className="md:grid grid-cols-1 gap-10">

                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="material">Enter Material:</label>
                    <input
                      className="px-3 w-[91%] bg-gray-200 rounded py-1"
                      type="text"
                      name="material"
                      id="material"
                      placeholder="Enter Material"
                      autoComplete="off"
                      value={matrial}
                      onChange={(e) => setMaterial(e.target.value)}
                    />
                  </div>
                </article>


                {/* Weight Details */}
                <article className="md:grid grid-cols-3 gap-5">
                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="grossWt">Enter GROSS Wt:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="number"
                      name="grossWt"
                      id="grossWt"
                      placeholder="Enter GROSS Wt"
                      autoComplete="off"
                      value={grossWt}
                      onChange={(e) => setGrossWt(e.target.value)}
                    />
                  </div>


                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="tareWt">Enter TARE Wt:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="number"
                      name="tareWt"
                      id="tareWt"
                      placeholder="Enter TARE Wt"
                      autoComplete="off"
                      value={tareWt}
                      onChange={(e) => setTareWt(e.target.value)}
                    />
                  </div>


                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="netWt">Enter NET Wt:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="number"
                      name="netWt"
                      id="netWt"
                      placeholder="Enter NET wt"
                      autoComplete="off"
                      value={netWt}
                      onChange={(e) => setNetWt(e.target.value)}
                    />
                  </div>
                </article>

                <div className="flex flex-col justify-between px-5">
                  <label htmlFor="netWtWords">Enter NET Wt in Words:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="text"
                    name="netWtWords"
                    id="netWtWords"
                    placeholder="Enter NET wt in Words"
                    autoComplete="off"
                    value={netWtInWords}
                    onChange={(e) => setNetWtInWords(e.target.value)}
                  />
                </div>

                <article className="md:grid grid-cols-2 gap-10">

                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="grossWtDate">Enter Gross Wt Date:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="date"
                      name="grossWtDate"
                      id="grossWtDate"
                      autoComplete="off"
                      value={dateOne}
                      onChange={(e) => setDateOne(e.target.value)}
                      step="any"
                    />
                  </div>


                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="tareWtDate">Enter Tare Wt Date:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="date"
                      name="tareWtDate"
                      id="tareWtDate"
                      autoComplete="off"
                      value={dateTwo}
                      onChange={(e) => setDateTwo(e.target.value)}
                      step="any"
                    />
                  </div>
                </article>


                <article className="md:grid grid-cols-2 gap-10">

                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="grossWtTime">Enter Gross Wt Time:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="time"
                      name="grossWtTime"
                      id="grossWtTime"
                      autoComplete="off"
                      value={timeOne}
                      onChange={(e) => setTimeOne(e.target.value)}
                      step="any"
                    />
                  </div>


                  <div className="flex flex-col justify-between px-5">
                    <label htmlFor="tareWtTime">Enter Tare Wt Time:</label>
                    <input
                      className="px-3 w-[80%] bg-gray-200 rounded py-1"
                      type="time"
                      name="tareWtTime"
                      id="tareWtTime"
                      autoComplete="off"
                      value={timeTwo}
                      onChange={(e) => setTimeTwo(e.target.value)}
                      step="any"
                    />
                  </div>
                </article>


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="charges">Enter Charges:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="number"
                    name="charges"
                    id="charges"
                    autoComplete="off"
                    value={charges}
                    onChange={(e) => setCharges(e.target.value)}
                    step="any"
                  />
                </div>



                <button onClick={() => setShowInvoice(true)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:text-blue-500 hover:bg-transparent transition-all duration-300">Preview Invoice</button>
              </div>
            </>

          )
        }

      </main >
    </>
  )
}

export default App
