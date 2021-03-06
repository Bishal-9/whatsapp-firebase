import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import DonutLargeRoundedIcon from '@material-ui/icons/DonutLargeRounded'
import ChatRoundedIcon from '@material-ui/icons/ChatRounded'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SidebarChat from './SidebarChat'
import db from './firebase'
import { useStateValue } from './StateProvider'

function Sidebar() {

    const [rooms, setRooms] = useState([])
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            })))
    ))

    return () => {
        unsubscribe()
    }
    }, [])

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar src={user?.photoURL} />
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
                {
                    rooms.map(room => (
                        <SidebarChat key={room.id} name={room.data.name} id={room.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Sidebar
