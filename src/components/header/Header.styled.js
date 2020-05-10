import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const OptionStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainerSC = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoConatinerSC = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainerSC = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLinkSC = styled(Link)`
  ${OptionStyles}
`;

export const OptionDivSC = styled(Link)`
  ${OptionStyles}
`;
