import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar'

const AvatarItem = React.memo(function ({ src, alt, fallback = "CN" }) {
    return (
        <Avatar>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
        </Avatar>
    );
});
export default AvatarItem