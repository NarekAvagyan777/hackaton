import React from "react"
import MainLayout from "../../layouts/MainLayout"

export default function AddDriver() {

  

  return (
    <MainLayout>
      <div className="pl-6 py-6 border-2 rounded my-6 mx-6">
        <div className="mb-20">
          <h1 className="text-2xl">Add Driver</h1>
        </div>

        <div>
          <div className="mb-7">
            <span className="text-black font-semibold">Driver Name</span>
            <div>
              <input
                type="text"
                placeholder="Driver Name"
                className="customInput"
              />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Email</span>
            <div>
              <input type="text" placeholder="Email" className="customInput" />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Phone</span>
            <div>
              <input type="text" placeholder="Phone" className="customInput" />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Password</span>
            <div>
              <input
                type="text"
                placeholder="Password"
                className="customInput"
              />
            </div>
          </div>

          <div>
            <button className="px-20 py-2 rounded text-white bg-green-700">
              Create
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
