import styled from "styled-components";

export const InputComponent = styled.div`
    width: 100%;
    height: 130px;
    background-color: #808080;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 24px;
    font-family: 'Roboto Black';
    border-radius 20px 20px 0px 0px;
    
    input{
        border-radius 20px 20px 0px 0px;
        width: 100%;
        height: 130px;
        background: #808080;
        border: 0;

        text-align: right;
        font-size: 40px;
        text-transform: uppercase;
        font-weight: bold;
        padding: 0px 20px;
        font-family: Roboto;
        color: black;
    }
`