import React, { useState } from 'react';
import {User, UserFormProps} from "../types.s.ts";



const UserForm: React.FC<UserFormProps> = ({ addUser }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState<'user' | 'editor' | 'admin'>('user');
    const [isClicked, setIsClicked] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: User = { name, email, role, isClicked };
        addUser(newUser);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    id="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="role" className="form-label">Роль</label>
                <select
                    id="role"
                    className="form-select"
                    value={role}
                    onChange={(e) => setRole(e.target.value as 'user' | 'editor' | 'admin')}
                >
                    <option value="user">Пользователь</option>
                    <option value="editor">Редактор</option>
                    <option value="admin">Администратор</option>
                </select>
            </div>
            <div className="form-check mb-3">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="isActive"
                    checked={isClicked}
                    onChange={(e) => setIsClicked(e.target.checked)}
                />
                <label htmlFor="isActive" className="form-check-label">
                    Активен
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Создать пользователя</button>
        </form>
    );
};

export default UserForm;
