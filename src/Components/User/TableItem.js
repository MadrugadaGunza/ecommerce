import React from 'react'

const TableItem = ({ user }) => {
    return (
        <tr>
            <td>{user.id}</td>
            <td>
                <img src={user.avatar} alt={user.name} style={{ width: '5rem' }} />
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
        </tr>
    )
}

export default TableItem