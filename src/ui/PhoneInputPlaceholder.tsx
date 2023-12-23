import styled from "styled-components";
import { formatPlaceholder } from "../features/phone/phoneUtils";

const StyledPhoneInputPlaceholder = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
  padding: 12px 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  white-space: pre;
  color: #5b5b5b;
  z-index: 1;
  width: 100%;
  text-indent: 12px;
`;

type PhoneInputPlaceholderProps = {
  phone: string;
};

function PhoneInputPlaceholder({ phone }: PhoneInputPlaceholderProps) {
  const formattedPlaceholder = formatPlaceholder(phone);
  return (
    <StyledPhoneInputPlaceholder>
      {formattedPlaceholder}
    </StyledPhoneInputPlaceholder>
  );
}

export { PhoneInputPlaceholder };
