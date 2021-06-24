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
            <div className="sidebar__lang">
                <span className="sidebar__hidden">
                    <input id="lang__switch" type="checkbox" />
                    <label className="language" for="lang__switch">
                        <div>Рус</div>
                        <div>Eng</div>
                    </label>
                </span>
            </div>
            <div className="sidebar__blure"></div>
        </div>
    )
}

export default Sidebar;