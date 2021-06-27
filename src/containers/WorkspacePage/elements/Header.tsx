import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { IWorkspace } from "../../../entities/Workspace";
import Color from "../../../shared/styleHelpers/Colors";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Top = styled.div``;

const TopImage = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 200px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 16px;
`;

const DescriptionImage = styled.img`
  width: 50px;
  margin-right: 14px;
`;

const BottomContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BottomContentTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: 900;
  font-size: 1.05rem;
  margin-bottom: 8px;
  color: ${Color.darkBlue};
`;

const Description = styled.span`
  font-size: 0.9rem;
  color: ${Color.gray};
`;

interface IProps {
  workspace: IWorkspace|null;
}

function Header(props: IProps) {

  if (props.workspace === null) {
    return null;
  }

  return (
    <HeaderContainer>
      <Top>
        <TopImage src="/img/man-5710164_640.jpg"/>
      </Top>
      <Bottom>
        <DescriptionImage src={props.workspace.image}/>
        <BottomContent>
          <BottomContentTop>
            <Title>{props.workspace.title}</Title>
            <FontAwesomeIcon icon={faCog}/>
          </BottomContentTop>
          <Description>{props.workspace.description}</Description>
        </BottomContent>
      </Bottom>
    </HeaderContainer>
  );
}

export default Header;
