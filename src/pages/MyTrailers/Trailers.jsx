import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import MainLayout from "../../layouts/MainLayout"
import { getTrailers } from "../../services/trailerServices"
import { useAdminContext } from "../../providers/adminProvider"



export default function Trailers() {

  const context = useAdminContext()

  const [trailersData, setTrailersData] = useState([])
  

  useEffect(() => {
    getTrailers(context.admin.account.organizationId)
      .then(res => setTrailersData(res.trailers))
  }, [])

  return (
    <MainLayout>
      <div className="px-6 py-6 border-2 rounded my-6 mx-6">
        <div className="mb-20">
          <h1 className="text-2xl">Trailers</h1>
        </div>

        <div>
          <div className="bg-gray-200 grid grid-cols-6">
            <div className="p-2 flex flex-col border border-gray-300">
              <div>Name</div>
              <input type="text" className="inputWithAutoWidth" />
            </div>
            <div className="p-2 flex flex-col border border-gray-300">
              <div>Vin</div>
              <input type="text" className="inputWithAutoWidth" />
            </div>
            <div className="p-2 flex flex-col border border-gray-300">
              <div>Year</div>
              <input type="text" className="inputWithAutoWidth" />
            </div>
            <div className="p-2 flex flex-col border border-gray-300">
              <div>Model</div>
              <input type="text" className="inputWithAutoWidth" />
            </div>
            <div className="p-2 flex flex-col border border-gray-300">
              <div>Status</div>
              <input type="text" className="inputWithAutoWidth" />
            </div>
            <div className="p-2 flex flex-col justify-center border border-gray-300">
              <div>Edit</div>
            </div>
          </div>

          <div>
            {trailersData.map((item) => (
              <div className="bg-gray-100 grid grid-cols-6">
                <div className="p-2 flex flex-col border border-gray-300">
                  {item.name}
                </div>
                <div className="p-2 flex flex-col border border-gray-300">
                  {item.vin}
                </div>
                <div className="p-2 flex flex-col border border-gray-300">
                  {item.year}
                </div>
                <div className="p-2 flex flex-col border border-gray-300">
                  {item.model}
                </div>
                <div className="p-2 flex flex-col border border-gray-300">
                  {item.status}
                </div>
                <div className="p-2 flex flex-col border border-gray-300 text-blue-700">
                  <Link to={`/edit_trailer?trailerId=${item.id}`}>Update</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
