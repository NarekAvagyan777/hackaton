import React, { useEffect, useState } from "react"
import MainLayout from "../../layouts/MainLayout"
import { useAdminContext } from "../../providers/adminProvider"

export default function Profile() {

  const [phone, setPhone] = useState("")
  const [zoom, setZoom] = useState("")

  const context = useAdminContext()

  

  return (
    <MainLayout>
      <div className="pl-6 py-6 border-2 rounded my-6 mx-6">
        <div className="mb-20">
          <h1 className="text-2xl">Profile</h1>
        </div>

        <div>
          <div className="mb-7">
            <span className="text-black font-semibold">Organization:</span>
            <span>{}</span>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Account type:</span>
            <span> {context.admin.account.accountType}</span>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">E-mail:</span>
            <span> {context.admin.account.email}</span>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Phone *</span>
            <div>
              <input 
                type="text" 
                placeholder="Phone" 
                className="customInput" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-7">
            <span className="text-black font-semibold">Zoom</span>
            <div>
              <input 
                type="text" 
                placeholder="Zoom" 
                className="customInput" 
                value={zoom}
                onChange={(e) => setZoom(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button className="px-20 py-2 rounded text-white bg-blue-700">
              Save
            </button>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
