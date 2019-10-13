import styled from 'styled-components';
import { device } from '../devices';

export const Label = styled.label`
  color: ${(props: any) => props.theme.labelColor};
  font-family: ${(props: any) => props.theme.fontFamily};
`;

export const Password = styled.input`
  display: block;
  line-height: 30px;
  padding-left: 4px;
  font-family: ${(props: any) => props.theme.fontFamily};
  font-size: ${(props: any) => props.theme.inputFontsize};
  color: ${(props: any) => props.theme.labelColor};
  height: ${(props: any) => props.theme.textfieldHeight};
  width: ${(props: any) => props.theme.textfieldWidthWide};
  border: 1px solid ${(props: any) => props.theme.labelColor};
  padding-right: 50px;
  @media only screen and ${device.mobile} {
    width: ${(props: any) => props.theme.textfieldWidth};
  }
`;

export const ShowHideButton = styled.button`
  position: absolute;
  top: 38px;
  right: 5px;
  border: none;
  background: none;
  width: 56px;
  text-align: left;
`;

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
`;