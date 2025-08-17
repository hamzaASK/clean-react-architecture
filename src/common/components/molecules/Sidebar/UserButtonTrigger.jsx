"use client";
import { IconDotsVertical } from "@tabler/icons-react";
import UserAvatar from "../../atoms/Image/UserAvatar";

// UserButtonTrigger.js
export function UserButtonTrigger({ 
  avatar,
  name,
  email,
  icon: Icon = IconDotsVertical
}) {
  return (
    <div className="flex items-center w-full">
      <UserAvatar src={avatar} />
      <div className="flex-1 ml-2">
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{email}</div>
      </div>
      <Icon className="ml-auto size-4" />
    </div>
  );
}

