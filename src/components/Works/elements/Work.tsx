import styled from "styled-components";
import Color from "../../../shared/styleHelpers/Colors";
import { Dot } from "../../../shared/components/Dot";
import FontSize from "../../../shared/styleHelpers/FontSizes";
import { IComment } from "../../../entities/Comment";
import { IUser } from "../../../entities/User";
import { IPhoto } from "../../../entities/Photo";

const ItemContainer = styled.div`
    box-shadow: 0px 2px 3px 0px #cccccc;
    background-color: white;
    margin-bottom: 8px;
    padding: 6px 12px;
`;

const Title = styled.h4`
    color: ${Color.blue};
    font-weight: 900;
    margin: 0px;
`;

const Content = styled.p`
    padding: 8px 0;
    margin: 0px;
    color: ${Color.darkGray};
`;

const Footer = styled.div`
    display: flex;
    align-items: center;
`;

const UserImage = styled.img`
    width: 18px;
    height: 18px;
    border-radius: 100%;
    margin-right: 4px;
`;

const UserName = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.darkGray};
`;

const JobType = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.darkGray};
`;

const UserInfo = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.gray};
`;

interface IProps {
    comment: IComment;
    photo: IPhoto | null,
    user: IUser | null;
}

export default function Work(props: IProps) {
    return (
        <ItemContainer>
            <Title>{props.comment.name}</Title>
            <Content>{props.comment.body}</Content>
            <Footer>
                <UserImage src={props.photo?.thumbnailUrl}/>
                <UserName>{props.user?.name}</UserName>
                <Dot />
                <JobType>Corporate</JobType>
                <Dot />
                <UserInfo>Updated 3 days ago by {props.user?.name}</UserInfo>
            </Footer>
        </ItemContainer>
    );
}