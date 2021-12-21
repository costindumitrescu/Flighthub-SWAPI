import React from 'react'
import { Card, Row, Container } from 'react-bootstrap'

function People({data}) {
  return (
    <>
    {data.map((people, i) => {
        return(
          <div class="col">
          <Container fluid="md">
          <Row className="justify-content-md-center">

          <Card style={{ width: '35rem' }} className="g-4">
            <Card.Img variant="top" src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_logotype.png" />
            <Card.Body>
              <Card.Title>Name: {people.name}</Card.Title>
              <Card.Text>
                Height: {people.height}
              </Card.Text>
            </Card.Body>
          </Card>

          </Row>
          </Container>
          </div>
        )
      })}



    </>
  )
}




export default People
