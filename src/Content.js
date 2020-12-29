import React from "react";
import {Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import LayerIcon from "@material-ui/icons/Layers";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:1
    },
    cardGrid:{
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(3)
    }
}))
const card = [1,2,3,4,5,6,7,8,9]
export const apiStart = 'https://reactjs.org/docs/getting-started.html'
export const apiTutorial = 'https://reactjs.org/tutorial/tutorial.html'

const Content = () => {
    const classes = useStyles();

    return(
        <div className={classes.mainContent} >
            <Container maxWidth='md'>
                <Typography variant='h3' align='center' color='textPrimary'>
                    Before We Start the Tutorial
                </Typography>
                <Typography variant='h5' align='center' paragraph color='textSecodary'>
                    This tutorial is designed for people who prefer to learn by doing.
                    If you prefer learning concepts from the ground up, check out our step-by-step guide.
                    You might find this tutorial and the guide complementary to each other.
                </Typography>
                <div className='classes.mainButton'>
                    <Grid container spacing={5} justify='center'>
                        <Grid item>
                            <Button variant='contained' color='primary'>
                                <a style={{ textDecoration: 'none',color:'white'}} href={apiStart}>Start Now</a></Button>
                        </Grid> <Grid item>
                        <Button variant='outlined' color='primary'>
                            <a style={{ textDecoration: 'none' }} href={apiTutorial}>Load more</a></Button>
                    </Grid>
                    </Grid>
                </div>
            </Container>
            <Container className={classes.cardGrid} maxWidth='md'>
                <Grid container spacing={4}>
                    {card.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image='https://res.cloudinary.com/practicaldev/image/fetch/s--qa72YNaF--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/me6sbpz893h3a6ip5zsv.jpg'
                                    title='Image title'
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography variant='h5'gutterBottom>
                                        Tutorial: Intro to React
                                    </Typography>
                                    <Typography>
                                        This tutorial doesn’t assume any existing React knowledge.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        View
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Edit
                                    </Button>
                                </CardActions>
                                <LayerIcon/>
                                <PlayCircleFilledIcon/>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}
export default Content;