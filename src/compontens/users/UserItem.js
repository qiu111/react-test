// rce 有状态组件
import React, { Component } from 'react'

class UserItem extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         login: "mojombo",
    //         id: 1,
    //         avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //         html_url: "https://github.com/mojombo",
    //     }
    // }
    
    // state = {
    //     login: "mojombo",
    //     id: 1,
    //     avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    //     html_url: "https://github.com/mojombo",
    // }
    render() {
        // const {login,avatar_url,html_url}=this.state;
        
        console.log(this.props.user);
        const {login,avatar_url,html_url}=this.props.user;
       
        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    alt="" 
                    className="round-img"
                    style={{ width: '60px' }}
                />
                <h3>{login}</h3>
                <div>
                    <a
                        href={html_url}
                        className="btn btn-dark btn-sm my-1"
                    >more</a>
                </div>
            </div>
        )
    }
}

export default UserItem
