import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { authenticate } from "../auth.js"
import AppRoutes from "../routes.js"
import { useAtom, accessTokenAtom, userInfoAtom, isUserValidAtom } from "../auth.js"

export default function Login() {
  const navigator = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [userInfo] = useAtom(userInfoAtom)
  const [isUserValid] = useAtom(isUserValidAtom)

  async function handleLogin(e, username, password) {
    // Get new token by supplying username and password
    e.preventDefault()
    const newToken = await authenticate(username, password)

    // If newToken.access_token exists, the authentication was successful
    newToken.access_token
      ? setAccessToken(newToken.access_token)
      : console.log("Authentication Failed")
  }

  // Run effect when authentication status changes
  useEffect(() => {
    if (isUserValid) {
      const userDashboard = AppRoutes[userInfo.role]
      console.log(`Authentication Status: Successful Redirecting to ${userDashboard}`)
      // Navigate to user's dashboard
      navigator(userDashboard)
    } else console.log("Authentication Status: Failed")
  }, [isUserValid])

  if (!isUserValid)
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

        <button onClick={() => navigator("/paper-dashboard")}>
          Paper Dashboard Preview
        </button>
      </form>
    )
}
