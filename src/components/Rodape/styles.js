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
  margin: 10px;
`;

export const Link = styled.a`
  color: #404040;
  margin-left: 5px;
  margin-right: 5px;
  &:hover {
    color: #3c5064;
    cursor: pointer;
  }
`;
