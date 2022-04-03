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

button{
    display: flex;
    justify-content: center;
    align-items: center;
}

span{
    font-size: 14px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}
`