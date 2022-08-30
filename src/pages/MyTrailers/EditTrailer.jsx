import React from "react"
import MainLayout from "../../layouts/MainLayout"

export default function EditTrailer() {
  
  return (
    <MainLayout>
      <div className="pl-6 py-6 border-2 rounded my-6 mx-6">
        <div className="mb-20">
          <h1 className="text-2xl">Edit Trailer</h1>
        </div>

        <div>
          <div className="mb-7">
            <span className="text-black font-semibold">Trailer Name</span>
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

          <div className="mb-7">
            <span className="text-black font-semibold">Status</span>
            <div>
              <input
                type="text"
                placeholder="Make"
                className="customInput"
              />
            </div>
          </div>

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
