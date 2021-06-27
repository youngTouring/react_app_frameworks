import styled from "styled-components";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

const MainPageWrapper = styled.div``;

const Container = styled.div`
  padding-top: 16px;
  display: flex;
  flex-direction: row;
  position: relative;
  top: 50px;
`;

const SidebarWrapper = styled.div`
  width: 300px;
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 300px);
  padding-right: 64px;
  display: flex;
  flex-direction: column;
`;

interface IProps {
  children: JSX.Element;
}

const MainLayout = ({ children }: IProps) => {
  return (
    <MainPageWrapper>
      <Header />
      <Container>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </Container>
    </MainPageWrapper>
  );
}

export default MainLayout;
