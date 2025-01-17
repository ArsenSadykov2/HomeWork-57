import React from 'react';
import {UserItemProps} from "../types.s.ts";

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                <strong>{user.name}</strong> ({user.email})
                <hr />
                <p>Роль: {user.role}</p>
                <hr />
                <p>Активен: {user.isClicked ? 'Да' : 'Нет'}</p>
            </div>
        </li>
    );
};

export default UserItem;
