import React from 'react'

const Profile = ({match}) => {
    return (
        <div>
            User Name is {match.params.username}
        </div>
    )
}

export default Profile
