import { MouseEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { HOME_PATH, SUPPORT_PATH } from '../../Router';

import classes from './header.module.css';
import logoWhite from '../../assets/dfoc-black-on-transparent.png';

 
const Header = () => {
    const [anchorElem, setAnchorElem] = useState<null | HTMLElement>(null);

    const navigate = useNavigate();

    const onLogoClick = () => navigate(HOME_PATH);

    const onMenuClick = (e: MouseEvent<HTMLButtonElement>) => {
        setAnchorElem(e.currentTarget);
    };

    const handleClose = () => setAnchorElem(null);

    const onMenuItemClick = (page: string) => {
        handleClose();
        navigate(page);
    };

    return (
        <div className={classes.header}>
            <div className={classes.logoContainer}>
                <Button onClick={onLogoClick} color='secondary'>
                    <img className={classes.logo} src={logoWhite}></img>
                </Button>
            </div>
            <div className={classes.menuContainer}>
                <Button color='secondary'
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
                    <MenuItem onClick={ () => onMenuItemClick(SUPPORT_PATH) }>Support</MenuItem>
                </Menu>
            </div>
        </div>
    );
}
 
export default Header;
export const HeaderShadow = () => <div className={classes.headerShadow} />;
