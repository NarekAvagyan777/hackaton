import "./App.css"
import Login from "./pages/Login"
import Register from "./pages/Register"
import { Route, Routes, useNavigate } from "react-router-dom"
import Profile from "./pages/Profile/Profile"
import AddDriver from "./pages/MyDrivers/AddDriver"
import AddTractor from "./pages/MyTractors/AddTractor"
import AddTrailer from "./pages/MyTrailers/AddTrailer"
import Trailers from "./pages/MyTrailers/Trailers"
import Tractors from "./pages/MyTractors/Tractors"
import EditTrailer from "./pages/MyTrailers/EditTrailer"
import EditTractor from "./pages/MyTractors/EditTractor"
import React, { createContext, useContext, useState, useEffect } from "react"
import { AdminContextProvider } from "./providers/adminProvider"
import Home from "./pages/Profile/Home"



function App() {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  // const [admin, setAdmin] = useState(JSON.parse(localStorage.getItem("allData"))?.account?.id)
  // const navigate = useNavigate()
  
  // useEffect(() => {
  //   if (!JSON.parse(localStorage.getItem("allData")).account.id) {
  //     navigate("/register")
  //   } else {
  //     setAdmin(JSON.parse(localStorage.getItem("allData")))
  //   }
  // }, [])

  // const AdminContext = React.createContext('')

  return (
    // <AdminContextProvider>
    // <AdminContext.Provider value={{adminId, setAdminId}}>

    <AdminContextProvider>
      <div className="h-full">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/add_driver" element={<AddDriver />} />
          <Route path="/add_tractor" element={<AddTractor />} />
          <Route path="/tractors" element={<Tractors />} />
          <Route path="/edit_tractor" element={<EditTractor />} />
          <Route path="/trailers" element={<Trailers />} />
          <Route path="/add_trailer" element={<AddTrailer />} />
          <Route path="/edit_trailer" element={<EditTrailer />} />
        </Routes>
      </div>
    </AdminContextProvider>
  )
}

export default App
