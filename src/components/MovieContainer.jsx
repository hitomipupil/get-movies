import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import getMovies from "../apis/getMovies";

import SearchContext from "../context/SearchContext";

import Loading from "./Loading";
import Movie from "./Movie";
import { Container, Grid } from "@mui/material";

const MovieContainer = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { searchText} = useContext(SearchContext)

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies(searchText);
                setMovies(data.Search);
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();
    }, [searchText]);
    return (
        <div>
            {loading && <Loading />}
            {error && <p>{error}</p>}
            <Container style={{ padding: '30px 0'}}>
                <Grid container spacing={4}  justifyContent="center">
            {movies.length > 0 &&
                movies.map((movie) => (
                    <Movie key={movie.imdbID} movie={movie} />
                ))}
                </Grid>
                </Container>
        </div>
    );
};

MovieContainer.propTypes = {};

export default MovieContainer;
