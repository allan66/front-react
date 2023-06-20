import styled, {createGlobalStyle} from "styled-components";
;

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    paddding:0;
    font-family: 'poppins', sans-serif;
  }
  
body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-coloer: #f2f2f2;
}
`;

export const FormContainer = styled.form`
    display:flex;
    align-items: flex-end;
    gap:10px;
    flex-wrap:wrap;
    background-color:#fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Input = styled.input`
    width: 120px;
    padding:0 10px;
    border: 1px solid $bbb;
    border-radius:5px;
    height: 40px;
`;

export const Button = styled.button`
    padding:10px;
    cursor:pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color:white;
    height: 42px;
`;

export const Label = styled.label``;

export const LoginContainer = styled.div`
    width: 100%;
    max-width:800px;
    margin-top:20px;
    display:flex;
    flex-direction: column;
    alaign-items:centar;
    gap:10px;
    
`;

export const FormGroup = styled.div``;

export const Title = styled.h2``;

