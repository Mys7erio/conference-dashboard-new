import { Navigate } from "react-router-dom"
import { useAtom, userInfoAtom, accessTokenAtom } from "./auth.js"
import AppRoutes from "./routes.js"

import "./App.css"

function App() {
  console.log("userInfo", userInfo)
  console.log("Home: Navigating to -> " + routes[userInfo.role])

  const [userInfo] = useAtom(userInfoAtom)
  const [accessToken] = useAtom(accessTokenAtom)

  if (accessToken === "" || !userInfo) return <Navigate to="/login" />
  else return <Navigate to={AppRoutes[userInfo.role]} />
}

export default App
