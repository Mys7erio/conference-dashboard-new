import { useState } from 'react'
import Authentication from './Page Groups/CommonPages/Authenticaion/Authentication.jsx'
import './App.css'

function App() {
  // const [authentication, setAuthentication] = useState({
  //   isAuthenticated: false,
  //   authenticationType: "Not Authenticated",
  //   token: null,
  //   Username: "",
  // })

  // if (!authentication.isAuthenticated) {
    return (
      <Authentication /> //<Authentication setAuthentication={setAuthentication}/>
    )
  // } else return <div>Page Not Found</div>

}

export default App