import styled from "styled-components";

export const $Habit = styled.div`
background-color: greenyellow;
margin: 10px 0 10px 0;

div{
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}
`
export const DayBox = styled.div`
width: 30px;
height: 30px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.selected ? 'grey' : 'white'};
`