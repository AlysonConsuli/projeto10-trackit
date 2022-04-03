import styled from "styled-components";

export const $Footer = styled.footer`
position: fixed;
bottom: 0;
left: 0;
z-index: 2;
width: 100%;
height: 70px;
background-color: #FFFFFF;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 31px 0 36px;

div{
    width: 91px;
    height: 91px;
    position: absolute;
    bottom: 10px;
    left: calc(50% - 45.5px);
}

span{
    font-size: 18px;
    text-align: center;
    color: #52B6FF;
}
`