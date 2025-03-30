import React from "react";
import {
  Navbar,
  NavbarText,
} from "reactstrap"
import useCurrentPath from "../utils/useCurrentPath";
import { routes } from "../utils/constants";

const TopBar = ({ toggleSidebar }) => {
  const currentPath = useCurrentPath()

  return (
    <header
      color="light"
      light
      className="navbar shadow-sm p-3 mb-4 bg-white"
      expand="md"
      style={{ position: "fixed", top: 0, left: 0, zIndex: 20, right: 0, height: "4.25rem" }}
    >
      <div>
        <NavbarText>{"Logo"}</NavbarText>
      </div>
      <div className="flex-end">
        <NavbarText>User</NavbarText>
      </div>
    </header>
  );
};

export default TopBar;
