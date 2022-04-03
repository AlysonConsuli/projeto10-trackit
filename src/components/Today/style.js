import styled from "styled-components";

export const $Today = styled.div`

background-color: #f2f2f2;
min-height: calc(100vh - 70px);

h1{
    font-size: 23px;
    color: #126BA5;
    padding-top: 28px;
    margin: 0 0 5px 17px;
}

h2{
    font-size: 18px;
    color: #BABABA;
    margin-left: 17px;
}

strong{
    color: #8FC549;
}

main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 28px;
    padding-bottom: 110px;
}
`