import React from 'react';
import {Button, Col, FloatingLabel, Stack, Row, Form} from 'react-bootstrap'

function Search({setSearch}) {
    return (
        <FloatingLabel controlId="floatingInput" className="mb-3">
<Form>
    <Row className="align-items-center">
        <Col xs="auto"></Col>
        <Stack direction="horizontal" gap={2}>
            <Form.Control className="search"
            type="text"
            id="search" placeholder ="Search for medication" onChange={(e) => setSearch(e.target.value)}/>
            <Button variant="primary">Submit</Button>
         </Stack>
      </Row>
</Form>
 </FloatingLabel>
    
    );
}


export default Search;


