import React from 'react';
import {Typography} from "@material-ui/core";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Folder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import FolderIcon from "@material-ui/icons/Folder";


const Footer = () => {
    const [value,setValue] = React.useState('resents')
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return(
        <footer>
            <Typography variant='h6' align='center' gutterBottom>Facebook Open Source</Typography>
            <BottomNavigation
                value={value}
                onChange={handleChange}
                className='classes.root'>
                <BottomNavigationAction
                    label='Resents'
                    value='resents'
                    icon={<RestoreIcon/>}
                />
                <BottomNavigationAction
                    label='Favorites'
                    value='favorites'
                    icon={<FavoriteIcon/>}
                />
                <BottomNavigationAction
                    label='Resources'
                    value='nearby'
                    icon={<LocationOnIcon/>}
                />
                <BottomNavigationAction
                    label='Terms'
                    value='folder'
                    icon={<FolderIcon/>}
                />
            </BottomNavigation>
            <Typography variant='subtitle1' color='textSecondary' component='p' align='center'>
                Copyright © 2020 Facebook Inc.
            </Typography>
        </footer>

    )
}
export default Footer;