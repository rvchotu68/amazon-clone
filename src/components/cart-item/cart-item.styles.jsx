import styled from "styled-components";

export const CartItemContainer = styled.div`
  display: flex;
  padding: 10px;
  gap: 50px;
  /* border-bottom: 1px solid lightgray; */
`;
export const CartImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`;
export const CartItemInfo = styled.div`
  padding: 15px;
  font-size: 12px;
`;
export const CartItemRemoveButton = styled.button`
  font-size: 10px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: #f0c14b;
  border: 1px solid;
  font-weight: bold;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  cursor: pointer;
`;
export const CartItemTitle = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const CartItemRating = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const CartQtyChange = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  button {
    border: none;
    cursor: pointer;
    height: 20px;
    width: 20px;
  }
  p {
    font-size: 14px;
    font-weight: 500;
  }
`;
