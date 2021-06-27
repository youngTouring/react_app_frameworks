import styled from "styled-components";

const MainPageWrapper = styled.div``;

const Container = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  children: JSX.Element;
}

const FullScreenLayout = ({ children }: IProps) => {
  return (
    <MainPageWrapper>
      <Container>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Container>
    </MainPageWrapper>
  );
}

export default FullScreenLayout;
