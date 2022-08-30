import React, {useState} from 'react'
import MainLayout from '../../layouts/MainLayout'

export default function EditTractor() {

  const [status, setStatus] = useState('')

  return (
    <MainLayout>
      <div className="pl-6 py-6 border-2 rounded my-6 mx-6">
        <div className="mb-20">
          <h1 className="text-2xl">Edit Tractor</h1>
        </div>

        <div>
          <div className="mb-7">
            <span className="text-black font-semibold">Tractor Name</span>
            <div>
              <input
                type="text"
                placeholder="Tractor Name"
                className="customInput"
              />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Make</span>
            <div>
              <input
                type="text"
                placeholder="Model"
                className="customInput"
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
              />
            </div>
          </div>

          {/* <div className="mb-7">
            <span className="text-black font-semibold">Status</span>
            <div>
              <input
                type="text"
                placeholder="Make"
                className="customInput"
              />
            </div>
          </div> */}

          <div>
            
          </div>  
          <select
            value={status}
            className='rounded border w-72 py-1 mb-4'
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="TRANSIT">AVAILABLE</option>
            <option value="AVAILABLE">TRANSIT</option>
            <option value="IN-TRANSIT">IN-TRANSIT</option>
          </select>

          <div>
            <button
              className="px-20 py-2 rounded text-white bg-green-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
