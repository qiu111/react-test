import React, { Component } from 'react'
import UserItem from './UserItem'

class Users extends Component {
    state={
        users: [
            {
                login: "mojombo1",
                id: 1,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "mojombo2",
                id: 2,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            },
            {
                login: "mojombo3",
                id: 3,
                avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
                html_url: "https://github.com/mojombo",
            }
        ]
    }
    render() {
        return (
            <div>
                {this.state.users.map(user=>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users
