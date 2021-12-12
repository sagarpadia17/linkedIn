import React from 'react'
import "./Sidebar.css"
import{ Avatar } from "@material-ui/core";
function Sidebar() {

    const recentItem = (topic) =>(
        <div  className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                    src="https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sb3JmdWwlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&w=1000&q=80" 
                    alt=""/>
                <Avatar className="sidebar__avatar"/>
                <h2>Sagar Padia</h2>
                <h4>sagarpadia7@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who Viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>     
                </div>
                <div className="sidebar__stat">
                <p>Views on posts</p>
                    <p className="sidebar__statNumber">2,448</p>                                  
                </div>
            </div> 
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>           

        </div>
    )
}

export default Sidebar 
