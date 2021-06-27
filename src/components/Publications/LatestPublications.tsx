import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getPhotos } from "../../api/Photo";
import { getPosts } from "../../api/Post";
import { getUsers } from "../../api/User";
import { IPhoto } from "../../entities/Photo";
import { IPost } from "../../entities/Post";
import { IUser } from "../../entities/User";
import Color from "../../shared/styleHelpers/Colors";
import ContentFooter from "./Latest/Publication/ContentFooter";
import PublicationItem from "./Latest/PublicationItem";
import Title from "./Latest/Title";

const LatestPublicationsWrapper = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: row;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid #e9e9e9;
    box-shadow: 0px 2px 3px 0px #cccccc;
`;

const BigImage = styled.img`
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .45s;
    filter: blur(1px);
`;

const ImageContainer = styled.div`
    height: 300px;
    width: 300px;
    overflow: hidden;
    position: relative;

    &:hover {
        cursor: pointer;
    }

    &:hover > img {
        transform: scale(1.12);
        filter: blur(0px);
    }
`;

const ImageAbsoluteContainer = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: 10px 10px 30px 10px;
`;

const ImageTitle = styled.span`
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    font-weight: 900;
    color: ${Color.darkWhite};
    line-height: 1.35rem;
`;

const ContentContainer = styled.div`
    background-color: white;
    width: calc(100% - 300px);
    padding: 5px 15px;
`;

const TitleWrapper = styled.div`
    height: 25px;
`;

const SeeMoreTextWrapper = styled.div`
    height: 25px;
    display: flex;
    align-items: center;
    
    a {
        text-decoration: none;
    }
`;

const SeeMore = styled.span`
    color: ${Color.blue};
    font-weight: 900;
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 50px);
`;

const ContentFooterWrapper = styled.div`
    margin: 3px 0;

    .author-name,
    .date {
        color: ${Color.darkWhite};
    }
`;

function getUser(users: IUser[], userId: number) 
{
    for(let i = 0; i < users.length; i++) {
        if(users[i].id === userId) {
            return users[i];
        }
    }

    return null;
}

function getPhoto(photos: IPhoto[], userId: number) 
{
    for(let i = 0; i < photos.length; i++) {
        if(photos[i].id === userId) {
            return photos[i];
        }
    }

    return null;
}

function LatestPublications() {

    const [posts, setPosts] = useState<IPost[]>([]);
    const [photos, setPhotos] = useState<IPhoto[]>([]);
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        async function getData()
        {
            let [posts, photos, users] = await Promise.all([
                getPosts().then(response => response.json()).then(data => data),
                getPhotos().then(response => response.json()).then(data => data),
                getUsers().then(response => response.json()).then(data => data),
            ]);

            setPosts(posts);
            setPhotos(photos);
            setUsers(users);
        }

        getData();
    }, []);

    if (posts.length === 0) {
        return null;
    }

    const firstItem = posts[0];
    const items = posts.slice(1, 4);
    const itemsToShow: JSX.Element[] = [];

    items.forEach(element => {
        itemsToShow.push(<PublicationItem key={element.id} post={element} photo={getPhoto(photos, element.userId)} user={getUser(users, element.userId)}/>)
    })

    return (
        <LatestPublicationsWrapper>
            <ImageContainer>
                <BigImage src={getPhoto(photos, firstItem.userId)?.url} alt="publications main" />
                <ImageAbsoluteContainer>
                    <ImageTitle>
                        {firstItem?.title}
                    </ImageTitle>
                    <ContentFooterWrapper>
                        <ContentFooter post={firstItem} photo={getPhoto(photos, firstItem.userId)} user={getUser(users, firstItem.userId)}/>
                    </ContentFooterWrapper>
                </ImageAbsoluteContainer>
            </ImageContainer>
            <ContentContainer>
                <TitleWrapper>
                    <Title />
                </TitleWrapper>
                <Items>
                    {itemsToShow}
                </Items>
                <SeeMoreTextWrapper>
                    <Link to="/publications">
                        <SeeMore>See more publications</SeeMore>
                    </Link>
                </SeeMoreTextWrapper>
            </ContentContainer>
        </LatestPublicationsWrapper>
    );
}

export default LatestPublications;
