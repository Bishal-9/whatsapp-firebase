import { Avatar, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SidebarChat from './SidebarChat'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <ChatRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchRoundedIcon />
                    <input type="text" placeholder="Search or start new chat" />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat addNewChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
