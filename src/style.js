import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
///////// Reset.css //////////
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
a{
	text-decoration-line: none;
}
///////// Style.css //////////
*{
    box-sizing: border-box;
}
body{
    font-family: 'Lexend Deca';
    font-weight: 400;
    cursor: default;
}

input{
    height: 45px;
    width: 303px;
    padding-left: 11px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 20px;

    ::placeholder{
        color: #DBDBDB;
    }
}

button{
    width: 303px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;

    font-family: 'Lexend Deca';
    font-weight: 400;
    font-size: 21px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
}
`