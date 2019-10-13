import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{theme: any}>`
    html, body {
        ${(props) => props.theme.fonts && props.theme.fonts.map((file: any)=> css`
                    @import url(${file});
                `)}
        color: ${(props) => props.theme.titleColor};    
        font-family: ${(props) => props.theme.fontFamily}; 
        font-size: ${(props) => props.theme.fontSize};    
        background-color: ${(props) => props.theme.backgroundColor};
        height: 100%;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    * {
        box-sizing: border-box;
    }
`;