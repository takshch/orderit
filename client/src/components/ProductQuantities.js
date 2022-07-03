import './ProductQuantities.scss';

function ProductCard({ name, image, price, quantity, total }) {
  return (
    <div className="product-card">
      <div className="image-and-name">
        <div className="image-wrapper">
          <img src={image} alt={name} className="image" />
        </div>
        <div className="name">{name}</div>
      </div>
      <div className="price-and-quantity">
        <div className="price">{'Rs.'}{price}</div>
        <div className="quantity">
          <span className="symbol">x</span>
          {quantity}
        </div>
      </div>
      <div className="total">
        Rs.{total}
      </div>
    </div>
  );
}

function ProductQuantities({ products }) {
  return (
    <div className="product-quantities">
      {
        products.map(({ name, src, price, quantity, total }, index) =>
          <ProductCard
            key={index}
            name={name}
            price={price}
            image={src}
            quantity={quantity}
            total={total}
          />
        )
      }
    </div>
  );
}

export default ProductQuantities;
