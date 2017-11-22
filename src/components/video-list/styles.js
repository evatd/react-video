import styled from "styled-components";

export const List = styled.div`
  @media (min-width: 720px) {
    margin-left: 10px;
  }
`;

export const Item = styled.a`
  flex: 1 0 auto;

  display: flex;

  transition: background 0.3s ease;

  padding: 5px 0;
  border-top: 1px solid #ddd;
  cursor: pointer;

  &:last-child {
    border-bottom: 1px solid #ddd;
  }

  &:hover {
    background-color: #f5f5f1;
  }
`;

export const Thumbnail = styled.img`
  flex: 0 0 auto;

  max-width: 120px;
  margin-right: 5px;
`;

export const Title = styled.div`
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.5px;
  font-size: 15px;
  font-weight: 600;
`;
