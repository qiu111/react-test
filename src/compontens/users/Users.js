import React from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import propTypes from 'prop-types'  //进行类型检查

const Users =({users,loading})=> {
    if(loading){
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
                {users.map(user=>(
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
        
}

const userStyle={
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem"
}

users.propTypes = {
    users:PropTypes.array.isRequired,  //ptar
    loading: PropTypes.bool.isRequired,  //ptbr
}

export default Users


