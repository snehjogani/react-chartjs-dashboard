import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

import useCurrentPath from '../utils/useCurrentPath'
import { routes } from '../utils/constants'
import logo from "../assets/React-icon.svg"

const Sidebar = ({ isOpen, toggle }) => {
  const currentPath = useCurrentPath()

  return <aside className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header d-flex text-center" style={{ marginRight: "8px", marginLeft: "16px" }}>
      <div style={{ width: "2.5rem" }}>
        <img src={logo} style={{ objectFit: "contain", width: "100%", height: "100%" }} alt="Logo" />
      </div>
      <h3 className="mb-0" style={{ paddingLeft: '8px' }}>App</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        {routes.map((item, index) => <NavItem key={index}>
          <NavLink tag={Link} className={classNames({ "is-active": currentPath === item.path })} to={item.path}>
            {/* <FontAwesomeIcon className="mr-2" /> */}
            {item.label}
          </NavLink>
        </NavItem>)}
      </Nav>
    </div>
  </aside>
}

export default Sidebar