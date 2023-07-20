import { useEffect } from "react"
import { Outlet, Navigate, useLocation, useNavigate } from "react-router-dom"
import AppRoutes from "../routes"
import { useAtom, accessTokenAtom, userInfoAtom, isUserValidAtom } from "../auth"
import { Suspense } from "react"

export default function ProtectedRoute() {
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
  useEffect(() => verifyRoute(), [location])

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {accessToken === "" || !isUserValid ? <Navigate to="/login" /> : <Outlet />}
    </Suspense>
  )
}
