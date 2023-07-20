import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authenticate } from "../auth.js"
import AppRoutes from "../routes.js"
import { useAtom, accessTokenAtom, userInfoAtom } from "../auth.js"

export default function Login() {
  const navigator = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)

  const [isAuthenticated, setIsAuthenticated] = useState(userInfo.email ? true : false)

  async function handleLogin(e, username, password) {
    // Get new token by supplying username and password
    e.preventDefault()
    const tokenInfo = await authenticate(username, password)

    // If tokenInfo.access_token exists, the authentication was successful
    if (tokenInfo.access_token) {
      setAccessToken(tokenInfo.access_token)
      setIsAuthenticated(true)
    } else {
      console.log("Authentication Failed")
    }
  }

  // Run when authentication status changes
  useEffect(() => {
    isAuthenticated
      ? console.log(
          "Authentication Status: Successful Redirecting to " + AppRoutes[userInfo.role]
        )
      : console.log("Authentication Status: Failed Redirecting to /login")
    navigator(AppRoutes[userInfo.role]) // Navigate to user's dashboard
  }, [isAuthenticated])

  if (!isAuthenticated)
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
