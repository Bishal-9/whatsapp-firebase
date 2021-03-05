import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './Chat.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded'
import MicRoundedIcon from '@material-ui/icons/MicRounded'

function Chat() {

    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        alert(input)
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileRoundedIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertRoundedIcon />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Messi</span>
                    Hey Guys 🥳🥳🥳
                    <span className="chat__timestamp">3:52pm</span>          
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonRoundedIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message"/>
                    <button onClick={sendMessage} type="submit"></button>
                </form>
                <MicRoundedIcon />
            </div>
        </div>
    )
}

export default Chat
