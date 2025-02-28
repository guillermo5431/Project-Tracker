import React, { use, useEffect, useState } from 'react';

function UserManagement() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        //Fetch users from API (Placeholder)
        console.log('Fetching users...');
    }, []);

  return (
    <div>
        <h1>UserManagement</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                {users.map((users) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone_number}</td>
                        <td>
                            <button>Edit</button>
                            <button>Deactivate</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        
    </div>
  )
}

export default UserManagement