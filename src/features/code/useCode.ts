import { useState, useEffect, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { login } from "../../redux/authSlice";

export const useCode = () => {
  const { phone } = useAppSelector((state) => state.auth);
  const [verifyCode, { isLoading, isSuccess, error }] =
    api.useVerifyCodeMutation();
  const [errorText, setErrorText] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [code, setCode] = useState("");
  useEffect(() => {
    if (phone === "") navigate("/auth");
  }, [phone]);
  useEffect(() => {
    if (error) {
      if ("code" in error && error.code === "401") {
        setErrorText("Неверный код");
      } else {
        setErrorText("Ошибка сервера");
      }
    }
  }, [error]);
  const handleCodeSubmit = (e: FormEvent) => {
    e.preventDefault();
    verifyCode(code);
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(login());
      setCode("");
      navigate("/app");
    }
  }, [isSuccess]);

  return { handleCodeSubmit, errorText, code, setCode, isLoading, phone };
};
