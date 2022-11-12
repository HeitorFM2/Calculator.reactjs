import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #363636;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ContentContainer = styled.div`
    width: 35%;
    min-height: 90%;
    border-radius: 20px;
    background: linear-gradient(80deg, #696969 40%, #4F4F4F 60%);


    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 3px 3px black;


`

export const Content = styled.div`
    width: 85.6%;
    border-radius: 20px;
    background: linear-gradient(40deg, #696969 30%, #4F4F4F 70%);
    box-shadow: 4px 3px 3px black;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`