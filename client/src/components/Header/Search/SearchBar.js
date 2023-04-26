import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/SearchOutlined';

const SearchBar = (props) => {
    const [searchInput, setSearchInput] = useState("");

    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        setSearchInput(e.target.value);
    }

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/shop/search/${searchInput}`);
    }

    return (
        <div className="search-bar-wrapper">
            <div className="search-bar">
                <form
                    className="search-form"
                    onSubmit={handleSearchSubmit}
                >
                    <TextField
                        className="search-bar-input"
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
                        onChange={handleSearchChange}
                    />
                </form>
            </div >
        </div >
    );
};

export default SearchBar;