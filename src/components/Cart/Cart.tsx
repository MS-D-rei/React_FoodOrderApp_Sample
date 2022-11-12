import React, { useEffect, useState } from 'react';
import Modal from '@/components/UI/Modal/Modal';
import {
  StyledCartActionDiv,
  StyledCartCloseButton,
  StyledCartItemsUL,
  StyledCartOrderButton,
  StyledCartTotalDiv,
} from '@/components/Cart/CartStyle';
import { useCartContext } from '@/store/cart-context';
import CartItem from '@/components/Cart/CartItem';
import { CartItemType } from '@/store/cart-type';
import Checkout from '@/components/Cart/Checkout';
import { UserAddress } from '@/components/Cart/types';
import { useFirebaseFoodList } from '@/hooks/use-firebase-foodlist';

interface CartProps {
  onHideCart: React.MouseEventHandler;
}

const firebaseGetRequest = {
  url: 'https://react-httprequest-sample-default-rtdb.asia-southeast1.firebasedatabase.app/foodlist-orders.json',
};

function Cart({ onHideCart }: CartProps) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useCartContext();
  const totalPrice = `$${cartCtx.totalPrice.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;
  const { sendPostRequest } = useFirebaseFoodList(firebaseGetRequest);

  const increaseCartItemHandler = (item: CartItemType) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const decreaseCartItemHandler = (id: string) => {
    cartCtx.removeItem(id);
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const confirmHandler = (userInfo: UserAddress) => {
    setIsSubmitting(true);
    sendPostRequest(userInfo, cartCtx.items);
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearItems();
  };

  /* bind ( Partial function ) */
  /* https://javascript.info/bind#partial-functions */
  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      id={item.id}
      name={item.name}
      amount={item.amount}
      price={item.price}
      onAdd={increaseCartItemHandler.bind(null, item)}
      onRemove={decreaseCartItemHandler.bind(null, item.id)}
    />
  ));

  const modalActions = (
    <StyledCartActionDiv>
      <StyledCartCloseButton onClick={onHideCart}>Close</StyledCartCloseButton>
      {hasItems && (
        <StyledCartOrderButton onClick={orderHandler}>
          Order
        </StyledCartOrderButton>
      )}
    </StyledCartActionDiv>
  );

  // When submitting
  const isSubmittingModalContent = <p>Sending order data...</p>;
  if (isSubmitting) {
    return <Modal onHideCart={onHideCart}>{isSubmittingModalContent}</Modal>;
  }

  // When submitting is done
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order</p>
      <StyledCartActionDiv>
        <StyledCartCloseButton onClick={onHideCart}>
          Close
        </StyledCartCloseButton>
      </StyledCartActionDiv>
    </>
  );
  if (didSubmit) {
    return <Modal onHideCart={onHideCart}>{didSubmitModalContent}</Modal>;
  }

  return (
    <Modal onHideCart={onHideCart}>
      <StyledCartItemsUL>{cartItems}</StyledCartItemsUL>
      <StyledCartTotalDiv>
        <span>Total Price</span>
        <span>{totalPrice}</span>
      </StyledCartTotalDiv>
      {isCheckout && (
        <Checkout onConfirm={confirmHandler} onCancel={onHideCart} />
      )}
      {!isCheckout && modalActions}
    </Modal>
  );
}

export default Cart;
