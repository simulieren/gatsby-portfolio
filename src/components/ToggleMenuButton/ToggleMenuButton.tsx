import React from "react";
import styled from "styled-components";
import { Flex } from "rebass";

interface MenuLinesProps {
  open: boolean;
}

const MenuLines = styled(Flex)<MenuLinesProps>`
  z-index: 100;
  position: relative;
  cursor: pointer;
  margin-top: 5px;
  width: 44px;
  height: 22px;
  transition: transform 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);

  &::before,
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 2px;
    background-color: #00f;
    position: absolute;
    left: 0;
    transition: all 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99),
      transform 0.4s cubic-bezier(0.4, 0.01, 0.165, 0.99);
  }

  &::before {
    top: 6px;
    ${props =>
      props.open &&
      "transform: rotate(45deg) scaleX(0.7) translate(10px, 5px) !important"};
  }

  &::after {
    top: 16px;
    ${props =>
      props.open &&
      "    transform: rotate(-45deg) scaleX(0.7) translate(2px, 0px) !important"};
  }

  &:hover::before {
    transform: translateY(-2px);
  }

  &:hover::after {
    transform: translateY(2px);
  }
`;

interface ToggleMenuButtonProps {
  open: boolean;
}

const ToggleMenuButton = ({ open }: ToggleMenuButtonProps) => {
  return <MenuLines p="3" open={open} />;
};

export default ToggleMenuButton;
