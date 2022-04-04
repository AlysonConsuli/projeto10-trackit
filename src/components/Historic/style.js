import styled from "styled-components";

export const $Historic = styled.div`

background-color: #f2f2f2;
min-height: calc(100vh - 70px);

h1{
    font-size: 23px;
    color: #126BA5;
    padding: 28px 0 17px 17px;
}

main{
    padding-bottom: 105px;

    p{
        font-size: 18px;
        color: #666666;
        margin: 0 22px 0 15px;
    }
}

.react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
    margin: 0 auto;
}

.react-calendar--doubleView {
    width: 700px;
}

.react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
}

.react-calendar--doubleView .react-calendar__viewContainer>* {
    width: 50%;
    margin: 0.5em;
}

.react-calendar,
.react-calendar *,
.react-calendar *:before,
.react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
}

.react-calendar button:enabled:hover {
    cursor: pointer;
}

.react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
}

.react-calendar__navigation button {
    min-width: 44px;
    background: none;
}

.react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
}

.react-calendar__navigation button:enabled:hover,
.react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
}

.react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
}


.react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
}

.react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
}

.react-calendar__month-view__days__day {
    height: 50px;
}
.react-calendar__month-view__days__day > * {
    padding: 7px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.react-calendar__month-view__days__day--weekend {
    color: #d10000;
}

.react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
}

.react-calendar__year-view .react-calendar__tile,
.react-calendar__decade-view .react-calendar__tile,
.react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
}

.react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    background: none;
    text-align: center;
    line-height: 16px;
}

.react-calendar__tile:disabled {
    background-color: #f0f0f0;
}

.react-calendar__tile:enabled:hover,
.react-calendar__tile:enabled:focus {
    background-color: #e6e6e6;
}

.react-calendar__tile--now {
    background: #FFFF81;
}

.react-calendar__tile--hasActive {
    background: #76baff;
}

.react-calendar__tile--hasActive:enabled:hover,
.react-calendar__tile--hasActive:enabled:focus {
    background: #a9d4ff;
}

.react-calendar__tile--active {
    //background: #FFFF81;
    color: black;
}

.react-calendar__tile--active:enabled:hover,
.react-calendar__tile--active:enabled:focus {
    background: #1087ff;
}

.react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
}

.completed > * {
    background-color: #8CC654;
    //color: black;
}

.incompleted > * {
    background-color: #EA5766;
    //color: black;
}
`

export const HabitsDay = styled.div`
margin: 20px 17px 0 17px;
background-color: white;
border: 1px solid #A0A096;
border-radius: 5px;
padding: 10px;
`

export const Li = styled.li`
font-size: 18px;
margin-bottom: 5px;
color: ${props => props.done ? '#8CC654' : '#EA5766'};
`