
import './App.css'
import {useState} from "react";
import {User} from "./types.s.ts";

const App = () => {
    const [users, setUsers] = useState<User[]>([]);


    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <h3>Создание пользователя</h3>
                    <UserForm />
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
