import React, { useState } from "react"
import Footer from "./components/Footer"
import Signature from "./components/Signature"
import Charges from "./components/Charges"
import WeightDetails from "./components/WeightDetails"
import Details from "./components/Details"
import Header from "./components/Header"
function App() {
  const [showInvoice, setShowInvoice] = useState(false)

  const [serialNo, setSerialNo] = useState("")
  const [partyName, setPartyName] = useState("")
  const [gatePass, setGatePass] = useState("")
  const [vehicleNo, setVehicleNo] = useState("")
  const [matrial, setMaterial] = useState("")

  const [grossWt, setGrossWt] = useState("")
  const [tareWt, setTareWt] = useState("")
  const [netWt, setNetWt] = useState("")



  const handlePrint = () => {
    window.print()
  }


  return (
    <>
      <main className="m-3 p-3 rounded shadow lg:max-w-6xl lg:mx-auto bg-white">

        {
          showInvoice ? (
            <>
              <div>
                <Header handlePrint={handlePrint} />


                <Details
                  serialNo={serialNo}
                  partyName={partyName}
                  gatePass={gatePass}
                  vehicleNo={vehicleNo}
                  matrial={matrial}
                />

                <p className=" text-center leading-[0.7rem]">-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

                <WeightDetails
                  grossWt={grossWt}
                  tareWt={tareWt}
                  netWt={netWt}
                />


                <p className="text-center leading-[0.7rem]">-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

                <Charges />

                <p className="text-center leading-[0.7rem]">-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

                <Signature />

                <p className="text-center leading-[0.7rem]">-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>

                <Footer />
                <button onClick={() => setShowInvoice(false)} className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:text-blue-500 hover:bg-transparent transition-all duration-300">
                  Edit Invoice
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col justify-center gap-2">
                <div className="flex flex-row justify-between gap-10 px-5 items-center">
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


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter Party Name:</label>
                  <input
                    className="uppercase px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="text"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter Party Name"
                    autoComplete="off"
                    value={partyName}
                    onChange={(e) => setPartyName(e.target.value)}
                  />
                </div>


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter Gate Pass:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="text"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter Gate Pass:"
                    autoComplete="off"
                    value={gatePass}
                    onChange={(e) => setGatePass(e.target.value)}
                  />
                </div>


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter Vehicle No:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="text"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter Vehicle No"
                    autoComplete="off"
                    value={vehicleNo}
                    onChange={(e) => setVehicleNo(e.target.value)}
                  />
                </div>


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter Material:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="text"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter Material"
                    autoComplete="off"
                    value={matrial}
                    onChange={(e) => setMaterial(e.target.value)}
                  />
                </div>

                {/* Weight Details */}
                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter GROSS Wt:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="number"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter GROSS Wt"
                    autoComplete="off"
                    value={grossWt}
                    onChange={(e) => setGrossWt(e.target.value)}
                  />
                </div>


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter TARE Wt:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="number"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter TARE Wt"
                    autoComplete="off"
                    value={tareWt}
                    onChange={(e) => setTareWt(e.target.value)}
                  />
                </div>


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter NET Wt:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="number"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter NET wt"
                    autoComplete="off"
                    value={netWt}
                    onChange={(e) => setNetWt(e.target.value)}
                  />
                </div>


                <div className="flex flex-row justify-between gap-10 px-5 items-center">
                  <label htmlFor="serialno">Enter NET Wt:</label>
                  <input
                    className="px-3 w-[80%] bg-gray-200 rounded py-1"
                    type="time"
                    max="20"
                    name="text"
                    id="serialno"
                    placeholder="Enter NET wt"
                    autoComplete="off"
                    value={netWt}
                    onChange={(e) => setNetWt(e.target.value)}
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
