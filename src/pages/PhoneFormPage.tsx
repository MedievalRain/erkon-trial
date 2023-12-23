import FormSubmitButton from "../features/phone/FormSubmitButton";
import { Form } from "../ui/Form";
import { Label } from "../ui/Label";
import { Logo } from "../ui/Logo";
import { FormErrorText } from "../ui/FormErrorText";
import { PhoneInput } from "../features/phone/PhoneInput";
import { usePhone } from "../features/phone/usePhone";

function PhoneFormPage() {
  const { errorText, onPhoneSubmit, isLoading, phone, setPhone } = usePhone();
  return (
    <Form onSubmit={onPhoneSubmit}>
      <Logo />
      <Label htmlFor="phone">Телефон для входа</Label>
      <FormErrorText>{errorText}</FormErrorText>
      <PhoneInput disabled={isLoading} phone={phone} setPhone={setPhone} />
      <FormSubmitButton isLoading={isLoading} />
    </Form>
  );
}

export default PhoneFormPage;
