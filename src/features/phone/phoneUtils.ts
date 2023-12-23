export const formatPhone = (phone: string) => {
  let formattedPhone = "+7 ";

  if (phone.length > 0) {
    formattedPhone += "(";
  }
  formattedPhone += phone.slice(0, 3);
  if (phone.length > 3) {
    formattedPhone += ") ";
  }

  formattedPhone += phone.slice(3, 6);
  if (phone.length > 6) {
    formattedPhone += "-";
  }
  formattedPhone += phone.slice(6, 8);
  if (phone.length > 8) {
    formattedPhone += "-";
  }
  formattedPhone += phone.slice(8, 10);

  return formattedPhone;
};

export const normalizePhone = (formattedPhone: string) => {
  return formattedPhone
    .replace("+7", "")
    .replace(/[^0-9]/g, "")
    .slice(0, 10);
};

export const validatePhone = (phone: string) => {
  if (phone.length !== 10) {
    return "Номер телефона должен состоять из 10 цифр";
  }
  if (phone !== phone.replace(/[^0-9]/g, "")) {
    return "Номер телефона должен состоять только из цифр";
  }

  return null;
};

export const formatPlaceholder = (phone: string) => {
  const placeholder = "+7 (000) 000-00-00";
  const formattedPhone = formatPhone(phone);
  const formattedPlaceholder = (
    formattedPhone + placeholder.slice(formattedPhone.length)
  ).replaceAll("0", "  ");
  return formattedPlaceholder;
};
