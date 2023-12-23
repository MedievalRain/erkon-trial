import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styled from "styled-components";

type CodeInputProps = {
  code: string;
  setCode: Dispatch<SetStateAction<string>>;
};

const StyledCodeInput = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  margin-top: 32px;
`;

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  pointer-events: none;
`;

const CodeBox = styled.div`
  display: flex;
  height: 56px;
  width: 56px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: ${(props) => props.theme.auxiliaryElements};
  color: ${(props) => props.theme.textBase};
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 112.5% */
`;

function CodeInput({ code, setCode }: CodeInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <StyledCodeInput htmlFor="codeInput">
        <CodeBox>{code[0]}</CodeBox>
        <CodeBox>{code[1]}</CodeBox>
        <CodeBox>{code[2]}</CodeBox>
        <CodeBox>{code[3]}</CodeBox>
      </StyledCodeInput>
      <HiddenInput
        form="codeForm"
        ref={inputRef}
        autoComplete="off"
        value={code}
        onChange={(e) => setCode(e.target.value.slice(0, 4))}
        id="codeInput"
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
      />
    </>
  );
}

export { CodeInput };
