
import React from 'react'

import { Card, Row, Container } from 'react-bootstrap'

function Planets({data}) {
  return (
    <>
    {data.map((planets, i) => {
        return(
          <div class="col">
          <Container fluid="md">
          <Row className="justify-content-md-center">

          <Card style={{ width: '35rem' }} className="g-4">
            <Card.Img variant="top" src="https://starwarsblog.starwars.com/wp-content/uploads/2018/10/mustafar-tall.jpg" />
            <Card.Body>
              <Card.Title>Name: {planets.name}</Card.Title>
              <Card.Text>
                Population: {planets.Population}
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


export default Planets

