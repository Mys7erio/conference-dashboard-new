import { useState, useEffect } from "react"
import { Navigate } from "react-router-dom"
import { getUserInfo } from "../auth"

export default function ProtectedRoute({ children }) {
  const accessToken = sessionStorage.getItem("access_token")
  const [tokenValid, setTokenValid] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  async function verifyToken() {
    const userInfo = await getUserInfo(accessToken)
    if (userInfo.email) setTokenValid(true)
    else {
      // Token was invalid
      setTokenValid(false)
      sessionStorage.removeItem("access_token")
    }
    setIsLoading(false)
  }

  // Runs on component mount
  useEffect(() => {
    verifyToken()
  }, [accessToken])

  if (isLoading) return <div>Loading...</div>
  
  if (!accessToken || !tokenValid) {
    console.log("Redirecting to login...")
    return <Navigate to="/login" />
  } else {
    return <>{children}</>
  }
}
