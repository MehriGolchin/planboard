import styled from 'styled-components';
import logo from './logo.svg';
import { device } from '../devices';

export const Logo = styled.span`
    display: inline-block;
    background-size: contain;
    background-position: left;
    background-repeat: no-repeat;
    background-image: url('${logo}');
    width: 70px;
    height: 70px;
    margin: 0 0 0 1em;
    @media only screen and ${device.tablet} {
        width: 50px;
        height: 50px;
    }
`;