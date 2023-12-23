import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LeftArrowIcon from "../../ui/icons/LeftArrowIcon";

const StyledBackControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BackButton = styled.button`
  width: 44px;
  height: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
`;
const Placeholder = styled.div`
  width: 44px;
  height: 32px;
`;
const HeaderText = styled.h1`
  color: ${(props) => props.theme.textBase};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;

function BackControls() {
  const navigate = useNavigate();
  return (
    <StyledBackControls>
      <BackButton type="button" onClick={() => navigate("/auth")}>
        <LeftArrowIcon />
      </BackButton>
      <HeaderText>Вход по коду</HeaderText>
      <Placeholder />
    </StyledBackControls>
  );
}

export { BackControls };
