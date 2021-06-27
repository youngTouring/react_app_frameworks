import { IUser } from "../../entities/User";

interface IUserReducerAction {
  type: string;
  user: IUser|null;
}

const setUser = (state = null, action: IUserReducerAction) => {
  switch (action.type) {
    case 'setUser': return action.user;
    default: return state;
  }
}

export default setUser;