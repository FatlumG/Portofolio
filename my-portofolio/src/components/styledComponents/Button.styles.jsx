import styled from "styled-components";

export const HeaderBtn = styled.button`
  background-color: ${(props) =>
    props.variant === "header"
      ? "transparent"
      : props.variant === "white"
      ? "transparent"
      : "var(--purple)"};
  color: ${(props) =>
    props.variant === "header"
      ? "var(--purple)"
      : props.variant === "white"
      ? "var(--white)"
      : "var(--white)"};
  border: 2px solid
    ${(props) =>
      props.variant === "header"
        ? "var(--purple)"
        : props.variant === "white"
        ? "var(--white)"
        : "var(--purple)"};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.variant === "header" ? "var(--purple)" : "transparent"};
    color: ${(props) =>
      props.variant === "header" ? "var(--white)" : "var(--purple)"};
    border-color: var(--purple);
  }

  &:active {
    position: relative;
    bottom: 3px;
  }
`;
