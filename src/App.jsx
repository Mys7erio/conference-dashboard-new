import { Navigate } from "react-router-dom"
import { useAtom, userInfoAtom, accessTokenAtom } from "./auth.js"
import AppRoutes from "./routes.js"

import "./App.css"

function App() {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [userInfo, setUserInfo] = useAtom(userInfoAtom)

  if (accessToken === "" || !userInfo) {
    console.log("Home: Navigating to -> /login")
    return <Navigate to="/login" />
  } else {
    console.log("Home: Navigating to -> " + AppRoutes[userInfo.role])
    return <Navigate to={AppRoutes[userInfo.role]} />
  }
}

export default App
