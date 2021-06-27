import { useSelector } from "react-redux";
import styled from "styled-components";
import { IGlobalState } from "../../../redux/reducers";
import Color from "../../../shared/styleHelpers/Colors";
import { Item, Image, Text, DropdownLink } from "../../../shared/styleHelpers/components/Dropdown/styles";
import FontSize from "../../../shared/styleHelpers/FontSizes";

const ItemsContainer = styled.div`
    padding: 0 12px;
`;

const UserItem = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px 0;
`;

const UserImage = styled.img`
    width: 34px;
    height: 34px;
    object-fit: cover;
    border-radius: 100%;
`;

const UserData = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 14px;
`;

const Username = styled.span`
    font-weight: 900;
    color: ${Color.darkBlue};
`;

const SeeProfileText = styled.button`
    color: ${Color.blue};
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    width: max-content;
    font-weight: 900 !important;
    font-size: ${FontSize[85]};

    &:hover {
        cursor: pointer;
    }
`;

interface IProps {
    filterText: string;
}

function Account(props: IProps) {
    const userName = useSelector((state: IGlobalState) => state?.user?.name);
    const userPhoto = useSelector((state: IGlobalState) => state?.userPhoto);

    return (
        <ItemsContainer>
            <UserItem>
                <UserImage src={userPhoto?.thumbnailUrl} alt="user" />
                <UserData>
                    <Username>{userName}</Username>
                    <DropdownLink to="/profile">
                        <SeeProfileText>See profile</SeeProfileText>
                    </DropdownLink>
                </UserData>
            </UserItem>
            <DropdownLink to="/privacy">
                <Item>
                    <Image src="/img/icons/privacy.svg" alt="publications" />
                    <Text>Privacy</Text>
                </Item>
            </DropdownLink>
            <DropdownLink to="/settings">
                <Item>
                    <Image src="/img/icons/settings.svg" alt="publications" />
                    <Text>Settings</Text>
                </Item>
            </DropdownLink>
        </ItemsContainer>
    );
}

export default Account;