import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 24px;
  list-style: none;
`;

export const Li = styled.li`
  background: ${props => props.theme.colors.white};
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const ListButton = styled.button.attrs(() => ({ type: "button" }))`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: transparent;
  &:hover {
    opacity: 0.8;
  }
`;

export const StrongText = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: ${props => props.theme.colors.gray5};
  p + & {
    margin-top: 32px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  color: ${props => props.theme.colors.gray4};
  line-height: 21px;
`;

export const FiTrash2Icon = styled(FiTrash2).attrs(props => ({
  color: props.theme.colors.gray2,
  size: "20px"
}))``;
