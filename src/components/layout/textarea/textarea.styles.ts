import styled from 'styled-components';
import { device } from '../devices';

export const Label = styled.label`
  color: ${(props: any) => props.theme.labelColor};
  font-family: ${(props: any) => props.theme.fontFamily};
`;

export const Input = styled.textarea`
  display: block;
  line-height: 30px;
  font-family: ${(props: any) => props.theme.fontFamily};
  font-size: ${(props: any) => props.theme.inputFontsize};
  border: 1px solid ${(props: any) => props.theme.labelColor};
  height: ${(props: any) => props.theme.textfieldHeightWide};
  width: ${(props: any) => props.theme.textfieldWidthWide};
  @media only screen and ${device.mobile} {
    width: ${(props: any) => props.theme.textfieldWidth};
  }
`;
