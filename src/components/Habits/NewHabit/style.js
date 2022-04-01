import styled from "styled-components"

export const $NewHabit = styled.div`
background-color: yellow;
margin: 10px 0 10px 0;
display: ${props => props.$display ? 'block' : 'none'};

div{
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}
`