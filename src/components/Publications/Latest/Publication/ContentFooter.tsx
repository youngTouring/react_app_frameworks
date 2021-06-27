import styled from "styled-components";
import { IPhoto } from "../../../../entities/Photo";
import { IPost } from "../../../../entities/Post";
import { IUser } from "../../../../entities/User";
import Color from "../../../../shared/styleHelpers/Colors";
import FontSize from "../../../../shared/styleHelpers/FontSizes";

const ContentFooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 20px;
`;

const Date = styled.span`
    color: ${Color.gray};
    font-size: ${FontSize[85]};
`;

const AuthorImage = styled.img`
    border-radius: 100%;
    object-fit: cover;
    width: 20px;
    height: 20px;
    margin: 0 12px;
`;

const AuthorName = styled.span`
    font-size: ${FontSize[85]};
    color: ${Color.darkBlue};
`;

interface IProps {
    post: IPost;
    photo: IPhoto | null;
    user: IUser | null;
}

function ContentFooter(props: IProps) {
    const date = "7 Jan. 2020";

    return (
        <ContentFooterContainer>
            <Date className="date">{date}</Date>
            <AuthorImage src={props.photo?.thumbnailUrl} alt="author" />
            <AuthorName className="author-name">{props.user?.name}</AuthorName>
        </ContentFooterContainer>
    );
}

export default ContentFooter;
