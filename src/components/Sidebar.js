import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, NavItem, NavLink } from 'reactstrap'

import useCurrentPath from '../utils/useCurrentPath'
import { routes } from '../utils/constants'

const Sidebar = ({ isOpen, toggle }) => {
  const currentPath = useCurrentPath()

  return <aside className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Admin</h3>
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