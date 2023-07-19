import { useState, useEffect } from "react"
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom"
import AppRoutes from "../routes"
import { useAtom, accessTokenAtom, userInfoAtom } from "../auth"

export default function ProtectedRoute() {
  const [isLoading, setIsLoading] = useState(true)
  const [tokenValid, setTokenValid] = useState(false)

  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)

  const location = useLocation()
  const navigate = useNavigate()

  async function verifyToken() {
    // If userInfo.email exists, token is valid
    if (userInfo.email) setTokenValid(true)
    else {
      // Token was invalid
      setTokenValid(false)
      setAccessToken("")
    }
    setIsLoading(false)
  }

  function verifyRoute() {
    const userOnCorrectPath = location.pathname === AppRoutes[userInfo.role]
    if (userInfo && !userOnCorrectPath) {
      console.log("You cannot access this page... Redirecting to YOUR dashboard")
      navigate(AppRoutes[userInfo?.role])
    }
  }

  // Verify token on component mount
  useEffect(() => {
    verifyToken()
  }, [])

  // Verify route when location changes
  useEffect(() => {
    verifyRoute()
  }, [location])

  if (isLoading) return <h1>Loading...</h1>

  if (accessToken === '' || !tokenValid || !userInfo) {
    console.log("Redirecting to login...")
    return <Navigate to="/login" />
  } else {
    return <Outlet />
  }
}
