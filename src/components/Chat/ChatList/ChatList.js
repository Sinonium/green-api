import React from 'react'
import ChatItem from './ChatItem'
import './index.css'

const ChatList = () => {
  return (
    <div className='list'>
      <div className="list__wrapper">
        <ChatItem />
        <ChatItem active/>
        <ChatItem />
      </div>
    </div>
  )
}

export default ChatList