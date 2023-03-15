import { css } from "styled-components"

export const mobile = ( props ) => {
    return css`
    @media only screen and (max-width: 414px) {
        ${props}
    }  
    `;
};

export const iPad = ( props ) => {
    return css`
    @media only screen and (max-width: 822px) {
        ${props}
    }  
    `;
};