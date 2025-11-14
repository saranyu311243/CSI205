import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Carts.css'

const Carts = ({ carts, setCarts }) => {
  return (
    <div className='carts-container'>
      <div className='carts-items '>
        {carts.map((cart) => {
          return (
            <Card style={{ width: '18rem' }} key={cart.id}>
              <Card.Img variant="top" src={cart.thumbnailUrl} />
              <Card.Body>
                <Card.Title>{cart.title}</Card.Title>
                <Card.Text><b>${cart.price.toFixed(2)}</b></Card.Text>

                <Button variant="outline-danger" onClick={() => {
                  setCarts(carts.filter((c) =>
                    c.id !== cart.id
                  ))
                }}>Remove from Cart</Button>
              </Card.Body>
            </Card>
          )
        })}
      </div>

      <div className='d-flex justify-content-center align-items-center gap-3 mt-4 mb-4'>
        <span className='badge bg-danger fs-5 p-3'>Items: {carts.length}</span>
        <span className='badge bg-success fs-5 p-3'>Total price: ${carts.reduce((prev, cart) => prev + cart.price, 0).toFixed(2)}</span>
      </div>

      <Button variant="warning" size="lg" className='d-flex mx-auto'>Checkout</Button>
    </div>
  )
}

export default Carts
