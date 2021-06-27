import { UserData } from "../../entities/UserData";

interface IUserDataReducerAction {
  type: string;
  userData: UserData;
}

const setUserData = (state = null, action: IUserDataReducerAction) => {
  switch (action.type) {
    case 'setUserData': return action.userData;
    default: return state;
  }
}

export default setUserData;