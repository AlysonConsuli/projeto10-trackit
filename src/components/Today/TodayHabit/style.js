import styled from "styled-components";

export const $TodayHabit = styled.div`
width: 100%;
max-width: 340px;
height: 94px;
background-color: #FFF;
border-radius: 5px;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
padding: 13px 0 17px 15px;

h3{
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
}

span{
    font-size: 12.976px;
    color: #666666;
}

button{
    position: absolute;
    right: 13px;
    width: 69px;
    height: 69px;
    background-color: ${props => props.status ? '#8FC549' : '#EBEBEB'};
    border: ${props => props.status ? 'none' : '1px solid #E7E7E7'};
}

strong{
    color: ${props => props.done ? '#8FC549' : '#666666'};
}
`