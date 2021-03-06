import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import './Chat.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded'
import MoreVertRoundedIcon from '@material-ui/icons/MoreVertRounded'
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded'
import MicRoundedIcon from '@material-ui/icons/MicRounded'
import { useParams } from 'react-router'
import { useStateValue } from './StateProvider'
import db from './firebase'
import firebase from 'firebase'

function Chat() {

    const [seed, setSeed] = useState('')
    const [input, setInput] = useState('')
    const { roomId } = useParams()
    const [roomName, setRoomName] = useState('')
    const [messages, setMessages] = useState([])
    const [{ user }, dispatch] = useStateValue()

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })

            db.collection('rooms').doc(roomId)
                .collection('messages').orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => (
                    setMessages(snapshot.docs.map(doc => (
                        doc.data()
                    )))
                ))
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault()
        alert(input)

        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })

        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}</p>
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
                {
                    messages.map(message => (
                        <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                            <span className="chat__name">{message.name}</span>
                                {message.message}
                            <span className="chat__timestamp">
                                {new Date(message.timestamp?.toDate()).toUTCString()}
                            </span>
                        </p>
                    ))
                }
            </div>

            <div className="chat__footer">
                <InsertEmoticonRoundedIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder="Type a message" />
                    <button onClick={sendMessage} type="submit"></button>
                </form>
                <MicRoundedIcon />
            </div>
        </div>
    )
}

export default Chat
