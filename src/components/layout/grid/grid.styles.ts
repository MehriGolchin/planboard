import styled, { css } from 'styled-components';

export interface RowProps {
    readonly vertical?: boolean;
    readonly cover?: boolean;
}

export interface ColumnProps {
    readonly grow?: number;
    readonly justify?: string;
    readonly gutter?: number;
}

export const Row = styled.div<RowProps>`
    display: flex;
    align-items: stretch;
    height: 100%;
    flex-direction: ${(props) => props.vertical ? 'column' : 'row'};
    ${(props) => props.cover && css` 
        height: 100%;
    `}
`;

export const Column = styled.div<ColumnProps>`
    background: grey;
    color: #000;
    text-align: ${(props) => props.justify};
    flex: ${(props) => props.grow || 1};
    ${(props) => props.gutter && css`
        margin: ${props.gutter}px;
    `}
`;