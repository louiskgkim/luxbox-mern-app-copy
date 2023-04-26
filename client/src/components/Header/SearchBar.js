import { Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = (props) => {
    const openSearchBar = () => {
        document.getElementById("hidden-search-bar").style.height = "8.7rem";
    };

    const closeSearchBar = () => {
        document.getElementById("hidden-search-bar").style.height = "0";
    };

    return (
        <div className="search-bar-wrapper">
            <div className="hidden-search-bar" id="hidden-search-bar">
                <div className="hidden-search-bar-row">
                    <h1>LuxBox</h1>
                    <Link
                        to={undefined}
                        className="search-bar-close-btn link"
                        onClick={closeSearchBar}
                    >&times;</Link>
                </div>
                <div className="hidden-search-bar-row">
                    <TextField
                        className="hidden-search-bar-input"
                        id="input-with-icon-textfield"
                        placeholder="Search"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon
                                        sx={{
                                            color: "white",
                                        }}
                                    />
                                </InputAdornment>
                            ),
                            autoFocus:true
                        }}
                        variant="standard"
                        focused
                        sx={{
                            input: {
                                color: "white",
                                borderBottom: "1px solid white",
                            },
                            "& .MuiInput-underline:after": {
                                borderBottom: "1px solid white",
                            },
                        }}
                    />
                </div>
            </div>
            <div className="visible-search-bar">
                <TextField
                    className="visible-search-bar-input"
                    id="input-with-icon-textfield"
                    placeholder="Search"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    focused
                    sx={{
                        input: {
                            fontSize: "0.8rem",
                            color: "white",
                            borderBottom: "1px solid white",
                        },
                        "& .MuiInput-underline:after": {
                            borderBottom: "1px solid white",
                        },
                    }}
                    onClick={openSearchBar}
                />
            </div>
        </div >
    );
};

export default SearchBar;