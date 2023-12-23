import { useState, FormEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { useAppDispatch } from "../../store";
import { validatePhone } from "./phoneUtils";
import { savePhone } from "../authSlice";

export const usePhone = () => {
  const [phone, setPhone] = useState("");
  const [errorText, setErrorText] = useState("");
  const [sendCode, { isLoading, isSuccess, isError }] =
    api.useSendCodeMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const onPhoneSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errorText = validatePhone(phone);
    if (errorText) {
      setErrorText(errorText);
    } else {
      sendCode(`+${phone}`);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/auth/code");
      dispatch(savePhone(phone));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setErrorText("Ошибка сервера");
    }
  }, [isError]);

  return { errorText, onPhoneSubmit, isLoading, phone, setPhone };
};
