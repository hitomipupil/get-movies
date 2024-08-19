import { useState } from "react";

import SearchContext from "./context/SearchContext";

import Header from "./components/Header";
import Search from "./components/Search";
import MovieContainer from "./components/MovieContainer";
import { CssBaseline } from "@mui/material";

function App() {
    const [searchText, setSearchText] = useState("train");
    return (
        <SearchContext.Provider
            value={{ searchText: searchText, setSearchText: setSearchText }}
        >
            <>
            <CssBaseline />
                <Header title="Movie Search" />
                <Search />
                
                <MovieContainer />
            </>
        </SearchContext.Provider>
    );
}

export default App;
