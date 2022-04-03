import styled from "styled-components";

export const $Header = styled.header`

display: flex;
justify-content: space-between;
align-items: center;
padding: 0 18px;
height: 70px;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: sticky;
top: 0;
left: 0;
z-index: 2;

img{
    width: 51px;
    height: 51px;
    border-radius: 50%;
}

h1{
    font-family: 'Playball';
    font-size: 39px;
    color: #FFFFFF;
}
`