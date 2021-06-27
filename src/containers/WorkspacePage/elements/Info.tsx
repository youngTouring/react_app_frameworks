import { faBuilding, faCalendarAlt, faSitemap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: #e9e9e9;
  padding: 18px;
`;

const Header = styled.div`
  margin-bottom: 18px;
`;

const HeaderText = styled.span`
  padding: 5px;
  color: ${Color.gray};
`;

const Content = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)) ;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  padding: 14px 10px;
`;

const ItemIcon = styled(FontAwesomeIcon)`
  font-size: 2.1rem;

  & {
    color: ${Color.darkBlue};
  }
`;

const ItemTitle = styled.span`
  font-size: 1.2rem;
  padding: 14px 0;
`;

const ItemDescription = styled.span`
  font-size: 0.92rem;
  color: ${Color.darkBlue};
`;

function Info() {

  return (
    <InfoContainer>
      <Header>
        <HeaderText>Start working on corporate matters</HeaderText>
      </Header>
      <Content>
        <ItemBox>
          <ItemIcon icon={faBuilding}/>
          <ItemTitle>Explore your <b>entities</b></ItemTitle>
          <ItemDescription>Take a few minutes to look at the most important elements and specificities of your entities.</ItemDescription>
        </ItemBox>
        <ItemBox>
          <ItemIcon icon={faSitemap}/>
          <ItemTitle>Structure the <b>owership</b></ItemTitle>
          <ItemDescription>Get a clear view of the owership by looking at the relations between individuals and entities.</ItemDescription>
        </ItemBox>
        <ItemBox>
          <ItemIcon icon={faCalendarAlt}/>
          <ItemTitle>Define the <b>calendar</b></ItemTitle>
          <ItemDescription>Prepare future events by creating detailed plans around the life of your entity.</ItemDescription>
        </ItemBox>
      </Content>
    </InfoContainer>
  );
}

export default Info;
