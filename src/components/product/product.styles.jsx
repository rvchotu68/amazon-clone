import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;
`;
export const ProductInfo = styled.div`
  height: 100px;
  margin-bottom: 15px;
  align-self: flex-start;
`;
export const ProductPrice = styled.p`
  margin-top: 5px;
`;
export const ProductRating = styled.div`
  display: flex;
`;
export const ProductImg = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const ProductBtn = styled.button`
  background-color: #f0c14b;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  cursor: pointer;
`;
