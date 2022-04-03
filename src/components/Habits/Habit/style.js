import styled from "styled-components";

export const $Habit = styled.div`
max-width: 340px;
height: 91px;
background: #FFFFFF;
border-radius: 5px;
position: relative;
padding: 13px 0 0 15px;
margin: 0 auto 10px auto;

h3{
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
}

img{
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
}

`
export const DayBox = styled.div`
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

export const Blocks = styled.div`
display: flex;
gap: 4px;
`