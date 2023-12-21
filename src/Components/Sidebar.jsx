import React from "react";

const Sidebar = () => {
  return (
    <>
      <aside className="sidebarContainer">
        <div className="sidebarContent">
          <div className="sidebarTop">
            <div className="sidebarLinkerBox">
              <p>Home</p>
            </div>
            <div className="sidebarLinkerBox">
              <p>Hot</p>
            </div>
            <div className="sidebarLinkerBox">
              <p>Explore</p>
            </div>
            <div className="sidebarLinkerBox">
              <p>Dashboard</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
