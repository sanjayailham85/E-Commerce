import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/shopping-cart/cartSlice';
import { toast, ToastContainer } from 'react-toastify';

import '../../../styles/product-card.css';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = (props) => {
  const { id, title, image01, price, desc } = props.item;
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };

  //notification
  const notify = () => {
    toast.success('Item added to cart', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  const callDouble = () => {
    addToCart();
    notify();
  };

  return (
    <div className="product__item ">
      <div className="product__img">
        <Link to={`/devices/${id}`}>
          <img src={image01} alt="product-img" className="w-100" />
        </Link>
      </div>

      <div className="product__content">
        <h5>
          <Link to={`/devices/${id}`}>{title}</Link>
        </h5>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <span className="product__price">Rp.{price}</span>
        </div>

        <div>
          <button className="AddToCart__btn" onClick={callDouble}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
