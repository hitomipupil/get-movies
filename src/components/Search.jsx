import { useState, useContext } from "react";
import { Container, TextField, Button, Grid } from "@mui/material";

import SearchContext from "../context/SearchContext";

const Search = () => {
    const [value, setValue] = useState("");

    const { setSearchText } = useContext(SearchContext);

    const submitHandler = (e) => {
        e.preventDefault();
        if (value.trim() === "") {
            return;
        }
        setSearchText(value);
        setValue("");
    };

    return (
        <Container maxWidth="sm" style={{ marginTop: '50px'}}>
        <form onSubmit={(e) => submitHandler(e)}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item>
            <TextField
                placeholder="Type movie title..."
                variant="standard"
                type="string"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            </Grid>
            <Grid item>
            <Button
                variant="contained"
                type="submit"
                >
                    Search
                    </Button>
                    </Grid>
                    </Grid>
        </form>
        </Container>
    );
};

export default Search;
