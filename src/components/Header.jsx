import PropTypes from "prop-types";

import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Box } from '@mui/material'
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

const Header = ({ title }) => {
    return (
        <>
        <AppBar position="relative" color="inherit">
            <Toolbar>
                <LocalMoviesIcon style={{ marginRight: '10px'}}/>
                <Typography variant="h5">{title}</Typography>
            </Toolbar>
        </AppBar >
        </>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired
};

export default Header;
