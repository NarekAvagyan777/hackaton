import React, {useState, useEffect} from "react"
import { Link, useNavigate } from "react-router-dom"
import { loginUser } from "../services/profileServices"
import { useAdminContext } from "../providers/adminProvider"

export default function Login() {

  const [dot, setDot] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const context = useAdminContext()

  useEffect(() => {
    context.setAdmin(JSON.parse(localStorage.getItem('allData')))
  }, [])

  useEffect(() => { 
    if(!context.admin.account.id) {
      navigate('/register')
      alert('Register first')
    }
  }, [])

  const handleLoginClick = () => {
    const userData = {
      dot,
      email,
      password
    }


    

    if(email === context.admin.account.email &&
        dot === context.admin.account.dot) {  
      loginUser(userData)
      console.log('completed')
      navigate('/profile')
    } else {
      alert('Check the fields you checked in')
      console.log(userData)
      console.log(context.admin.account.email)
      return;
    }
  }

  return (
    <div className="p-4">
      <div>
        <h1 className="text-xl">Sign In</h1>
        <div>
          <span>Do not have an account?</span>{" "}
          <Link to="/register" className="text-blue-700">
            Sign Up
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
        <br />
        <button
          className="px-20 py-2 rounded text-white bg-blue-700"
          onClick={handleLoginClick}
        >
          Login
        </button>
      </div>
    </div>
  )
}
