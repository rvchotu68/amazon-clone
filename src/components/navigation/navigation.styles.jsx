import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const NavOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
`;
export const SpanOne = styled.span`
  font-size: 10px;
`;
export const SpanTwo = styled.span`
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
`;

export const NavLoginBtn = styled(Link)``;
