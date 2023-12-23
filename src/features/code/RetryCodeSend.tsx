import { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../api/api";
import { Loader } from "../../ui/Loader";
import { formatTime } from "./codeUtils";

const StyledRetryCodeSend = styled.div`
  margin-top: 24px;
`;

const RetryButton = styled.button`
  color: #ff3d3d;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
`;

type RetryCodeSendProps = { code: string };

function RetryCodeSend({ code }: RetryCodeSendProps) {
  const [seconds, setSeconds] = useState(60);
  const [sendCode, { isLoading }] = api.useSendCodeMutation();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleRetry = () => {
    setSeconds(60);
    sendCode(code);
  };
  const formattedTime = formatTime(seconds);
  return (
    <StyledRetryCodeSend>
      {isLoading ? (
        <Loader color="#252627" />
      ) : seconds > 0 ? (
        <p>Отправить еще раз через: {formattedTime}</p>
      ) : (
        <RetryButton type="button" onClick={handleRetry}>
          Отправить еще раз
        </RetryButton>
      )}
    </StyledRetryCodeSend>
  );
}

export { RetryCodeSend };
