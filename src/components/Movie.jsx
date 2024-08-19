import PropTypes from "prop-types";

import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import noImage from '../assets/noImage.jpg'

const Movie = ({ movie }) => {
    return (
        <Grid item xs={12} sm={6} md={4} >
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
                <CardContent>
            <Typography variant="subtitle1">{movie.Year}</Typography>
            <Typography variant="h5">{movie.Title}</Typography>
            </CardContent>
            <CardMedia component="img" image={movie.Poster === 'N/A' ? noImage : movie.Poster} alt={movie.Title} />
            </Card>
        </Grid>
    );
};

Movie.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string,
        Poster: PropTypes.string,
        Year: PropTypes.string
    })
};

export default Movie;
