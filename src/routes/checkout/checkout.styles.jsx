import styled from "styled-components";

export const CheckOutContainer = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;
export const CheckoutLeftPane = styled.div``;
export const CheckoutRightPane = styled.div``;
export const CheckoutAd = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const CheckoutItems = styled.div``;
export const CheckoutTitle = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

export const CheckoutSubTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 120px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;
`;
export const CheckoutSubtotalGift = styled.small`
  margin: 10px 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;
export const CheckoutButton = styled.button`
  margin: 10px 0 0 0;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 0;
  background-color: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
`;
