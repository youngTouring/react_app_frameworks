import styled from "styled-components";
import { useSelector } from "react-redux";
import Color from "../../../shared/styleHelpers/Colors";
import FontSize from "../../../shared/styleHelpers/FontSizes";
import { IGlobalState } from "../../../redux/reducers";

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 6px 0 2px 0;
`;
const UserImage = styled.img`
    width: 62px;
    height: 62px;
    object-fit: cover;
    border-radius: 100%;
`;
const InfoFooter = styled.div`
    display: flex;
    flex-direction: column;
`;
const UserName = styled.span`
    color: ${Color.blue};
    text-align: center;
    font-weight: 900;
    padding: 5px 0;
`;
const CompanyName = styled.span`
    font-size: ${FontSize[90]};
    color: ${Color.gray};
    text-align: center;
    padding: 5px 0;
`;

export default function Info() {
    const user = useSelector((state: IGlobalState) => state.user);
    const userPhoto = useSelector((state: IGlobalState) => state.userPhoto);

    return (
        <div>
            <ImageContainer>
                <UserImage src={userPhoto?.thumbnailUrl} alt="user" />
            </ImageContainer>
            <InfoFooter>
                <UserName>{user?.name}</UserName>
                <CompanyName>{user?.company.name}</CompanyName>
            </InfoFooter>
        </div>
    );
}