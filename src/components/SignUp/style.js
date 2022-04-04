import styled from "styled-components";

export const $SignUp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

form{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin: 32px 0 25px 0;
}

img{
    width: 180px;
    margin-top: 68px;
}

h1{
    font-family: 'Playball';
    font-weight: 400;
    font-size: 69px;
    text-align: center;
    color: #126BA5;
}

input{
    height: 45px;
    width: 303px;
    padding-left: 11px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;

    ::placeholder{
        color: #DBDBDB;
    }
}

button{
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 21px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}

span{
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}
`