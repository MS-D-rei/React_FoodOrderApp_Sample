import styled from 'styled-components';

export const StyledCartItemsUL = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 40rem;
  overflow: auto;
`;

export const StyledCartTotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

export const StyledCartActionDiv = styled.div`
  text-align: right;
`;

const StyledCartActionButton = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;

  &:hover,
  &:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`;

export const StyledCartCloseButton = styled(StyledCartActionButton)`
  color: #8a2b06;
`;

export const StyledCartOrderButton = styled(StyledCartActionButton)`
  background-color: #8a2b06;
  color: white;
`;
