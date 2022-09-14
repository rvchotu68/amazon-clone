import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
`;
export const SearchInput = styled.input`
  height: 22px;
  padding: 10px;
  border: none;
  width: 100%;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  &:focus-visible {
    outline: none;
  }
`;
export const SearchImg = styled(SearchIcon)`
  padding: 5px;
  height: 22px !important;
  background-color: #cd9042;
  /* border-radius: 24px; */
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
`;
