import React from 'react'

const Card = ({ user }) => {
    return (
        <div>
            <img src={user.avatar} alt={user.name} />
            <p>{user.name}</p>
        </div>
    )
}

export default Card