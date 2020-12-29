import React from "react";
// import {makeStyles} from "@material-ui/core/styles"
import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
//
// const useStyles = makeStyles((theme) => ({
//     root:{
//         flexGrow: 1
//     },
//     menuButton:{
//         marginRight: theme.spacing(1)
//     },
//     title:{
//         flexGrow: 1
//     },
//     mainFeaturesPost:{
//         position: 'relative',
//         color:theme.palette.common.white,
//         marginBottom: theme.spacing(4),
//
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         backgroundPosition: 'center'
//     },
//     mainFeaturesPostContent:{
//         position:'relative',
//         padding: theme.spacing(6),
//         marginTop: theme.spacing(8)
//     },
//     overlay:{
//         position:'absolute',
//         top:0,
//         right: 0,
//         bottom: 0,
//         left: 0,
//         backgroundOverlay: 'rgba(0,0,0,.3)'
//     },
//     cardMedia:{
//         paddingTop:'56.25%'
//     },
//     cardContent:{
//         flexGrow:1
//     },
//     cardGrid:{
//         paddingTop: theme.spacing(4),
//         paddingBottom: theme.spacing(3)
//     }
// }))
//
function App() {
//     const classes = useStyles();
//     const [value,setValue] = React.useState('resents')
//
//     const handleChange = (event, newValue) => {
//         setValue(newValue)
//     }
//     const [open,setOpen] = React.useState(false)
//
//     const handleClickSignIn = () => {
//         setOpen(true)
//     }
//     const handleClose = () => {
//         setOpen(false)
//     }
//
//     const [registr,setRegistr ] = React.useState(false)
//     const handleClickSignUp = () => {
//         setRegistr(true)
//     }
//     const handleClosed = () => {
//         setRegistr(false)
//     }
  return (
      <>
          <Navbar/>
          <Header/>
          <Content/>
          <Footer/>
     </>
  );
}

export default App;
