import React from "react"
import PersonIcon from "../images/icons/person.png"
import ListIcon from "../images/icons/list.png"
import UserIcon from "../images/icons/user-img.png"
import { Link } from "react-router-dom"


function MainLayout({ children }) {

  return (
    <div className="flex h-full">
      <div className="h-full w-[15%] px-3 bg-sky-900">
        <h1 className="text-center leading-10  text-lg text-white">
          Axele Plan
        </h1>
        <hr />

        <div>
          <div className="mt-2">
            <div className="text-gray-400 pb-1">PROFILE</div>
            <div className="pl-2 mt-2">
              <Link
                to="/profile"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={PersonIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Profile</span>
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-gray-400 pb-1">LOAD BOARD</div>
            <div className="pl-2 mt-2">
              <Link
                to="/load_board"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Find Load</span>
              </Link>
            </div>
          </div>
          <div className="mt-2">
            <div className="text-gray-400 pb-1">MY DRIVERS</div>
            <div className="pl-2 mt-2">
              <Link
                to="/add_driver"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Add Driver</span>
              </Link>
              <Link
                to="/drivers"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Drivers</span>
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-gray-400 pb-1">MY TRACTORS</div>
            <div className="pl-2 mt-2">
              <Link
                to="/add_tractor"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Add Tractor</span>
              </Link>
              <Link
                to="/tractors"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Tractors</span>
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-gray-400 pb-1">MY TRAILERS</div>
            <div className="pl-2 mt-2">
              <Link
                to="/add_trailer"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Add Trailer</span>
              </Link>
              <Link
                to="/trailers"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Trailers</span>
              </Link>
            </div>
          </div>

          <div className="mt-2">
            <div className="text-gray-400 pb-1">MY ADDRESS</div>
            <div className="pl-2 mt-2">
              <Link
                to="/fsdfsd"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>Add Address</span>
              </Link>
              <Link
                to="/fsdfsd"
                className="text-gray-200 flex items-center pt-2"
              >
                <img src={ListIcon} alt="img" className="w-6 h-6 mr-4" />
                <span>List</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full">
        <div className="h-10 px-4 bg-white border-b border-gray-600 flex justify-end items-center">
          <div className="flex items-center">
            <img src={UserIcon} alt="" className="w-8 h-8 mr-2" />
            <span>NarekCompany</span>
            <Link
              to="/login"
              className="text-sm ml-4 text-blue-700"
            >
              Sign Out
            </Link>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout
