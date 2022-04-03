import styled from "styled-components";

export const $Habits = styled.div`

background-color: #f2f2f2;
min-height: calc(100vh - 70px);

main{
    padding-bottom: 105px;
    p{
        font-size: 18px;
        color: #666666;
        margin: 0 18px;
    }
}
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 22px 18px;

    button{
        width: 40px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 27px;
        text-align: center;
        border: none;
    }

    h1{
        font-family: 'Lexend Deca';
        font-size: 23px;
        color: #126BA5;
    }
`