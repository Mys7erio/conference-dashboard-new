import { useEffect } from "react"
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom"
import AppRoutes from "../routes"
import { useAtom, accessTokenAtom, userInfoAtom, isUserValidAtom } from "../auth"

export default function ProtectedRoute() {
  // eslint-disable-next-line no-unused-vars
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [userInfo] = useAtom(userInfoAtom)
  const [isUserValid] = useAtom(isUserValidAtom)

  const location = useLocation()
  const navigate = useNavigate()

  function verifyRoute() {
    const userOnCorrectPath = location.pathname === AppRoutes[userInfo.role]
    if (isUserValid && !userOnCorrectPath) {
      console.log("You cannot access this page... Redirecting to YOUR dashboard")
      navigate(AppRoutes[userInfo?.role])
    }
  }

  // Check if the user can access the current route
  useEffect(() => verifyRoute(), [location, verifyRoute])

  if (!accessToken || accessToken === "" || !isUserValid)
    return <Navigate to="/login" />
  else return <Outlet />
}
