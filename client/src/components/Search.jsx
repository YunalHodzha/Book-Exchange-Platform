import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // const handleInputChange = (event) => {
    //     setSearchTerm(event.target.value);
    //     onSearch(event.target.value);
    // };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                    // value={searchTerm}
                    // onChange={handleInputChange}
            />
        </div>
    );
};

export default Search;
