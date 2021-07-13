import React, { useState } from 'react';
import { Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Menu = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const handleDrawerOpen = () =>
        setIsOpen(true);

    const handleDrawerClose = () =>
        setIsOpen(false);


    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
            >
                <MenuIcon />
            </IconButton>
        </div>
    )
}

export default Menu;
