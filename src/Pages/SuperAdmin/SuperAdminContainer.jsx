import React from "react"
import { Row, Col, Container } from "reactstrap"

import Sidebar from "../../Components/Sidebar"

const SuperAdminContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        {/* <Col>Column One Of Twelve</Col>
        <Col>Column TWo Of Twelve</Col> */}
        <Col>Column Three Of Twelve</Col>
        <Col>Column Four Of Twelve</Col>
        <Col>Column Five Of Twelve</Col>
        <Col>Column Six Of Twelve</Col>
        <Col>Column Seven Of Twelve</Col>
        <Col>Column Eight Of Twelve</Col>
        <Col>Column Nine Of Twelve</Col>
        <Col>Column Ten Of Twelve</Col>
        <Col>Column Eleven Of Twelve</Col>
        <Col>Column Twelve Of Twelve</Col>
      </Row>
    </Container>
  )
}

export default SuperAdminContainer
