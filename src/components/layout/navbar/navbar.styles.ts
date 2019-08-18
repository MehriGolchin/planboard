import styled from 'styled-components';
import { device } from '../devices';

export interface NavbarProps {
    readonly authenticated: boolean;
    readonly collapsed: boolean;
}

export const Nav = styled.nav<NavbarProps>`
    font-family: ${(props: any) => props.theme.fontFamily};
    font-size: ${(props: any) => props.theme.fontSize};
    color: ${(props: any) => props.theme.titleColor};
    background-color: #fff;
    align-items: center;
    padding: 0;
    margin: 0;
    & ul {                
        padding: 0;
    }
    & li {
        display: inline-block;
        padding: 0 15px;
    }
    & li a {
        text-decoration: none;
        color: grey;
    }
    & li a:hover, a:active {
        color: green;
    }
    @media only screen and ${device.tablet} {
        & li {
            display: ${(props) => props.collapsed ? 'block' : 'none'};
            padding: 0.75em 1.5em;
            border-bottom: 1px solid rgba(179, 187, 193, 0.25);
        }
        & ul {                
            margin: 0;
            border-top: ${(props) => props.collapsed ? '1px' : '0px'} solid rgba(179, 187, 193, 0.25);
        }
    }
`;