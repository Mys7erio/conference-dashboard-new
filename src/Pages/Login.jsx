import { useState } from "react"
import { Navigate } from "react-router-dom"
import { authenticate } from "../auth.js"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [accessToken, setAccessToken] = useState(sessionStorage.getItem("access_token"))

  async function handleLogin(e, username, password) {
    // Prevent page refresh
    e.preventDefault()

    // Get new access token
    const tokenInfo = await authenticate(username, password)

    // If tokenInfo.access_token exists, the authentication was successful
    if (tokenInfo.access_token) {
      setAccessToken(tokenInfo.access_token)
      sessionStorage.setItem("access_token", tokenInfo.access_token)
      setIsAuthenticated(true)
    }
    else { console.log("Authentication Failed") }
  }

  if (isAuthenticated) return <Navigate to="/home" />
  
  return (
    <form style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <label htmlFor="username">
        Username
        <input
          type="text"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>

      <label htmlFor="password">
        Password
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <button type="submit" onClick={(e) => handleLogin(e, username, password)}>
        Login
      </button>
    </form>
  )
}
