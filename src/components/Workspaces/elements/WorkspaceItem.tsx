import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { Dot } from "../../../shared/components/Dot";
import FontSize from "../../../shared/styleHelpers/FontSizes";
import { IWorkspace } from "../../../entities/Workspace";

const ItemContainer = styled.div`
    box-shadow: 0px 2px 3px 0px #cccccc;
    height: 180px;
    width: 240px;
    min-width: 240px;
    margin: 0 12px 0 0;
    background-color: white;
    border-radius: 5px;
`;

const Content = styled.div`
    padding: 0 8px;
`;

const HeaderPictureContainer = styled.div`
    overflow: hidden;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    height: 80px;

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
`;

const TitleContainer = styled.div`
    height: 50px;
    position: relative;
    display: flex;
`;

const Title = styled.span`
    font-weight: 900;
    color: ${Color.Fiord};
    padding-left: 75px;
    padding-top: 6px;
`;

const TitleImage = styled.img`
    width: 70px; 
    height: 70px;
    object-fit: cover;
    position: absolute;
    top: -20px;
    border-radius: 5px;
`;

const InfoContainer = styled.div`
    font-size: ${FontSize[90]};
    display: flex;
    flex-direction: row;
`;

const InfoBox = styled.span`
    color: ${Color.darkGray};
    height: 25px;
    display: flex;
    align-items: center;
`;

const FooterDate = styled.div`
    font-size: ${FontSize[85]};
    color: ${Color.gray};
    height: 25px;
    display: flex;
    align-items: center;
`;

interface IProps {
    workspace: IWorkspace;
}

function WorkspaceItem(props: IProps) {

    return (
        <ItemContainer>
            <HeaderPictureContainer>
                <img src="img/man-5710164_640.jpg" alt="item" />
            </HeaderPictureContainer>
            <Content>
                <TitleContainer>
                    <TitleImage src={props.workspace.image} />
                    <Title>{props.workspace.title}</Title>
                </TitleContainer>
                <InfoContainer>
                    <InfoBox>{props.workspace.type}</InfoBox>
                    <Dot />
                    <InfoBox>{props.workspace.userCount} users</InfoBox>
                </InfoContainer>
                <FooterDate>Last update {props.workspace.lastUpdate}</FooterDate>
            </Content>
        </ItemContainer>
    );
}

export default WorkspaceItem;