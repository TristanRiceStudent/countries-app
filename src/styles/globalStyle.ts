import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
        font-family: 'Nunito Sans', sans-serif;
    }

    html {
        height: 100%;
        width: 100%;
    }

    body,
    #root {
        height: 100%;
        min-height: 100%;
    }

    #root {
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
