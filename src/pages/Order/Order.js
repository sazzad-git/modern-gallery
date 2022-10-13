import React from 'react';
import { useParams } from 'react-router-dom';

const Order = () => {
    const {orderId} = useParams();
  return (
    <div className="text-center mt-5">
      <h2>This is booking: {orderId}</h2>
    </div>
  );
};

export default Order;