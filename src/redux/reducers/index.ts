import { combineReducers } from "redux";
import { IUser } from "../../entities/User";
import { IWorkspace } from "../../entities/Workspace";
import UserReducer from "./UserReducer";
import UserDataReducer from "./UserDataReducer";
import UserPhotoReducer from "./UserPhotoReducer";
import WorkspaceReducer from "./WorkspaceReducer";
import LayoutReducer from "./LayoutReducer";
import { Layout } from "../../helpers/Layout";
import { IPhoto } from "../../entities/Photo";
import { UserData } from "../../entities/UserData";

export interface IGlobalState {
    user: IUser|null;
    userData: UserData|null;
    userPhoto: IPhoto|null,
    workspaces: IWorkspace[]|null;
    layout: Layout,
}

const reducers = {
    user: UserReducer,
    userData: UserDataReducer,
    userPhoto: UserPhotoReducer,
    workspaces : WorkspaceReducer,
    layout : LayoutReducer,
}

export default combineReducers(reducers);