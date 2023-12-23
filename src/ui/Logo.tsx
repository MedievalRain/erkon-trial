import { memo } from "react";
import styled from "styled-components";

const StyledLogo = styled.h1`
  text-transform: uppercase;
  color: #252627;
  font-family: Inter;
  font-size: 26px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.5px;
  height: 22px;
  padding: 13px 0;
  margin-bottom: 48px;
`;

const Logo = memo(function Logo() {
  return <StyledLogo>LOGO</StyledLogo>;
});

export { Logo };
