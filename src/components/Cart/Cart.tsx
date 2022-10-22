import {
  StyledCartActionDiv,
  StyledCartCloseButton,
  StyledCartItemsUL,
  StyledCartOrderButton,
  StyledCartTotalDiv,
} from '@/components/Cart/CartStyle';
import Modal from '@/components/UI/Modal/Modal';

function Cart() {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(
    (item) => <li>{item.name}</li>
  );

  return (
    <Modal>
      <StyledCartItemsUL>{cartItems}</StyledCartItemsUL>
      <StyledCartTotalDiv>
        <span>Total Amount</span>
        <span>35.62</span>
      </StyledCartTotalDiv>
      <StyledCartActionDiv>
        <StyledCartCloseButton>Close</StyledCartCloseButton>
        <StyledCartOrderButton>Order</StyledCartOrderButton>
      </StyledCartActionDiv>
    </Modal>
  );
}

export default Cart;
