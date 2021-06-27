import styled from "styled-components";
import { IPhoto } from "../../../entities/Photo";
import { IPost } from "../../../entities/Post";
import { IUser } from "../../../entities/User";
import Color from "../../../shared/styleHelpers/Colors";
import ContentFooter from "./Publication/ContentFooter";

const PublicationContainer = styled.div`
    height: 80px;
    padding: 5px 0;
    display: flex;
    flex-direction: row;
`;

const Image = styled.img`
    height: 70px;
    width: 70px;
    object-fit: cover;
`;

const Content = styled.div`
    padding: 2px 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 900;
    color: ${Color.darkBlue};
    line-height: 1.2rem;
`;

interface IProps {
    post: IPost;
    photo: IPhoto | null;
    user: IUser | null;
}

function PublicationItem(props: IProps) {
    return (
        <PublicationContainer>
            <Image src={props.photo?.url} alt="item" />
            <Content>
                <Title>{props.post.title}</Title>
                <ContentFooter post={props.post} photo={props.photo} user={props.user}/>
            </Content>
        </PublicationContainer>
    );
}

export default PublicationItem;
