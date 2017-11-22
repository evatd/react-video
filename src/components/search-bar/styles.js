import styled from "styled-components";

export const SearchBarStyle = styled.div`
  margin: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: relative;
  pointer-event: none;

  @media (min-width: 720px) {
    width: 50%;
  }
`;
export const InputStyle = styled.input`
  width: 90%;
  position: relative;
  height: 37px;
  padding: 0 10px;
  appearance: none;
  border: 0;
  border: 2px solid #f5f5f1;
  outline: none;
  padding: 0 20px;
  border-radius: 37px;
  pointer-events: all;
  font-size: 14px;
  transition: border 0.25s ease, width 0.125s ease 0.125s;

  &:focus {
    border: 2px solid #0000ff;
    width: 100%;
  }
`;
