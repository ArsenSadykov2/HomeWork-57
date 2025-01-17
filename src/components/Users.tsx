import React from 'react';
import UserItem from './UserItem';
import {UsersProps} from "../types.s.ts";


const Users: React.FC<UsersProps> = ({ users }) => {
    return (
        <div>
            {users.length === 0 ? (
                <div className="alert alert-info" role="alert">
                    Нет пользователей.
                </div>
            ) : (
                <ul className="list-group">
                    {users.map((user, index) => (
                        <UserItem key={index} user={user} />
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Users;
