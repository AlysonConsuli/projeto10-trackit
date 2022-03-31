import styled from "styled-components";

export const DayBtn = styled.div`
width: 30px;
height: 30px;
background-color: ${props => props.selected ? 'grey' : 'white'};
display: flex;
justify-content: center;
align-items: center;
`