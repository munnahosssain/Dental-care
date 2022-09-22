import React from 'react';
import UserRow from './UserRow';
import Loading from '../Shared/Loading';
import { useQuery } from 'react-query';

const Users = () => {
    const { data: users, isLoading } = useQuery('users',
        () => fetch('http://localhost:5000/users', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <p className='text-2xl'>Total users: {users.length}</p>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <UserRow
                                    index={index}
                                    key={user._id}
                                    user={user}
                                />
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;