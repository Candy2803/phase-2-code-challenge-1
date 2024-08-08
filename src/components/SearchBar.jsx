import React from 'react';

const SearchBar = ({ searchQuery, onSearch }) => {
    const handleSearch = (e) => {
        const query = e.target.value.toLowerCase();
        onSearch(query);
    };

    return (
        <input
            type="text"
            placeholder="Search"
            className="min-w-96 rounded-3xl bg-slate-300"
            value={searchQuery}
            onChange={handleSearch}
        />
    );
};

export default SearchBar;
