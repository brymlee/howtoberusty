import React, { Component } from "react";
import ReactDOM from "react-dom";
//import Input from "../presentational/Input.jsx";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import cyan from '@material-ui/core/colors/cyan';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

class HowToBeRustyContainer extends Component{
    useStyles(){
        return makeStyles(theme => ({
            root: {
                flexGrow: 1
            },
            menuButton: {
                marginRight: theme.spacing(2)
            },
            title: {
                flexGrow: 1

            }
        }));
    }

    constructor(){
        super();
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.id]: event.target.value });
    }

    render(){
        const { seo_title } = this.state;
        const theme = createMuiTheme({
            palette: {
                primary: { main: red[500] },
                secondary: { main: cyan[500] }
            }
        }, "a theme");
        const classes = this.useStyles();
        return (
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}> 
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h4" className={classes.title}>
                            How to be Rusty?
                        </Typography>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        );
    }
}
export default HowToBeRustyContainer;
const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<HowToBeRustyContainer />, wrapper) : false;
