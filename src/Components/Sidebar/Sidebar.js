import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import * as MiIcons from "react-icons/md";
import { IconContext } from "react-icons/lib";

function Sidebar() {
  // let iconStyles = { color: "rgba(12, 111, 249, 1)", fontSize: "3em" };
  return (
    <>
      <IconContext.Provider value={{ size: "20px" }}>
        <nav className="sidebar">
          {/* logo */}
          <div className="nav-top">
            <Link to="/" className="logo">
              <div className="navbar-logo">
                <i className="fa-solid fa-circle"></i>
                <span className="logo-text">lapstop</span>
              </div>
            </Link>
          </div>
          {/* menu */}
          <div className="nav-middle">
            <ul className="side-menu-items">
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path} className="menu-item">
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <div className="nav-bottom">

                {/* log out button should navigate the user to the home page , so maybe need a router here too */}
                <Link to="/" className="menu-item">
                  <MiIcons.MdExitToApp />
                  <span> Log out</span>
                </Link>
              </div>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
