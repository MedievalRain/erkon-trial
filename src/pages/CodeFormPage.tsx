import { formatPhone } from "../features/phone/phoneUtils";
import styled from "styled-components";
import FormSubmitButton from "../features/phone/FormSubmitButton";
import { Form } from "../ui/Form";
import { BackControls } from "../features/code/BackControls";
import { CodeInput } from "../features/code/CodeInput";
import { RetryCodeSend } from "../features/code/RetryCodeSend";
import { FormErrorText } from "../ui/FormErrorText";
import { useCode } from "../features/code/useCode";

const InfoText = styled.span`
  text-align: center;
  max-width: 311px;
  margin-top: 38px;
`;

function CodeFormPage() {
  const { errorText, handleCodeSubmit, code, setCode, isLoading, phone } =
    useCode();

  return (
    <Form onSubmit={handleCodeSubmit} id="codeForm">
      <BackControls />
      <FormErrorText>{errorText}</FormErrorText>
      <InfoText>
        Введите код, отправленный на номер <br /> {formatPhone(phone)}
      </InfoText>
      <CodeInput code={code} setCode={setCode} />
      <RetryCodeSend code={code} />
      <FormSubmitButton isLoading={isLoading} />
    </Form>
  );
}

export default CodeFormPage;
