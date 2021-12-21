
import React from 'react'

import { Card, Row, Container } from 'react-bootstrap'

function Starships({data}) {
  return (
    <>
    {data.map((starships, i) => {
        return(
          <div class="col">
          <Container fluid="md">
          <Row className="justify-content-md-center">

          <Card style={{ width: '35rem' }} className="g-4">
            <Card.Img variant="top" src="https://media.comicbook.com/2018/02/star-wars-rebels-ghost-ship-1082019.jpeg" />
            <Card.Body>
              <Card.Title>Name: {starships.name}</Card.Title>
              <Card.Text>
                Model: {starships.model}
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


export default Starships

