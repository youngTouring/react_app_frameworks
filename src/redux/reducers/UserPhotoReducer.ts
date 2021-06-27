import { IPhoto } from "../../entities/Photo";

interface IUserReducerAction {
  type: string;
  userPhoto: IPhoto|null;
}

const setUserPhoto = (state = null, action: IUserReducerAction) => {
  switch (action.type) {
    case 'setUserPhoto': return action.userPhoto;
    default: return state;
  }
}

export default setUserPhoto;