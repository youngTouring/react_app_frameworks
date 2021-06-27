import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`;

const LogoImage = styled.img`
  width: 36px;
`;

function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src="/logo.png" alt="logo" />
    </LogoWrapper>
  );
}

export default Logo;