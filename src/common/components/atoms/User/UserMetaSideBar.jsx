import React from 'react'

function UserMetaSideBar({user}) {
    return (
        <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">{user?.name}</span>
            <span className="text-muted-foreground truncate text-xs">
                {user?.email}
            </span>
        </div>
    )
}

export default UserMetaSideBar