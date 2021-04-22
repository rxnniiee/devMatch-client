import React from 'react'
import styles from './EmployeeChat.module.scss';
import { useSelector } from 'react-redux';

const EmployeeChat = () => {
    const chats = useSelector(state => state.chats);

    return (
        <div className={styles.EmployeeChat}>
           {chats.map(chat => <div><h1>senderId: {chat.senderId}</h1><p>message: {chat.message}</p></div>)}
        </div>
    )
}

export default EmployeeChat;