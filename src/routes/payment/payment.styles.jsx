import styled from "styled-components";
import { Link } from "react-router-dom";

export const PaymentContainer = styled.div`
  background-color: white;
  h1 {
    text-align: center;
    padding: 10px;
    font-weight: 500;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
  }
`;
export const PaymentSection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;

const PaymentBase = styled.div`
  flex: 0.8;
`;

export const PaymentUserAddress = styled(PaymentBase)``;
export const PaymentTitle = styled.div`
  flex: 0.2;
`;
export const PaymentItems = styled(PaymentBase)``;
export const PaymentMethod = styled.div``;
