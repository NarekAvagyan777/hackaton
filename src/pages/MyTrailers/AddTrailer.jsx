import React, { useState } from "react"
import MainLayout from "../../layouts/MainLayout"
import { addTrailer } from "../../services/trailerServices"
import { useNavigate } from "react-router-dom"
import { useAdminContext } from "../../providers/adminProvider"

export default function AddTrailer() {

  const context = useAdminContext()

  const [name, setName] = useState("")
  const [make, setMake] = useState("")
  const [model, setModel] = useState("")
  const [vin, setVin] = useState("")
  const [year, setYear] = useState("")
  const [status, setStatus] = useState("")

  const navigate = useNavigate()

  const handleCreateClick = () => {

    const newTrailer = {
      id: context.admin.account.id,
      dot: context.admin.account.dot,
      organizationId: context.admin.account.organizationId,
      name,
      make,
      model,
      vin,
      year,
      status
    }

    console.log(newTrailer)

    addTrailer(newTrailer)
      .then((res) => navigate("/trailers"))
      .catch((err) => alert(err.message))
  }

  return (
    <MainLayout>
      <div className="pl-6 py-6 border-2 rounded my-6 mx-6">
        <div className="mb-16">
          <h1 className="text-2xl">Add Trailer</h1>
        </div>

        <div>
          <div className="mb-7">
            <span className="text-black font-semibold">Trailer Name</span>
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
            <span className="text-black font-semibold">Model</span>
            <div>
              <input
                type="text"
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
              <input
                type="text"
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
              <input
                type="text"
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
                className='rounded border w-72 py-1'
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="TRANSIT">TRANSIT</option>
                <option value="AVAILABLE">AVAILABLE</option>
                <option value="IN-TRANSIT">IN-TRANSIT</option>
              </select>
            </div>
          </div>

          <div>
            <button className="px-20 py-2 mt-4 rounded text-white bg-green-700"
                    onClick={handleCreateClick}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
