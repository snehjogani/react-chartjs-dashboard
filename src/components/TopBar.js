import React from "react";
import {
  Col,
  Row,
} from "reactstrap"
// import useCurrentPath from "../utils/useCurrentPath";
// import { routes } from "../utils/constants";
// import logo from "../assets/logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons'
// import { byPrefixAndName } from '@awesome.me/kit-KIT_CODE/icons'

const TopBar = ({ toggleSidebar }) => {
  // const currentPath = useCurrentPath()

  return (
    <header
      color="light"
      light
      className="navbar shadow-sm p-3 mb-4 bg-white"
      expand="md"
      style={{ position: "fixed", top: 0, left: 0, zIndex: 20, right: 0, height: "4.25rem", marginLeft: "250px" }}
    >
      <Row className="w-100">
        <Col xs="auto" className="flex-grow-1" style={{}}>
          {/* <InputGroup>
            <InputGroupText>
              @
            </InputGroupText>
            <Input placeholder="Search" />
          </InputGroup> */}
        </Col>
        <Col xs="auto" style={{ display: "flex", alignItems: "center" }}>
          <FontAwesomeIcon icon={faBell} style={{ marginRight: "20px", color: "#272c33" }} />
          <FontAwesomeIcon icon={faUserCircle} size="2x" color="grey" />
        </Col>
      </Row>
    </header>
  );
};

export default TopBar;
