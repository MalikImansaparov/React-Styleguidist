import React from "react";
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import {makeStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import HomeIcon from '@material-ui/icons/Home';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CodeIcon from '@material-ui/icons/Code';
import CommentIcon from '@material-ui/icons/Comment';
import SchoolIcon from '@material-ui/icons/School';
import {apiStart, apiTutorial} from "./Content";
import {Link} from "react-router-dom";

const drawerWidth = 340;
const useStyles = makeStyles((theme) => ({
    menuButton:{
        marginRight: theme.spacing(1)
    },
    title:{
        flexGrow: 1
    },
    drawer:{
                width: drawerWidth
        }
}))
const apiCommunity = 'https://reactjs.org/community/support.html'
const apiBlog = 'https://reactjs.org/blog/2020/10/20/react-v17.html'
const Navbar = () => {
        const classes = useStyles();
        const [open,setOpen] = React.useState(false)
        const [slip,setSlip] = React.useState(false)
        const handleDrawer = () => {
            setSlip(true)
        }
        const handleClickSignIn = () => {
        setOpen(true)
    }
        const handleClose = () => {
        setOpen(false)
    }

        const [registr,setRegistr ] = React.useState(false)
        const handleClickSignUp = () => {
        setRegistr(true)
    }
        const handleClosed = () => {
        setRegistr(false)
    }
        return(
            <>
        <AppBar position='fixed'>
            <Container fixed>
                <Toolbar>
                    <IconButton onClick={handleDrawer} edge='start' className={classes.menuButton}
                                aria-label='menu' color='inherit'>
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>React blog</Typography>
                    <Box mr={3}>
                        <Button color='inherit' variant='outlined' onClick={handleClickSignIn}>Log in</Button>
                        <Dialog open={open} onClose={handleClose} aria-labeledby='form-dialog-title'>
                            <DialogTitle id='form-dialog-title'>Log in</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Please, input your email and password</DialogContentText>
                                <TextField
                                    autoFocus
                                    id='name'
                                    margin='dense'
                                    label='Email address'
                                    type='email'
                                    fullWidth
                                />
                                <TextField
                                    id='pass'
                                    margin='dense'
                                    label='Password'
                                    type='password'
                                    fullWidth
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color='primary'>Close</Button>
                                <Button onClick={handleClose} color='primary'>Log in</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <Box mr={3}>
                        <Button color='secondary' variant='contained' onClick={handleClickSignUp}>Sing up</Button>
                        <Dialog open={registr} onClose={handleClosed} aria-labeledby='form-dialog-title'>
                            <DialogTitle id='form-dialog-title'>Registration</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Please, create new account</DialogContentText>
                                <TextField
                                    autoFocus
                                    id='userName'
                                    margin='dense'
                                    label='Username'
                                    type='text'
                                    fullWidth
                                />
                                <TextField
                                    id='name'
                                    margin='dense'
                                    label='Email address'
                                    type='email'
                                    fullWidth
                                />
                                <TextField
                                    id='pass'
                                    margin='dense'
                                    label='Password'
                                    type='password'
                                    fullWidth
                                />

                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClosed} color='primary'>Close</Button>
                                <Button onClick={handleClosed} color='primary'>Sign up</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                    <IconButton color='inherit' aria-label='account' open={() => setOpen(false)} onClick={handleClickSignIn}>
                        <AccountCircle/>
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
                <Drawer
                    achor='left'
                    open={slip}
                    className={classes.drawer}
                    onClose={ () => setSlip(false)}
                   >
                    <h2>&nbsp;<HomeIcon/> &nbsp;<a href='https://reactjs.org/' style={{ textDecoration: 'none',color:'black'}}>Official page</a> &nbsp;</h2>
                    <h2>&nbsp;<MenuBookIcon/> &nbsp;<a style={{ textDecoration: 'none',color:'black'}} href={apiStart}>Documentation</a> &nbsp;</h2>
                    <h2>&nbsp;<CodeIcon/> &nbsp; <a href={apiTutorial} style={{ textDecoration: 'none',color:'black'}}>Tutorial</a> &nbsp;</h2>
                    <h2>&nbsp;<SchoolIcon/> &nbsp;<a href={apiBlog} style={{ textDecoration: 'none',color:'black'}}> Blog </a>&nbsp;</h2>
                    <h2>&nbsp;<CommentIcon/> &nbsp;<a href={apiCommunity} style={{ textDecoration: 'none',color:'black'}}>Community</a> &nbsp;</h2>
                </Drawer>
    </>
    )
}
export default Navbar;