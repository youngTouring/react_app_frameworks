import { UserData } from "../../entities/UserData";

export const setUserData = (userData: UserData|null = null) => {
    return {
        type: 'setUserData',
        userData: userData
    };
}