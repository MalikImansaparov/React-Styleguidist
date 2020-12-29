import React from "react";
import {Container, Grid, Paper, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    mainFeaturesPost:{
        position: 'relative',
        color:theme.palette.common.black,
        marginBottom: theme.spacing(4),

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    mainFeaturesPostContent:{
        position:'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8)
    },
    overlay:{
        position:'absolute',
        top:0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundOverlay: 'rgba(0,0,0,.3)'
    }

}))
const Header = () => {
    const classes = useStyles();

  
    return(
        <Paper className={classes.mainFeaturesPost}
               style={{backgroundImage:`url(https://thumbs.dreamstime.com/z/female-programmer-writes-program-code-computer-laptop-bed-home-remote-work-high-quality-photo-186767165.jpg)`}}>
            <main>
                <Container fixed>
                    <div className={classes.overlay}/>
                    <Grid container>
                        <Grid item md={6}>
                            <div className={classes.mainFeaturesPostContent}>
                                <Typography
                                    component='h1'
                                    variant='h3'
                                    color='inherit'
                                    gutterBottom
                                >
                                    What Is React?
                                </Typography>
                                <Typography
                                    variant='h5'
                                    color='inherit'
                                    paragraph
                                >
                                    React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
                                    It lets you compose complex UIs from small and isolated pieces of code called “components”
                                </Typography>
                                <Button variant='contained' color='secondary' >
                                    {/*{<Route path='/external' component={() => {window.location ={apiStart}; return null;}}>Load more</Route>}*/}
                                     <a style={{ textDecoration: 'none',color:'white' }} href='https://reactjs.org/'>Load more</a>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </main>
</Paper>
    )
}
export default Header;