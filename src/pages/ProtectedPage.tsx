import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../store";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 12px;
`;

function ProtectedPage() {
  const navigate = useNavigate();
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) navigate("/auth");
  }, [isLoggedIn]);

  return <Wrapper>Защищенная страница</Wrapper>;
}

export default ProtectedPage;
