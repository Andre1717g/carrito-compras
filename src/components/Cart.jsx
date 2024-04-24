import "./Cart.css";
import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

 function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    // function CartItem() {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small> Qty: {quantity} </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
//     <li>
//     <img src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg" alt="iPhone" />
//     <div>
//         <strong>iPhone 9</strong> - $9999.99
//     </div>

//     <footer>
//         <small>Qty: 1</small>
//         <button>+</button>
//     </footer>
// </li>

  );
}

export function Cart() {
  const cartCheckboxId = useId();

  const { cart, clearCart, addToCart } = useCart();

  const totalProductos = cart.reduce((total, product) => total + product.quantity, 0);

  const totalPagar = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />

      <aside className="cart">
        <ul style={{ maxHeight: '440px', overflow: 'auto' }} >
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
        <p>Productos: {totalProductos}</p>
        <p>Total pagar: ${totalPagar}</p>
        <button style={{ background: "#E36414" }} onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
