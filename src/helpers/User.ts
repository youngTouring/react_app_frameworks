import { useSelector } from "react-redux";
import { IGlobalState } from "../redux/reducers";

export const IsUserLoggedIn = () => {
    return useSelector((state: IGlobalState) => state.user != null);
}

export const GetLoggedUser = () => {
    return useSelector((state: IGlobalState) => state.user);
}

export const GetLoggedUserId = () => {
    return useSelector((state: IGlobalState) => state.user?.id || null);
}