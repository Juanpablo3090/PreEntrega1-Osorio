
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const CartWidget = () => {
  const itemCount = 3; 

  return (
    <div className="cart-widget position-relative">
      <FaShoppingCart size={24} className="text-primary" />
      <span className="badge bg-danger position-absolute top-0 start-100 translate-middle p-2 rounded-pill">
        {itemCount}
      </span>
    </div>
  );
};

export default CartWidget;
