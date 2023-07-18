import { useState } from "react"
// import Authentication from './Pages/CommonPages/Authenticaion/Authentication.jsx'
import Login from "./Pages/Login.jsx"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"
import SuperAdminContainer from "./Pages/SuperAdmin/SuperAdminContainer.jsx"
import "./App.css"

function App() {
  // const [authentication, setAuthentication] = useState({
  //   isAuthenticated: false,
  //   authenticationType: "Not Authenticated",
  //   token: null,
  //   Username: "",
  // })

  // if (!authentication.isAuthenticated) {
  // return <Login />
  return (
    <div>
      <ProtectedRoute>
        <SuperAdminContainer />
      </ProtectedRoute>
    </div>
  )
  // } else return <div>Page Not Found</div>
}

export default App
