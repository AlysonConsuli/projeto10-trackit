import styled from "styled-components";

export const DayBtn = styled.div`
width: 30px;
height: 30px;
background-color: ${props => props.selected ? '#CFCFCF' : '#fff'};
border: ${props => props.selected ? '1px solid #CFCFCF' : '1px solid #D4D4D4'};
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;

span{
    font-size: 20px;
    color: ${props => props.selected ? '#fff' : '#DBDBDB'};
}
`