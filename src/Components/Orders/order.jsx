import React from 'react'

const order = ({orders}) => {
  return (
    <div class="order">
    <div class="order-header">
        <h2>Order #1234</h2>
        <p>Date: {orders.createdAt}</p>
    </div>
    <div class="order-details">
        <p>Product: Product Name</p>
        <p>Price: $20.00</p>
        <p>Quantity: 2</p>
        <p>Total: $40.00</p>
    </div>
</div>

  )
}

export default order
