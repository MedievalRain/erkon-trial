import { PropsWithChildren, memo } from "react";
import styled from "styled-components";

const StyledFormErrorText = styled.p`
  color: #ff3d3d;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  height: 16px;
`;

const FormErrorText = memo(function FormErrorText({
  children,
}: PropsWithChildren) {
  return <StyledFormErrorText>{children}</StyledFormErrorText>;
});

export { FormErrorText };
