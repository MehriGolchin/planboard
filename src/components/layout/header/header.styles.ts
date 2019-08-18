import styled, { css } from 'styled-components';
import { device } from '../devices';

export interface CollapsableProps {
    readonly collapsed: boolean;
}

export const Head = styled.header<CollapsableProps>`
    position: relative;
    display: flex;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    height: 70px;
    border-bottom: 1px solid rgba(179, 187, 193, 0.25);
    @media only screen and ${device.tablet} {
        height: ${(props) => props.collapsed ? '100%' : '50px'};
        flex-direction: column;
    }
`;


export const Toggle = styled.a`
    position: absolute;
    display: none;
    flex-direction: column;
    align-self: flex-end;
    justify-content: space-around;
    cursor: pointer;
    height: 24px;
    width: 36px;
    background: transparent;
    border: none;
    padding: 0;
    right: 1em;
    top: 0.5em;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    @media only screen and ${device.tablet} {
        display: flex;
    }
`;

export const LineTop = styled.div<CollapsableProps>`
    width: 25px;
    height: 2px;
    background: grey;
    transition: all 0.2s ease;
    transform: ${(props) => props.collapsed ? 'rotate(45deg)':'none'};
    ${(props) => props.collapsed && css`
        top: 0.5em;
        position: absolute;
    `}
`;

export const LineMiddle = styled.div<CollapsableProps>`
    width: 25px;
    height: 2px;
    background: grey;
    transition: all 0.2s ease;
    opacity: ${(props) => props.collapsed ? 0: 1};
    transform: ${(props) => props.collapsed ? 'translateX(-16px)':'none'};
`;

export const LineBottom = styled.div<CollapsableProps>`
    width: 25px;
    height: 2px;
    background: grey;
    transition: all 0.2s ease;
    transform: ${(props) => props.collapsed ? 'translateX(-1px) rotate(-45deg)':'none'};
    ${(props) => props.collapsed && css`
        top: 0.5em;
        position: absolute;
    `}
`;

