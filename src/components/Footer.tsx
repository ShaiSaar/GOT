import React from "react";
import styled, {css} from "styled-components";
import { deviceSize } from '../media-query-sizes';

export interface Props {
  disabled: boolean;
  getNextPage: () => void;
  theme?: any;
}

const FooterFC: React.FC<Props> = ({disabled, getNextPage}: Props) => {
  return (
    <Footer>
        <Button disabled={disabled} onClick={() => getNextPage()}>More</Button>
    </Footer>
  );
}

export default FooterFC;

const Button = styled.button`
  background-color: ${props => props.theme.bg_colors.B03};
  border: 4px ridge ${props => props.theme.text_colors.T03};
  padding: 13px 25px;
  font-size: 19px;
  font-family: 'Skranji',cursive;
  font-weight: 100;
  border-radius: 10px;
  color: ${props => props.theme.text_colors.T03};
  text-shadow: 2px 2px ${props => props.theme.shadow.S01};
  box-shadow: inset 0 0 10px ${props => props.theme.shadow.S01};
  letter-spacing: 1.5px;
  cursor: pointer;

  ${(props: any) => props.disabled && css`
    cursor: not-allowed;
    background-color: ${props => props.theme.bg_colors.B04};
    color: ${props => props.theme.text_colors.T02};
  `
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 18px;

  @media screen and (max-width: ${deviceSize.tablet}) {
    & {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
`;