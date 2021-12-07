import React from 'react';
import {Button, Stack, Row, Form} from 'react-bootstrap'

function Search({setSearch}) {
    return (
        <Row>
    <Form.Label column lg={2}>
      
    </Form.Label>
        <Stack direction="horizontal" gap={2}>
            <Form.Control className="search"
            type="text"
            id="search" placeholder ="Search for medication" onChange={(e) => setSearch(e.target.value)}/>
            <Button variant="primary">Submit</Button>
    {/* <div className="searchbar">
        <h3>Keep Track Of Your Medications</h3>
       <label htmlFor="search">Search Medication</label>  */}
       {/* <input
            type="text"
            id="search"
            placeholder="Type a medication"
            onChange={(e) => setSearch(e.target.value)}/> */}
    {/* <button className="searchbttn">Search</button> */}
    
    </Stack>
    </Row>
  
    );
}

export default Search;
