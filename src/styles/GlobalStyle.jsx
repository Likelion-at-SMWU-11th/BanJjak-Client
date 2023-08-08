import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    
    body{
        width : 390px;
        height : 844px;
        margin-left : 45%;
        border : 1px solid #dbdbdb;
    };
    button {

    }`;

export default GlobalStyle;