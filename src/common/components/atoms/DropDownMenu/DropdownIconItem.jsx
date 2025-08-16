import React from 'react'
import { DropdownMenuItem } from '../../ui/dropdown-menu';

const DropdownIconItem = React.memo(function ({ icon: Icon, children }) {
    return (
        <DropdownMenuItem>
            <Icon />
            {children}
        </DropdownMenuItem>
    );
})

export default DropdownIconItem