import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminContext = createContext(null)

export const AdminContextProvider = ({ children }) => {
  const [admin, setAdmin] = useState(
    JSON.parse(localStorage.getItem("allData"))
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("allData"))) { // .account.id
      navigate("/register")
      // console.log('afasfas')
    } else {
      setAdmin(JSON.parse(localStorage.getItem("allData")))
    }
    // console.log(JSON.parse(sessionStorage.getItem("allData")).account.id)
  }, [])

  return (
    <AdminContext.Provider
      value={{
        admin,
        setAdmin,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export const useAdminContext = () => useContext(AdminContext)
