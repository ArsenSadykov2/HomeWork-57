
import './App.css'
import {useState} from "react";
import {User} from "./types.s.ts";
import UserForm from "./components/UserForm.tsx";

const App = () => {
    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user: User) => {
        setUsers((prevUsers) => [...prevUsers, user]);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h3>Создание пользователя</h3>
                    <UserForm addUser={addUser} />
                </div>
                <div className="col-md-6">
                    <h3>Список пользователей</h3>
                    <Users users={users}/>
                </div>
            </div>
        </div>
    )
};


export default App
