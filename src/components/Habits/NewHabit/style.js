import styled from "styled-components"

export const $NewHabit = styled.div`
max-width: 340px;
height: 180px;
background: #FFFFFF;
border-radius: 5px;
display: ${props => props.$display ? 'block' : 'none'};
margin: 0 auto 29px auto;
position: relative;

input{
    padding-left: 11px;
    border-radius: 5px;
    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    position: absolute;
    top: 18px;
    right: 18px;

    ::placeholder{
        color: #DBDBDB;
    }
}
`

export const Submit = styled.button`
background-color: #52B6FF;
border-radius: 5px;
border: none;
font-family: 'Lexend Deca';
font-weight: 400;
text-align: center;
color: #FFFFFF;
cursor: pointer;
width: 84px;
height: 35px;
font-size: 16px;
position: absolute;
right: 16px;
bottom: 15px;
display: flex;
justify-content: center;
align-items: center;
`

export const Cancel = styled.button`
border: none;
font-family: 'Lexend Deca';
font-weight: 400;
cursor: pointer;
width: 80px;
height: 20px;
font-size: 16px;
text-align: center;
color: #52B6FF;
background-color: #fff;
position: absolute;
right: 123px;
bottom: 23px;
`

export const Boxes = styled.div`
display: flex;
gap: 4px;
position: absolute;
top: 71px;
left: 19px;
`