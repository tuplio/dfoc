import { MouseEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import classes from './header.module.css';
import logoWhite from '../../assets/dfoc-black-on-transparent.png';


interface HeaderProps {
    
}
 
const Header = () => {
    const [anchorElem, setAnchorElem] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const onLogoClick = () => navigate('/');

    const onMenuClick = (e: MouseEvent<HTMLButtonElement>) => {
        setAnchorElem(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorElem(null);
    };

    return (
        <div className={classes.header}>
            <div className={classes.logoContainer}>
                <Button onClick={onLogoClick} color='inherit'>
                    <img className={classes.logo} src={logoWhite}></img>
                </Button>
            </div>
            <div className={classes.menuContainer}>
                <Button color='inherit'
                    aria-controls={!!anchorElem ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={!!anchorElem ? 'true' : undefined}
                    onClick={onMenuClick}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    anchorEl={anchorElem}
                    open={!!anchorElem}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    );
}
 
export default Header;
export const HeaderShadow = () => <div className={classes.headerShadow} />;
