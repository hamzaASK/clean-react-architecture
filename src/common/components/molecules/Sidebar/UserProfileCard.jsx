"use client";
import React from "react";
import UserAvatar from "../../atoms/Image/UserAvatar";

export const UserProfileCard = React.memo(function ({ user, avatarClassName = "" }) {
    return (
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserAvatar
                src={user.avatar}
                className={`h-8 w-8 rounded-lg ${avatarClassName}`}
            />
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                <span className="text-muted-foreground truncate text-xs">
                    {user.email}
                </span>
            </div>
        </div>
    );
}) 