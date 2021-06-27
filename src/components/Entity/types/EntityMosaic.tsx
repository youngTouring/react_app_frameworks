import styled from "styled-components";
import { IPhoto } from "../../../entities/Photo";
import Color from "../../../shared/styleHelpers/Colors";

const EntityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    box-shadow: 2px 5px 10px #ECECEC;
    background-color: white;
    border-radius: 4px;
    padding: 8px;
    width: 100%;
    height: max-content;
`;

const ImageWrapper = styled.div`
    width: 80px;
    min-width: 80px;
    height: 80px;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
`;

const Title = styled.span`
    color: ${Color.blue};
    font-weight: 900;
`;

const Description = styled.span`
    color: ${Color.gray};
`;

interface IProps {
    entity: IPhoto;
}

function EntityMosaic(props: IProps) 
{
    return (
        <EntityWrapper>
            <ImageWrapper>
                <Image src={props.entity.thumbnailUrl} alt="image"/>
            </ImageWrapper>
            <ContentWrapper>
                <Title>{props.entity.title}</Title>
                <Description>Caracas 1050, Distrito Capital, Venezuela</Description>
            </ContentWrapper>
        </EntityWrapper>
    );
}

export default EntityMosaic;
