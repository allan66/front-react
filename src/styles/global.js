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
    background-color: #f2f2f2;
}
`;

export const InputArea = styled.div`
    display:flex;
    flex-direction:column;
`;

export const Input = styled.input`
    width: 300px;
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

export const BackButton = styled.button`
    padding:10px;
    cursor:pointer;
    border-radius: 5px;
    margin:10px;
    border: none;
    background-color: #ccc;
    color:black;
    height: 42px;
`;

export const ButtonEdit = styled.button`
    padding:5px;
    cursor:pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color:white;
    height: 42px;
`;

export const ButtonDelete = styled.button`
    padding:5px;
    cursor:pointer;
    border-radius: 5px;
    border: none;
    background-color: red;
    color:white;
    height: 42px;
    margin:10px;
`;

export const Container = styled.div`
    width: 100%;
    margin-top:20px;
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:10px;
    
`;

export const FormGroup = styled.div`
    width: 100%;
    border-radius:5px;
    margin:5px;
    align-items:center;
    justify-content: center;
`;    
  
export const Label = styled.label`
  text-transform: capitalize;
`;

export const Title = styled.h2``;

