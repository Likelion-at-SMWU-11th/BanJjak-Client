import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    body{
        width : 390px;
        height : 844px;
        margin: 0 auto;
        border : 1px solid #dbdbdb;
        overflow: auto;
    
    };
    #TopBar {
        margin-bottom : 10px;
        box-shadow: 0px 3px 4px -2px #9c9c9c;
        padding: 20px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;

        color: #3E3E3E;
        font-size: 20px;
        font-weight: 600;
    };

    #exitBtn {
        cursor: pointer;
    };

    .invisibleContent {
        visibility: hidden
    }
    
    button::hover {
        cursor: pointer;
    }
`


export default GlobalStyle;