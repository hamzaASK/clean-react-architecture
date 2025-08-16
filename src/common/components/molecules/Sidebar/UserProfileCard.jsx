"use client";
import { UserAvatar } from "@/common/components/atoms/Image/UserAvatar";
import { UserInfo } from "@/common/components/molecules/Sidebar/UserInfo";

export const UserProfileCard = React.memo(function ({ user, avatarClassName = "" }) {
    return (
        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
            <UserAvatar
                src={user.avatar}
                className={`h-8 w-8 rounded-lg ${avatarClassName}`}
            />
            <UserInfo name={user.name} email={user.email} />
        </div>
    );
}) 