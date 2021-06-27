import { IPhoto } from "../../entities/Photo";

export const setUserPhoto = (userPhoto: IPhoto|null = null) => {
    return {
        type: 'setUserPhoto',
        userPhoto: userPhoto
    };
}