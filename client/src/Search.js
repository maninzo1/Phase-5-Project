import React from 'react';
import {Button, Col,Container, Stack, Row, Form} from 'react-bootstrap'

function Search({setSearch}) {
    return (
 <Container>
  {/* <FloatingLabel controlId="floatingInput" className="mb-3"> */}
<Form >
    <Row className="justify-content-md-center">
        <Col xs={6}>
        <Stack direction="horizontal" gap={2}>
            <Form.Control className="search"
            type="text"
            id="search" placeholder ="Search for medication" onChange={(e) => setSearch(e.target.value)}/>
            <Button variant="primary">Submit</Button>
         </Stack>
         </Col>
      </Row>
</Form>
  {/* </FloatingLabel> */}
 </Container>
    );
}


export default Search;


