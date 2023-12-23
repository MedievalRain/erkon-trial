import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { PhoneInputPlaceholder } from "../../ui/PhoneInputPlaceholder";
import { formatPhone, normalizePhone } from "./phoneUtils";

type PhoneInputProps = {
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  disabled?: boolean;
};

const StyledPhoneInput = styled.input`
  position: relative;
  padding: 12px 0;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px; /* 150% */
  background: transparent;
  border-radius: 12px;
  color: ${(props) => props.theme.textBase};
  z-index: 10;
  width: 100%;
  text-indent: 12px;
`;

const Wrapper = styled.div`
  position: relative;
  background: ${(props) => props.theme.auxiliaryElements};
  margin-top: 32px;
  border-radius: 12px;
  width: 100%;
`;

function PhoneInput({ phone, setPhone, disabled }: PhoneInputProps) {
  return (
    <Wrapper>
      <StyledPhoneInput
        disabled={disabled}
        value={formatPhone(phone)}
        onChange={(e) => setPhone(normalizePhone(e.target.value))}
        id="phone"
        type="tel"
      />
      <PhoneInputPlaceholder phone={phone} />
    </Wrapper>
  );
}

export { PhoneInput };
