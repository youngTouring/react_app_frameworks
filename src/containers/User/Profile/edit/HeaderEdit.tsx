import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { SaveButton } from "../../../../shared/styleHelpers/components/ActionButton";
import {
    ActionBox, DataContent, DataContentColumn, DataContentRow, HeaderContainer,
    HeaderTopButton, HeaderTopContainer, SeeProfileButton, UserAvatar, UserAvatarBox,
    UserAvatarInput,
    UserDataContainer, UserDataTextCompanyNameInput, UserDataTextInput, UserDataTextUsernameInput,
} from "../styles/HeaderStyles";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setUser } from "../../../../redux/actions/UserAction";
import { GetLoggedUser } from "../../../../helpers/User";
import { IGlobalState } from "../../../../redux/reducers";
import { setUserPhoto } from "../../../../redux/actions/UserPhotoAction";

interface IProps {
    afterSave: Function;
}

interface IUserFormAttr {
    [key: string]: string;
}

function HeaderEdit(props: IProps) {
    const dispatch = useDispatch();
    const user = GetLoggedUser();

    const userPhoto = useSelector((state: IGlobalState) => state.userPhoto);
    const [avatar, setAvatar] = useState("");
    const [formAttr, setFormAttr] = useState<IUserFormAttr>({});

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormAttr({
            ...formAttr,
            [event.target.name]: event.target.value
        });
    }

    const getByFormAttr = (attr: string) => {
        if (attr in formAttr) {
            return formAttr[attr];
        }
        return null;
    }

    const saveUserData = () => {
        if (user !== null) {
            let tmpUser = Object.assign({}, user);
            tmpUser.name = getByFormAttr('user-name') || user.name;
            tmpUser.company.name = getByFormAttr('user-company-name') || user?.company?.name;
            tmpUser.address.city = getByFormAttr('address-city') || user?.address?.city;
            tmpUser.address.street = getByFormAttr('address-street') || user?.address?.street;
            tmpUser.email = getByFormAttr('email') || user.email;
            tmpUser.phone = getByFormAttr('phone') || user.phone;

            if(avatar !== "") {
                let tmpUserPhoto = Object.assign({}, userPhoto);
                tmpUserPhoto.thumbnailUrl = avatar;
                dispatch(setUserPhoto(tmpUserPhoto));
            }

            dispatch(setUser(tmpUser));
        }

        props.afterSave();
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files !== null && event.target.files.length > 0) {
            const file = URL.createObjectURL(event.target.files[0]);
            setAvatar(file);
        }
    }

    //

    return (
        <HeaderContainer>
            <HeaderTopContainer>
                <HeaderTopButton>Message</HeaderTopButton>
                <HeaderTopButton>Create a request</HeaderTopButton>
                <HeaderTopButton>Add to a cluster</HeaderTopButton>
            </HeaderTopContainer>
            <UserDataContainer>
                <UserAvatarBox>
                    <UserAvatar src={avatar === "" ? userPhoto?.thumbnailUrl : avatar} alt="profile avatar" />
                    <UserAvatarInput type="file" accept="image/*" onChange={(e) => handleImageChange(e)}/>
                    <SeeProfileButton>See profile</SeeProfileButton>
                </UserAvatarBox>
                <DataContent>
                    <DataContentRow>
                        <DataContentColumn>
                            <UserDataTextUsernameInput name="user-name" value={getByFormAttr('user-name') || user?.name} onChange={(e) => handleChange(e)} />
                            <UserDataTextCompanyNameInput name="user-company-name" value={getByFormAttr('user-company-name') || user?.company?.name} onChange={(e) => handleChange(e)} />
                        </DataContentColumn>
                        <ActionBox>
                            <SaveButton onClick={() => saveUserData()}>
                                <FontAwesomeIcon icon={faSave} />
                            </SaveButton>
                            <SaveButton onClick={() => props.afterSave()}>
                                <FontAwesomeIcon icon={faTimes} />
                            </SaveButton>
                        </ActionBox>
                    </DataContentRow>
                    <DataContentRow>
                        <DataContentColumn>
                            <UserDataTextInput name="address-city" value={getByFormAttr('address-city') || user?.address?.city} onChange={(e) => handleChange(e)} />
                            <UserDataTextInput name="address-street" value={getByFormAttr('address-street') || user?.address?.street} onChange={(e) => handleChange(e)} />
                        </DataContentColumn>
                        <DataContentColumn>
                            <UserDataTextInput name="email" value={getByFormAttr('email') || user?.email} onChange={(e) => handleChange(e)} />
                            <UserDataTextInput name="phone" value={getByFormAttr('phone') || user?.phone} onChange={(e) => handleChange(e)} />
                        </DataContentColumn>
                    </DataContentRow>
                </DataContent>
            </UserDataContainer>
        </HeaderContainer>
    );
}

export default HeaderEdit;