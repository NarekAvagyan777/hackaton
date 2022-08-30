import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { registerUser } from "../services/profileServices"

export default function Register() {

  const navigate = useNavigate()

  const [organizationName, setOrganizationName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [dot, setDot] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegisterClick = () => {

    const newUser = {
      organizationName,
      email,
      password,
      name,
      dot,
    }

    registerUser(newUser).then((res) => {
      if(window) {
        localStorage.setItem("allData", JSON.stringify(res))
        navigate('/login')        
      }
    }
    )
  }

  // registerUser(newUser)
  // .then((res) => {
  //   localStorage.setItem("adminId", res.data.id)
  //   setAdminId(res.data.id)
  //   navigate("/profile")
  // })
  // .catch((err) => alert(err.message))

  return (
    <div className='p-4'>
      <div>
        <h1 className="text-xl">Create Your Free Account</h1>
        <div>
          <span>Already have an account?</span>{" "}
          <Link to="/login" className="text-blue-700">
            Login
          </Link>
        </div>
      </div>

      <div>
        <input
          className="customInput my-4 "
          type="text"
          placeholder="DOT"
          value={dot}
          onChange={(e) => setDot(e.target.value)}
        />
        <hr />
        <hr />

        <input
          className="customInput my-4 "
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />

        <input
          className="customInput my-4 "
          type="text"
          placeholder="Organization Name"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
        <hr />

        <input
          className="customInput my-4 "
          type="text"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <hr />

        <input
          className="customInput my-4 "
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />

        <input
          className="customInput my-4 "
          type="password"
          placeholder="Confirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <hr />
        <br />
        <button
          className="px-20 py-2 rounded text-white bg-blue-700"
          onClick={handleRegisterClick}
        >
          Register
        </button>
      </div>
    </div>
  )
}
