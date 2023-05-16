import React from 'react'
import ChatItem from './ChatItem'
import './index.css'
import ActionBar from './ActionBar'

const ChatList = ({logout}) => {
  return (
    <div className='list'>
      <div className="list__wrapper">
        <ActionBar logout={logout}/>
        <ChatItem />
        <ChatItem active/>
        <ChatItem />
      </div>
    </div>
  )
}

export default ChatList