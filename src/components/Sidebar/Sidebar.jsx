import React from 'react'
import ob from './Sidebar.module.css'
import './sidebar.css'
import Grouptext from './Grouptext/Grouptext'
import Groupnets from './Groupnets/Groupnets'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <input id="sidebar__toggle" type="checkbox" />
            <label className="sidebar__btn" for="sidebar__toggle">
                <span></span>
            </label>
            <div className="sidebar__box">
                <Grouptext />
                <Groupnets />
            </div>
            <div className="sidebar__blure"></div>
        </div>
    )
}

export default Sidebar;