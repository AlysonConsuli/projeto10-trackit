import styled from "styled-components";

export const $TodayHabit = styled.div`
height: 94px;
background-color: yellowgreen;
margin: 10px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;

h3{
    font-weight: 700;
    margin-bottom: 5px;
}

button{
    position: absolute;
    right: 0;
    background-color: ${props => props.done ? 'green' : 'grey'};
}

strong{
    color: ${props => props.done ? 'green' : 'black'};
}
`