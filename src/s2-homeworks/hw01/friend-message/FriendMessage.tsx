import React from 'react'
import s from './FriendMessage.module.css'

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: any) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.id}
                    src = {props.message.user.avatar}
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        <h1>{props.message.user.name}</h1>


                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}
                        <p>{props.message.message.text}</p>

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}
                <p>{props.message.message.time}</p>
                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
