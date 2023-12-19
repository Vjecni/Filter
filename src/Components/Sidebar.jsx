import React from 'react'

const Sidebar = () => {
  return (
    <>
        <aside className="sidebarContainer">
            <div className="sidebarContent">
                <div className="sidebarTop">
                    <div className="stTitle">
                        <span>Start</span>
                    </div>
                    <div className="stCont">
                        <div className="sidebarLinkerBox">
                            <p>AI Playground</p>
                        </div>
                        <div className="sidebarLinkerBox">
                            <p>Direct Messages</p>
                        </div>
                        <div className="sidebarLinkerBox">
                            <p>Explore</p>
                        </div>
                    </div>
                </div>
                <div className="sidebarMid">
                    <div className="smTitle">
                        <span>Managmnet</span>
                    </div>
                    <div className="sidebarManager">
                        <div className="smBx">
                            <p>Search</p>
                        </div>
                        <div className="smBx">
                            <p>Notifications</p>
                        </div>
                        <div className="smBx">
                            <p>Profile</p>
                        </div>
                        <div className="smBx">
                            <p>Settings</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </>
  )
}

export default Sidebar