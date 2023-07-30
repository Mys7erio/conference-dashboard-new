import { Navigate } from "react-router-dom"
import { useAtom, accessTokenAtom, userInfoAtom, isUserValidAtom} from "./auth.js"
import AppRoutes from "./routes.js"

import "./App.css"

function App() {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)
  const [userInfo] = useAtom(userInfoAtom)
  const [isUserValid] = useAtom(isUserValidAtom)

  if (!accessToken || accessToken === "" || !isUserValid) {
    console.log("Home: Navigating to -> /login")
    return <Navigate to="/login" />
  } else {
    console.log("Home: Navigating to -> " + AppRoutes[userInfo.role])
    return <Navigate to={AppRoutes[userInfo.role]} />
  }
}

export default App
