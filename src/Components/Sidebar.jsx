import { Row, Col } from "reactstrap"
import { Link, Navigate } from "react-router-dom"
import { accessTokenAtom, useAtom } from "../auth"
import "./Sidebar.css"
import { FaUserCircle, FaUserCheck, FaSignOutAlt } from "react-icons/fa"
import { Suspense } from "react"

export default ({ routes }) => {
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom)

  const iconStyle = { width: "24px", height: "24px" }

  const handleLogout = () => {
    setAccessToken("")
    setTimeout(() => {}, 5)
    return <Navigate to="/login" />
  }

  return (
    <Suspense fallback={<h1>Sidebar loading...</h1>}>
      <Col md={2} className="sidebar">
        <h3>KJC Conference</h3>
        <hr />

        <div className="profile-info">
          <FaUserCircle style={{ width: "36px", height: "36px" }} />
          <p>Super Admin</p>
        </div>
        <hr />

        <div className="nav-links">
          {routes.map((route) => (
            <div className="nav-link" key={route.path}>
              {<route.icon style={iconStyle} />}
              <Link to={route.path}>{route.name}</Link>
            </div>
          ))}

          <div className="nav-link logout">
            <FaSignOutAlt style={{ width: "24px", height: "24px" }} />
            <Link onClick={handleLogout}>Logout</Link>
          </div>
        </div>
      </Col>
    </Suspense>
  )
}
