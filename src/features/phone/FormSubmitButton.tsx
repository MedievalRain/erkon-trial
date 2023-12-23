import styled from "styled-components";
import { Loader } from "../../ui/Loader";

const StyledFormSubmitButton = styled.button`
  max-width: 330px;
  width: 100%;
  background: ${(props) => props.theme.primaryNormal};
  color: #ffffff;
  height: 49.152px;
  font-size: 18.864px;
  font-weight: 500;
  border-radius: 12.576px;
  padding: 12.576px 14.672px;
  vertical-align: middle;
  margin-top: 160px;
  font-feature-settings: "tnum";
`;

interface FormSubmitButtonProps {
  isLoading: boolean;
}

function FormSubmitButton({ isLoading }: FormSubmitButtonProps) {
  return (
    <StyledFormSubmitButton disabled={isLoading} type="submit">
      {isLoading ? <Loader /> : "Войти"}
    </StyledFormSubmitButton>
  );
}

export default FormSubmitButton;
