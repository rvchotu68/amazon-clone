import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LoginImg = styled.img`
  width: 100px;
  object-fit: contain;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const LoginDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
  p {
    margin-bottom: 15px;
    font-size: 12px;
  }
`;

export const LoginTitle = styled.h1`
  margin-bottom: 20px;
  font-weight: 800;
`;

export const LoginForm = styled.form`
  margin-bottom: 15px;
  label {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 500;
    input {
      height: 30px;
      margin-bottom: 10px;
      background-color: white;
      /* width: 90%; */
    }
  }
`;

export const LoginBtn = styled.button`
  background-color: #f0c14b;
  border-radius: 2px;
  width: 100%;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
`;

export const LoginCreateAccountBtn = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  border-color: darkgray;
  cursor: pointer;
`;
