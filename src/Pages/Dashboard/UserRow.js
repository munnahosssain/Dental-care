import React from 'react';

const UserRow = ({ user, index }) => {
    const { email } = user;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td><button className="btn btn-outline btn-success">Make Admin</button></td>
            <td><button className="btn btn-outline btn-error">Remove User</button></td>
        </tr>
    );
};

export default UserRow;