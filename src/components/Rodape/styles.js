import styled from "styled-components";

export const Text = styled.p`
  margin: 5px;
  font-size: 10pt;
  font-style: italic;
  color: #404040;
`;

export const Nome = styled.p`
  margin: 7px;
  margin-top: 20px;
  font-size: 18pt;
  color: #3c5064;
  font-weight: bold;
`;

export const Info = styled.p`
  font-size: 13pt;
  margin: 0;
  color: #404040;
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

export const Link = styled.a`
  color: #404040;
  margin: 6px;
  font-size: 25px;
  &:hover {
    font-size: 30px;
    margin: 1px;
    margin-left: 4px;
    margin-right: 3px;
    color: #3c5064;
    cursor: pointer;
  }
`;
