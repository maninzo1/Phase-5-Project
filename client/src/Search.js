import React from 'react';

function Search({setSearch}) {
    return (
    <div className="searchbar">
        <h3>Keep Track Of Your Medications</h3>
       <label htmlFor="search">Search Medication</label> 
       <input
            type="text"
            id="search"
            placeholder="Type a medication"
            onChange={(e) => setSearch(e.target.value)}/>
    {/* <button className="searchbttn">Search</button> */}
    </div>
    );
}

export default Search;
