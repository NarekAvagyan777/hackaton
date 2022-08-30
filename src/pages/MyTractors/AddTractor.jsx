import React from "react"
import MainLayout from "../../layouts/MainLayout"
import { useState } from "react"

export default function AddTractor() {
  const [name, setName] = useState("")
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [vin, setVin] = useState("")
  const [year, setYear] = useState("")
  const [status, setStatus] = useState("")

  return (
    <MainLayout>
      <div className="pl-6 py-6 border-2 rounded my-6 mx-6">
        <div className="mb-16">
          <h1 className="text-2xl">Add Tractor</h1>
        </div>

        <div>
          <div className="mb-7">
            <span className="text-black font-semibold">Tractor Name</span>
            <div>
              <input
                type="text"
                placeholder="Tractor Name"
                className="customInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Make</span>
            <div>
              <input
                type="text"
                placeholder="Make"
                className="customInput"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Model *</span>
            <div>
              <input type="text"
               placeholder="Model" 
               className="customInput"
               value={model}
               onChange={(e) => setModel(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Vin</span>
            <div>
              <input type="text"
               placeholder="Vin" 
               className="customInput"
               value={vin}
               onChange={(e) => setVin(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Year</span>
            <div>
              <input type="text"
               placeholder="Year" 
               className="customInput" 
               value={year}
               onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>

          <div>
            <span className="text-black font-semibold">Status</span>
            <div>
              <select
                value={status}
                className="rounded border w-72 py-1"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="TRANSIT">TRANSIT</option>
                <option value="AVAILABLE">AVAILABLE</option>
                <option value="IN-TRANSIT">IN-TRANSIT</option>
              </select>
            </div>
          </div>

          <div>
            <button className="px-20 py-2 mt-4 rounded text-white bg-green-700">
              Create
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
