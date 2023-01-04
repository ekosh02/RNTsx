import React, { useEffect, useState } from "react";
import axios from 'axios'
import { IUser } from "../../types/userTypes";
import UserList from "./UserList";

const UserGet: React.FC = () => {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        getUsers()
    })

    const getUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log(response.data);
        setUsers(response.data)
    }

    return <UserList users={users} />
}

export default UserGet