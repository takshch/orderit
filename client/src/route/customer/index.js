import React, { useState } from "react";
import Product from "../../components/Product";

const data = {
  name: 'Malai chaap',
  description: '',
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-fff2lftqIE077pFAKU1Mhbcj8YFvBbMvpA&usqp=CAU',
};

function RouteCustomerIndex() {

  let [quantity, setQuantity] = useState(0);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity - 1);

  return <div>
    <Product
      name={data.name}
      src={data.src}
      quantity={quantity}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
    />
  </div>;
};

export default RouteCustomerIndex;
