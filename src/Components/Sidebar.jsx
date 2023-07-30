import { Row, Col } from "reactstrap"
import "./Sidebar.css"
import {
  FaUserCircle,
  FaBuilding,
  FaUserPlus,
  FaUserCheck,
  FaSignOutAlt,
} from "react-icons/fa"

export default ({ links }) => {
  return (
    <Col md={2} className="sidebar">
      <h3>KJC Conference</h3>
      <hr />

      <div className="profile-info">
        <FaUserCircle style={{ width: "36px", height: "36px" }} />
        <p>Super Admin</p>
      </div>
      <hr />

      <div className="nav-links">
        <div className="nav-link">
          <FaBuilding style={{ width: "24px", height: "24px" }} />
          <a href="#">Create Institution</a>
        </div>

        <div className="nav-link">
          <FaUserPlus style={{ width: "24px", height: "24px" }} />
          <a href="#">Create Admin</a>
        </div>

        <div className="nav-link">
          <FaUserCheck style={{ width: "24px", height: "24px" }} />
          <a href="#">Assign Admin</a>
        </div>

        <div className="nav-link logout">
          <FaSignOutAlt style={{ width: "24px", height: "24px" }} />
          <a href="#">Logout</a>
        </div>
      </div>
    </Col>
  )
}
