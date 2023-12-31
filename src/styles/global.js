import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
    }

    html, body {
        background: ${({ theme }) => theme.colors.background};
        -webkit-font-smoothing: antialiased;
        overflow: hidden;
    }
`;
