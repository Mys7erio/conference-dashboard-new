import { Suspense } from "react"
import { Navigate } from "react-router-dom"
import { useAtom, accessTokenAtom, userInfoAtom, isUserValidAtom } from "./auth.js"
import AppRoutes from "./routes.js"

import "./App.css"

function App() {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [userInfo] = useAtom(userInfoAtom)
  const [isUserValid] = useAtom(isUserValidAtom)

  return (
    <Suspense fallback={<h1>Loading Home...</h1>}>
      {!accessToken || accessToken === "" || !isUserValid ? (
        <Navigate to="/login" />
      ) : (
        <Navigate to={AppRoutes[userInfo.role]} />
      )}
    </Suspense>
  )
}

export default App
